import { useRouter } from "next/router";

export default function Form() {
    const router = useRouter();
    const {param, user, id} = router.query;
    console.log(param)
    return (
        <>
            <h1>Hash: {param} - User: {user} - id: {id}</h1>
        </>
    );
}