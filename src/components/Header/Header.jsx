import Profile from '../../assets/images/profile.png'
export default function Header (){
    return (
        <div className='flex justify-between items-center my-8 border-b-2 py-4'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img className='w-15' src={Profile} alt={`cover photo of ${Profile}`} />
        </div>
    )
}