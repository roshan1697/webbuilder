import Link from "next/link"
import Button from "@/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/ui/card"
export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen py-12 space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Website Builder</h1>
        <p className="max-w-[600px] text-muted-foreground">
          Create beautiful websites with our drag and drop builder. Start by setting up your website basics.
        </p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Create a new website project or continue with an existing one.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Link href="/new-website" className="w-full">
              <Button className="w-full">Create New Website</Button>
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href="/load-website" className="w-full">
              <Button variant="outline" className="w-full">
                Load Existing Website
              </Button>
            </Link>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/templates" className="text-sm text-muted-foreground hover:underline">
            Browse Templates
          </Link>
          <Link href="/help" className="text-sm text-muted-foreground hover:underline">
            Need Help?
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}