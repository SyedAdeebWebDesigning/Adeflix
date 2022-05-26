import React from 'react'
import HeaderItem from './HeaderItem'
import Link from 'next/link'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

const Header = () =>
{
    return (
        <header className="flex flex-col justify-between m-2 sm:flex-row items-center mx-10 h-auto">

            <Link href = "/"><h1 className="cursor-pointer logo-adeflix uppercase text-4xl mb-3">Adeflix</h1></Link>
            <div className="flex flex-group justify-evenly max-w-2xl mt-2 items-center">
                <HeaderItem title = 'HOME' Icon = {HomeIcon} />
                <HeaderItem title = 'TRENDING' Icon = {LightningBoltIcon} />
                <HeaderItem title = 'VERIFIED' Icon = {BadgeCheckIcon} />
                <HeaderItem title = 'COLLECTIONS' Icon = {CollectionIcon} />
                <HeaderItem title = 'SEARCH' Icon = {SearchIcon} />
                <HeaderItem title = 'ACCOUNT' Icon = {UserIcon} />
            </div>

        </header>
    )
}

export default Header