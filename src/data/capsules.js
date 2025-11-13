// Capsule data with three stories. Placeholder assets in public/assets

export const capsules = [
  {
    id: 'day-we-met',
    title: 'The Day We Met',
    description: 'A branching memory across a cafe, an auto, and a theatre.',
    story: {
      title: 'The Day We Met',
      start: { id: 'start' },
      start: {
        id: 'start',
        text: 'It began on a quiet afternoon. Where should we start?',
        media: { type: 'model', src: '/assets/cafe.glb', autoplay: true },
        choices: [
          { label: 'Step into the cafe', nextId: 'cafe' },
          { label: 'Call for an auto', nextId: 'auto' },
          { label: 'Head straight to the theatre', nextId: 'theatre' },
        ],
      },
      cafe: {
        id: 'cafe',
        text: 'The coffee was warm, the chatter soft. We laughed at nothing and everything.',
        media: { type: 'model', src: '/assets/cafe.glb' },
        choices: [
          { label: 'Ride an auto to the theatre', nextId: 'theatre' },
          { label: 'Revisit the start', nextId: 'start' },
        ],
      },
      auto: {
        id: 'auto',
        text: 'The city blurred by as the auto weaved through streets. A promise hung in the air.',
        media: { type: 'model', src: '/assets/auto.glb' },
        choices: [
          { label: 'Stop at the cafe', nextId: 'cafe' },
          { label: 'Continue to the theatre', nextId: 'theatre' },
        ],
      },
      theatre: {
        id: 'theatre',
        text: 'Lights dimmed, hands found each other. The show, the laughter, the hush — it all began here.',
        media: { type: 'model', src: '/assets/theatre.glb' },
        choices: [
          { label: 'Back to the start', nextId: 'start' },
          { label: 'Take an auto for a late-night ride', nextId: 'auto' },
        ],
      },
    },
  },
  {
    id: 'letter-for-tomorrow',
    title: 'A Letter for Tomorrow',
    description: 'A simple, heartfelt, text-only path.',
    story: {
      title: 'A Letter for Tomorrow',
      start: { id: 'start' },
      start: {
        id: 'start',
        text: 'Dear Tomorrow,\nI hope you find us gentler than today. Where should we send these words?',
        choices: [
          { label: 'Send to an old friend', nextId: 'friend' },
          { label: 'Keep it for ourselves', nextId: 'self' },
        ],
      },
      friend: {
        id: 'friend',
        text: 'We write with tenderness. Maybe it will be read when the sun is kind.',
        choices: [
          { label: 'Add a hopeful postscript', nextId: 'ps' },
          { label: 'Seal the envelope', nextId: 'end' },
        ],
      },
      self: {
        id: 'self',
        text: 'We fold the page into a journal. Some promises are between us and the future.',
        choices: [
          { label: 'Re-read from the top', nextId: 'start' },
          { label: 'Add a hopeful postscript', nextId: 'ps' },
        ],
      },
      ps: {
        id: 'ps',
        text: 'P.S. If you find this, carry it gently into your day.',
        choices: [
          { label: 'Seal the envelope', nextId: 'end' },
          { label: 'Back to start', nextId: 'start' },
        ],
      },
      end: {
        id: 'end',
        text: 'Tomorrow will come either way. For now, we rest.',
        choices: [],
      },
    },
  },
  {
    id: 'surprise-montage',
    title: 'Surprise Montage',
    description: 'A short video moment — autoplay ready.',
    story: {
      title: 'Surprise Montage',
      start: { id: 'start' },
      start: {
        id: 'start',
        text: 'A fast-forward through memories — lean back and watch.',
        media: { type: 'video', src: '/assets/montage.mp4', autoplay: true },
        choices: [
          { label: 'Watch again', nextId: 'start' },
        ],
      },
    },
  },
]
