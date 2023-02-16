const Shimmer = () => {

    return (
        <>
        <div className="restraurant-section shimmer-ui-section">
        {
            Array(10).fill("").map((e,index) => (
                <>
                <div className="card" key={index}>
                    <div className="image">
                    </div>
                    <div className="desc">
                    </div>

                    </div>
                </>
            ))
        }
         

        </div>
         
        </>
    )
}


export default Shimmer;