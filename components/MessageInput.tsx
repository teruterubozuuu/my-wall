"use client";
import { Textarea } from './ui/textarea/textarea';
import { Button } from './ui/button/button';
import { SubmitEvent, useState } from 'react';
import { Input } from './ui/input/input';
import { supabase } from '@/utils/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
    Toast,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from './ui/toast/toast';
import NextImage from 'next/image';
import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';



export default function MessageInput() {
    const [messageError, setMessageError] = useState("");
    const [messageCount, setMessageCount] = useState(0);
    const [usernameCount, setUsernameCount] = useState(0);
    const [usernameError, setUsernameError] = useState("");
    const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
    const [filePreview, setFilePreview] = useState<string | undefined>(undefined);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const { toast, toasts, dismiss } = useToast();

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB in bytes


    const handleMessageOnChange = (value: string) => {
        setMessageCount(value.length);
        if (value.length > 280) {
            setMessageError("Message must be 280 characters or less.");
        } else {
            setMessageError("");
        }
    };

    const handleUsernameOnChange = (value: string) => {
        setUsernameCount(value.length);
        if (value.length < 3) {
            setUsernameError("Username must be at least 3 characters");
        } else if (value.length > 30) {
            setUsernameError("Username must be 30 characters or less");
        } else {
            setUsernameError("");
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) {
            setSelectedFile(null);
            setSelectedFileName(null);
            setFilePreview(undefined);
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            toast({
                title: "FILE TOO LARGE",
                description: "Image must be 5MB or smaller.",
                variant: "CRITICAL",
                duration: 6000,
            });

            e.target.value = "";
            setSelectedFile(null);
            setSelectedFileName(null);
            setFilePreview(undefined);
            return;
        }

        setSelectedFile(file);
        setFilePreview(URL.createObjectURL(file));
        setSelectedFileName(file.name);
    };

    const handleShare = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSubmitting) return;

        const form = e.currentTarget;
        const formData = new FormData(form);
        const username = formData.get("username") as string;
        const message = formData.get("message") as string;
        const image = formData.get("image") as File | null;

        if (messageError !== "") return;

        if (message.trim().length < 5 && (!image || image.size === 0)) {
            return toast({
                title: "FAILED TO SHARE MESSAGE",
                description: "Please enter at least 5 characters or upload an image.",
                variant: "CRITICAL",
                duration: 6000
            });
        }

        setIsSubmitting(true);

        try {
            let imageUrl: string | null = null;

            // 1. Upload image if one was selected
            if (image && image.size > 0) {
                const fileExt = image.name.split('.').pop();
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
                const filePath = `posts/${fileName}`;

                const { error: uploadError } = await supabase.storage
                    .from("posts-image")
                    .upload(filePath, image);

                if (uploadError) {
                    throw new Error(`Image upload failed: ${uploadError.message}`);
                }

                // 2. Get the public URL of the uploaded image
                const { data: publicUrlData } = supabase.storage
                    .from("posts-image")
                    .getPublicUrl(filePath);

                imageUrl = publicUrlData.publicUrl;
            }

            // 3. Insert post data + image_url into your table
            const { error } = await supabase
                .from("posts")
                .insert({
                    username: username,
                    message: message,
                    image_url: imageUrl,
                })
                .select();

            if (error) {
                console.error("Supabase insert error:", error);
                throw new Error(error.message);
            }

            // 4. Reset form and state on success
            form.reset();
            setMessageCount(0);
            setUsernameCount(0);
            setSelectedFileName(null);
            setFilePreview(undefined);
            setSelectedFile(null);
            toast({
                title: "SUCCESS",
                description: "MESSAGE HAS BEEN SHARED",
                variant: "STATUS",
                duration: 6000
            });
        } catch (error) {
            console.error("Failed to share message: ", error);
            toast({
                title: "FAILED TO SHARE MESSAGE",
                description: error instanceof Error ? error.message : String(error),
                variant: "CRITICAL",
                duration: 6000
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const hasMessage = messageCount > 0;
    const hasImage = selectedFile !== null;

    const isDisabled =
        isSubmitting ||
        messageError !== "" ||
        usernameError !== "" ||
        usernameCount < 3 ||
        (!hasMessage && !hasImage);

    return (
        <>
            <form className='flex flex-col gap-3' onSubmit={handleShare}>
                <Input
                    label='Preferred username'
                    placeholder='99per_cent_Angel'
                    name="username"
                    onChange={(e) => handleUsernameOnChange(e.target.value)}
                    error={usernameError}
                />
                <Textarea
                    placeholder="What's on your mind?"
                    onChange={(e) => handleMessageOnChange(e.target.value)}
                    error={messageError}
                    name="message"
                    label={`${messageCount}/280`}
                />

                {filePreview && (
                    <div className='flex justify-center mt-3'>
                        <Image width={500} height={500} src={filePreview} alt="Selected image preview" className='w-80' />
                    </div>
                )}
                <div className='flex justify-between items-center'>
                    <label className='cursor-pointer'>
                        <Input
                            type='file'
                            accept='image/*'
                            className='hidden'
                            name="image"
                            onChange={handleFileChange}
                        />
                        <div className='flex gap-3 items-center'>
                            <div className='flex items-center gap-3 text-green hover:text-white/50 transition-colors'>
                                <ImageIcon />
                                <span>{selectedFileName ? "Replace" : "Upload Image"}</span>
                            </div>
                            {selectedFileName && filePreview && (
                                <button
                                    className='text-amber hover:text-white/50 transition-colors cursor-pointer'
                                    onClick={() => {
                                        setSelectedFile(null);
                                        setFilePreview(undefined);
                                        setSelectedFileName(null);
                                    }}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    </label>
                    <Button
                        variant="EXEC"
                        className='w-fit'
                        type='submit'
                        disabled={isDisabled}
                    >
                        {isSubmitting ? "Sharing..." : "Share"}
                    </Button>

                </div>
            </form>

            <ToastProvider swipeDirection="right">
                {toasts.map((item) => (
                    <Toast
                        key={item.id}
                        open
                        duration={item.duration}
                        variant={item.variant}
                        onOpenChange={(open) => {
                            if (!open) dismiss(item.id);
                        }}
                    >
                        <ToastTitle>{item.title}</ToastTitle>
                        {item.description && (
                            <ToastDescription>{item.description}</ToastDescription>
                        )}
                    </Toast>
                ))}
                <ToastViewport />
            </ToastProvider>
        </>
    );
}
