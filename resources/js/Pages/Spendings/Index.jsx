import React, { useState } from "react";
import Spending from "@/Components/Spending";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import Pagination from "@/Components/Pagination";
import Modal from "@/Components/Modal";
import { useForm, Head } from "@inertiajs/react";
import Search from "@/Components/Search";

export default function Index({ auth, spendings }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        spending_name: "",
        spending_date: "",
        spending_location: "",
        spending_amount: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("spendings.store"), { onSuccess: () => reset() });
        setIsModalOpen(false);
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Spendings" />
            <div className="flex mx-auto justify-between items-center md:w-3/4 my-3">
                <PrimaryButton onClick={handleModalToggle}>
                    Add Spending
                </PrimaryButton>
                <Modal
                    title="Add Spending"
                    show={isModalOpen}
                    onClose={handleModalToggle}
                >
                    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="spending_name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="spending_name"
                                        value={data.spending_name}
                                        placeholder="Name"
                                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-1"
                                        onChange={(e) =>
                                            setData(
                                                "spending_name",
                                                e.target.value
                                            )
                                        }
                                    ></input>
                                </div>
                                <div>
                                    <label
                                        htmlFor="spending_date"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        id="spending_date"
                                        value={data.spending_date}
                                        placeholder="When"
                                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-1"
                                        onChange={(e) =>
                                            setData(
                                                "spending_date",
                                                e.target.value
                                            )
                                        }
                                    ></input>
                                </div>
                                <div>
                                    <label
                                        htmlFor="spending_location"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                                    >
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="spending_location"
                                        value={data.spending_location}
                                        placeholder="Where"
                                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-1"
                                        onChange={(e) =>
                                            setData(
                                                "spending_location",
                                                e.target.value
                                            )
                                        }
                                    ></input>
                                </div>
                                <div>
                                    <label
                                        htmlFor="spending_amount"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                                    >
                                        Amount
                                    </label>
                                    <input
                                        type="number"
                                        step="any"
                                        id="spending_amount"
                                        value={data.spending_amount}
                                        placeholder="Amount"
                                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm my-1"
                                        onChange={(e) =>
                                            setData(
                                                "spending_amount",
                                                e.target.value
                                            )
                                        }
                                    ></input>
                                </div>
                            </div>
                            <InputError
                                message={errors.message}
                                className="mt-2"
                            />
                            <PrimaryButton
                                className="mt-4"
                                disabled={processing}
                            >
                                add spending
                            </PrimaryButton>
                        </form>
                    </div>
                </Modal>
                <Search />
            </div>

            <div className="mx-auto bg-white shadow-sm rounded-lg divide-y md:w-3/4 items-center">
                {spendings.data.map((spending) => (
                    <Spending key={spending.id} spending={spending} />
                ))}
            </div>
            <Pagination class="mt-6" links={spendings.links} />
        </AuthenticatedLayout>
    );
}
