import { useForm } from "@inertiajs/react";
import TextInput from "./TextInput";

export default function Search() {
    const { data, setData, get, processing, reset, errors } = useForm({
        search_term: "",
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route("spendings.search"), {
            onSuccess: () => reset("search_term"),
        });
    };

    return (
        <div className="flex justify-end items-end">
            <form onSubmit={handleSearch}>
                <TextInput
                    id="search_term"
                    type="text"
                    value={data.search_term}
                    placeholder="Search"
                    className="h-9 dark:bg-gray-300 dark:text-black"
                    onChange={(e) => setData("search_term", e.target.value)}
                />
            </form>
        </div>
    );
}
