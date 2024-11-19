import NewsAuthenticatedLayout from "@/Layouts/NewsAuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const AddNews = () => {
    return (
        <NewsAuthenticatedLayout>
            <Head title="News Create" />
        </NewsAuthenticatedLayout>
    );
};

export default AddNews;
