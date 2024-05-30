interface Props {
    children: React.ReactNode;

}

export default function ContainerPage({children}: Props){
    return(
        <div className=" w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6">
            {children}
        </div>
    );
}