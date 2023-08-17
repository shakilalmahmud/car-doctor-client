

const Facility = ({facility}) => {

    const { name, details } = facility

    return (
        <div className="bg-[#F3F3F3] border-t-2 border-t-[#FF3811] space-y-4 text-center rounded-xl w-96  py-10 px-4">
            <h1 className="font-bold">{name}</h1>
            <p className="text-justify">{details}</p>

        </div>
    );
};

export default Facility;