function CallCard() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-image">
                    <img 
                        src="https://student-photographs.s3.us-east-2.amazonaws.com/20230205.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVL5BYAQGNBT62GM4%2F20250325%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T205326Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=83b2e38eb8813aee880a547be9b50884d3e6ac955d9d1b7092dff51ab474b36c" 
                        alt="Héctor Alejandro Murcia Rivera" 
                        className="card-img"
                    />
                    <span className="card-title">Héctor Alejandro Murcia Rivera</span>
                </div>
                <div className="card-content">
                    <p>
                        Estudiante del ITR, vivo en mi casita, tengo 18 años de edad, mi código es 20230205, cumplo el 24 de noviembre.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CallCard;