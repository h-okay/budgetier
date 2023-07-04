import React from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";

export default function Pagination({ links }) {
    return (
        <div className="flex mb-4 justify-center mt-3">
            <div className="flex flex-wrap">
                {links.slice(1, -1).map((link, key) => (
                    <Link href={link.url} key={key}>
                        <PrimaryButton className="mx-1">
                            {link.label}
                        </PrimaryButton>
                    </Link>
                ))}
            </div>
        </div>
    );
}
