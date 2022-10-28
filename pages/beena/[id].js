export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(e => {
        return {
            params: { id: e.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
const id = context.params.id;
const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
const data = await res.json();

return {
    props: {e: data}
}
 }
    const Details = ({ e }) => {
    return (  
        <div>
            <h1>{ e.name }</h1>
            <p>{ e.email }</p>
            <p>{ e.website }</p>
            <p>{ e.address.city }</p>
        </div>
    );
}
 
export default Details;