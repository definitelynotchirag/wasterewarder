"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"


export default function addadustbinpage(){
    return(
        <div>
            <Label>Dustbin Address</Label>
            <Input type="text"/>
            <Label>Dustbin Code</Label>
            <Input type="text"/>
            <Label>QR Code</Label>
            <Input type="text"/>
            <Label>Ward</Label>
            <Input type="text"/>
            <br/>
            
            <Link href="/" className={buttonVariants({ variant: "default" })}>Back
            </Link>
            <Link href ="/" className={buttonVariants({variant:"default"})}>Create  </Link>
        </div>
    )
}