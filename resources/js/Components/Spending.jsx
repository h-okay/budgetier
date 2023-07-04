import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Spending({ spending }) {
    const [isNumericDate, setIsNumericDate] = useState(false);
    const [diplayDate, setDisplayDate] = useState(
        dayjs(spending.created_at).fromNow()
    );
    const handleDateConversion = () => {
        isNumericDate
            ? setDisplayDate(dayjs(spending.created_at).fromNow())
            : setDisplayDate(dayjs(spending.created_at).format("MMM DD, YYYY"));
        setIsNumericDate(!isNumericDate);
    };

    const createInfoString = () => {
        return (
            spending.spending_name +
            " at " +
            spending.spending_location +
            " on " +
            dayjs(spending.created_at).format("MMM DD, YYYY")
        );
    };

    return (
        <div className="p-6 flex space-x-2">
            <div className="flex-1">
                <div className="flex flex-row items-center">
                    <i className="fa-solid fa-bomb fa-xl mr-5"></i>
                    <div className="flex flex-col">
                        <div>
                            <span className="text-gray-800 text-xl">
                                ${spending.spending_amount}
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            {createInfoString()}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col items-end">
                    <p className="text-gray-800">{spending.user.name}</p>
                    <span
                        className="text-gray-400 text-sm"
                        onClick={handleDateConversion}
                    >
                        {diplayDate}
                    </span>
                </div>
            </div>
        </div>
    );
}
