import {DefaultLayout} from "../../components/layouts/DefaultLayout.tsx";

export function ColorTests() {
    return (
        <DefaultLayout>
            <div className="flex">
                <div className={"h-12 w-12 bg-accent-light"}></div>
                <div className={"h-12 w-12 bg-accent"}></div>
                <div className={"h-12 w-12 bg-accent-dark"}></div>
            </div>
            <div className="flex">
                <div className={"h-12 w-12 bg-font-light"}></div>
                <div className={"h-12 w-12 bg-font"}></div>
                <div className={"h-12 w-12 bg-font-dark"}></div>
            </div>
        </DefaultLayout>
    )
}