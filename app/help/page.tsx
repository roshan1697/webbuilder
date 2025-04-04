import React from 'react'
import Link from 'next/link'
import Button from '@/ui/button'

const Help = () => {
    return (
        <div className="container py-12">
            <div className="mb-8 space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Help Center</h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground">
                    Find answers to common questions and learn how to use our website builder.
                    
                </p>
                <p className="max-w-[600px] mx-auto text-muted-foreground">
                Full page coming soon
                </p>
            </div>
            <div className="flex justify-center">

                <form className="">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                                Name
                            </label>
                            <input id="name" className="w-full p-2 border rounded-md" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full p-2 border rounded-md"
                                placeholder="Your email"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                        </label>
                        <input id="subject" className="w-full p-2 border rounded-md" placeholder="Subject" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            className="w-full p-2 border rounded-md min-h-[150px]"
                            placeholder="Your message"
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            </div>
            <div className="flex justify-center mt-8">
                <Button variant="outline" asChild>
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        </div>
    )
}

export default Help