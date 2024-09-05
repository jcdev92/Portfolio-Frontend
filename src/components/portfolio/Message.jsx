export const Message = () => {
  return (
    <div className='flex items-center justify-center bg-black h-screen'>
        <h1 className="text-red-700 text-center px-4 text-xl font-exo text-shadow-lg text-shadow-red-500">
            <span className="text-green-600 text-4xl my-4">Thanks for your visit!</span>
            <br />
            <span>but the portfolio <span className="text-blue-500"> is currently being updated.</span> </span>
            <br />
            <span>Im developing a new portfolio version based on <span className="text-white text-4xl"> next js.</span></span>
            <br />
            <span>Stay tuned!</span>
            <br />
            <span>For now, you can visit my old portfolio: <br />
                <a className="text-blue-300 hover:text-blue-700" href="https://jcdev-portfolio-bootstrap.vercel.app/">Click it!</a>
            </span>
            <br />
        </h1>
    </div>
  )
}
