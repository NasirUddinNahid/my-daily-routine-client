import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';




const Todo = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch("http://localhost:5000/list", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log(data);

        toast.success("Wow successfully added!");
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className='w-2/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>

            <input type="text" className='input w-full border border-current h-15 mb-5' {...register("example")} />
            <input className='btn' type="submit" />

        </form>
    );
};

export default Todo;