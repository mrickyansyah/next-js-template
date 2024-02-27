import PaymentBreadcrumbs from "./components/PaymentBreadcrumbs";
import Table from "./components/Table";

export default function Page() {
    return (
        <div className="my-14 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
            <PaymentBreadcrumbs />

            <h3 className="text-xl font-semibold">Payments</h3>
            <div className="max-w-[95rem] mx-auto w-full">
                <Table />
            </div>
        </div>
    );
}
