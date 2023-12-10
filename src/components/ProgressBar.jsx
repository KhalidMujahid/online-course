function ProgressBar({ progress }){
	return (
		<div className="progress my-5" style={{ height:"20px" }}>
		   <div className="progress-bar bg-dark progress-bar-striped" style={{ width:`${progress}%` }}>{progress}%</div>
		</div>
	);
}

export default ProgressBar;