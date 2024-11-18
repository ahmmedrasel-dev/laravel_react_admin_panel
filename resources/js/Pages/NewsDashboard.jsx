import NewsAuthenticatedLayout from "@/Layouts/NewsAuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const NewsDashboard = () => {
    return (
        <NewsAuthenticatedLayout>
            <Head title="News Dashboard" />
        </NewsAuthenticatedLayout>
    );
};

export default NewsDashboard;
