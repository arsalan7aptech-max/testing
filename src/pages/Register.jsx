import React, { useEffect, useState } from "react";
import axios from "axios"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



export function Register(props) {
  const[users,setusers]=useState([]);

    async function getusers(){
   const response = await axios.get("https://6a26b8d7a84f9d39e907c2b9.mockapi.io/users");

   console.log(response.data);
   
   setusers(response.data)
   }

   useEffect(()=>{
    getusers()
   },[]) 

  return ( 
    <div>
      <h1 className="font-bold text-3xl mt-5 ml-120">Register</h1>
    <Card className={"mt-5"}{...props}>
      
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input id="name" type="text" placeholder="John Doe" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input id="confirm-password" type="password" required />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>
            <FieldGroup>
              <Field>
                <Button type="submit">Create Account</Button>
                <Button variant="outline" type="button">
                  Sign up with Google
                </Button>
                <FieldDescription className="px-6 text-center">
                  Already have an account? <a href="Login">Sign in</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>

    <Table>
     <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Password</TableHead>
                     <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>


  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.password}</TableCell>
        <TableCell>{user.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>

                </Table>
    </div>
    
  )
}
