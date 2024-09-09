import React from 'react'

const CampaignTable = () => {
  return (
    <div>
        <div className='bg-black flex justify-between items-center p-2 border border-white ml-2 mr-2 rounded-md'>
        <button className='hover:backdrop-blur-sm bg-white/10 text-white py-1 px-4 rounded-full'>
          Filter
        </button>
        <button className='hover:backdrop-blur-sm bg-white/10 text-white py-2 px-4 rounded-full'>
          Create campaign with AI
        </button>
      </div>
    </div>
  )
}

export default CampaignTable
