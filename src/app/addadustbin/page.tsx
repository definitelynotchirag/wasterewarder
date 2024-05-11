"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import {Autocomplete} from '@mantine/core';
import { locations } from "../../../public/locations";

export default function addadustbinpage(){
    return(
        <div>
            <Label>Dustbin Address</Label>
            <Input type="text"/>
            <Label>Dustbin Code</Label>
            <Input type="text"/>
            <Label>QR Code</Label>
            <Input type="text"/>
            <Autocomplete
                label="Ward"
                placeholder="Select Ward"
                limit={5}
                data={locations}/>
            <br/>
            
            <Link href="/" className={buttonVariants({ variant: "default" })}>Back
            </Link>
            <Link href ="/" className={buttonVariants({variant:"default"})}>Create  </Link>
        </div>
    )
}