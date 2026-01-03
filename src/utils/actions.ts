const recommendedVideos = [
  {
    "id": "v1",
    "title": "Elden Ring: Shadow of the Erdtree - No Hit Run",
    "streamer": "LimgraveLegend",
    "game": "Elden Ring",
    "viewers": 15400,
    "url": "https://stream.platform/v1"
  },
  {
    "id": "v2",
    "title": "VALORANT Ranked Solo Queue",
    "streamer": "AcePilot",
    "game": "VALORANT",
    "viewers": 3200,
    "url": "https://stream.platform/v2"
  },
  {
    "id": "v3",
    "title": "Minecraft Hardcore World - Day 1000",
    "streamer": "BlockBuilder",
    "game": "Minecraft",
    "viewers": 890,
    "url": "https://stream.platform/v3"
  },
  {
    "id": "v4",
    "title": "League of Legends Finals Watchparty",
    "streamer": "MidLaneQueen",
    "game": "League of Legends",
    "viewers": 45100,
    "url": "https://stream.platform/v4"
  }
]

export function getVideos() {
  return recommendedVideos
}

export function getVideoById(id: string) {
  return recommendedVideos.find(video => video.id === id)
}