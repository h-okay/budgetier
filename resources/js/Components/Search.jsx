import { useForm, Head } from "@inertiajs/react";

export default function Search() {
    const { data, setData, get, processing, reset, errors } = useForm({
        search_term: "",
    });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route("spendings.search"), { onSuccess: () => reset() });
    };

    return (
        <div className="flex mb-4 justify-center mt-3">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                    placeholder="Search..."
                    value={data.search_term}
                    onChange={(e) => setData("search_term", e.target.value)}
                />
            </form>
        </div>
    );
}
