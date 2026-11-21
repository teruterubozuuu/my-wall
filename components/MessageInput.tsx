"use client";
import { Textarea } from './ui/textarea/textarea'
import { Button } from './ui/button/button'
import { SubmitEvent, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from './ui/input/input';
import { Typography } from './ui/typography/typography';
import { supabase } from '@/utils/supabase/client';

export default function MessageInput() {
    const [messageError, setMessageError] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
    const {toast} = useToast();

    const handleOnChange = (value: string) =>{
        setCharacterCount(value.length);
        if (value.length > 280){
            setMessageError("Message must be 280 characters or less.")
        } else{
            setMessageError("");
        }
    }

    const handleShare = async(e: SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            const formData = new FormData();
            const username = formData.get("username");
            const message = formData.get("message");

            if (messageError !== "") return;

           

        } catch(error){
            console.error("Failed to share message: ", error);
        }
    }

    return (
        <form className='flex flex-col gap-3' onSubmit={handleShare}>
            <Input
                label='Preferred username'
                placeholder='99per_cent_Angel'
                name="username"
            />
            <Textarea
                placeholder="What's on your mind?"
                onChange={(e)=> handleOnChange(e.target.value)}
                error={messageError}
                name="message"
                label={`${characterCount}/280`}
            />
            <div className='flex justify-end'>
                <Button variant="EXEC" className='w-fit' type='submit' disabled={messageError !== ""}>Share</Button>
            </div>
        </form>
    )
}
