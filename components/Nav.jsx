"use client"
import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn,signOut,useSession, getProviders} from 'next-auth'

function Nav() {
  return (
    <div>Nav</div>
  )
}

export default Nav