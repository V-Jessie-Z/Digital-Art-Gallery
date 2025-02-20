import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  artworks = [
    {
      id: 1,
      name: 'Starry Night',
      imgPath: 'https://uploads3.wikiart.org/00475/images/vincent-van-gogh/the-starry-night-1889.jpg!Large.jpg',
      description: 'A masterpiece depicting a swirling night sky, with expressive, vibrant brushstrokes. Created by Vincent van Gogh during his stay at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, this iconic work captures his emotional turbulence and connection to nature. The painting showcases a village beneath a dramatic sky dominated by a glowing crescent moon and spiraling stars, symbolizing both chaos and beauty.',
      shortDescription: 'A masterpiece depicting a swirling night sky.',
      artist: 'Vincent van Gogh',
      publicationDate: '1889-06-01',
      category: 'Painting',
      type: 'Post-Impressionism'
    },
    {
      id: 2,
      name: 'Mona Lisa',
      imgPath: 'https://uploads5.wikiart.org/00475/images/leonardo-da-vinci/0000136308-og.JPG!Large.JPG',
      description: 'A portrait of a woman with an enigmatic smile, the Mona Lisa is widely regarded as the most famous painting in the world. Painted by Leonardo da Vinci during the Italian Renaissance, it is known for its mastery of light, shadow, and perspective. The subject’s mysterious expression continues to intrigue art enthusiasts and historians alike, with theories ranging from hidden emotions to secret messages.',
      shortDescription: 'A portrait of a woman with an enigmatic smile.',
      artist: 'Leonardo da Vinci',
      publicationDate: '1503-01-01',
      category: 'Painting',
      type: 'Renaissance'
    },
    {
      id: 3,
      name: 'The Persistence of Memory',
      imgPath: 'https://uploads1.wikiart.org/00475/images/salvador-dali/w1siziisijm4njq3mcjdlfsiccisimnvbnzlcnqilcitcxvhbgl0esa5mcatcmvzaxplidiwmdb4mjawmfx1mdazzsjdxq.jpg!Large.jpg',
      description: 'A surreal masterpiece by Salvador Dalí, this painting is famous for its melting clocks, which symbolize the fluidity and impermanence of time. Set against a dreamlike landscape, the work reflects Dalí’s fascination with Freudian psychoanalysis and explores themes of memory, decay, and subconscious realities. The Persistence of Memory is one of the most iconic pieces of the Surrealist movement.',
      shortDescription: 'A surreal painting featuring melting clocks.',
      artist: 'Salvador Dalí',
      publicationDate: '1931-01-01',
      category: 'Painting',
      type: 'Surrealism'
    },
    {
      id: 4,
      name: 'The Scream',
      imgPath: 'https://uploads2.wikiart.org/images/edvard-munch/the-scream-1893(2).jpg!Large.jpg',
      description: 'An expression of existential angst, The Scream is Edvard Munch’s most famous work. This haunting painting, with its vivid colors and distorted forms, captures the universal human experience of anxiety and despair. Munch drew inspiration from his own turbulent emotions and the tumultuous environment of the late 19th century. The figure in the painting appears to release a silent scream, resonating with viewers worldwide.',
      shortDescription: 'An expression of existential angst.',
      artist: 'Edvard Munch',
      publicationDate: '1893-01-01',
      category: 'Painting',
      type: 'Expressionism'
    },
    {
      id: 5,
      name: 'Guernica',
      imgPath: 'https://uploads0.wikiart.org/00139/images/pablo-picasso/guernica-by-pablo-picasso.jpg!Large.jpg',
      description: 'A powerful anti-war statement, Guernica is a monumental work by Pablo Picasso. Created in response to the bombing of the town of Guernica during the Spanish Civil War, this monochromatic painting uses fragmented forms and stark imagery to convey the horrors of war. The piece is filled with symbolism, including a weeping woman, a dying horse, and a lightbulb representing both destruction and revelation.',
      shortDescription: 'A powerful anti-war statement.',
      artist: 'Pablo Picasso',
      publicationDate: '1937-01-01',
      category: 'Painting',
      type: 'Cubism'
    },
    {
      id: 6,
      name: 'The Thinker',
      imgPath: 'https://uploads5.wikiart.org/images/auguste-rodin/the-thinker.jpg!Large.jpg',
      description: 'A sculpture of a man lost in deep thought, The Thinker by Auguste Rodin is an iconic symbol of intellectual contemplation. Originally conceived as part of a larger work, *The Gates of Hell*, this bronze statue captures the strength and vulnerability of human reflection. The muscular figure’s pose conveys both physical tension and mental focus, making it a timeless emblem of philosophy.',
      shortDescription: 'A sculpture of a man lost in deep thought.',
      artist: 'Auguste Rodin',
      publicationDate: '1902-01-01',
      category: 'Sculpture',
      type: 'Realism'
    },
    {
      id: 7,
      name: 'Girl with a Pearl Earring',
      imgPath: 'https://uploads0.wikiart.org/00380/images/johannes-vermeer/1-girl-with-a-pearl-earring-johannes-vermeer.jpg!Large.jpg',
      description: 'Often referred to as the "Mona Lisa of the North," Girl with a Pearl Earring is a stunning portrait by Johannes Vermeer. The painting features a young girl with a striking gaze and a delicate pearl earring. Vermeer’s masterful use of light and shadow gives the piece an almost photographic quality, while the simplicity of the subject evokes a timeless beauty.',
      shortDescription: 'A beautiful portrait of a girl wearing a pearl earring.',
      artist: 'Johannes Vermeer',
      publicationDate: '1665-01-01',
      category: 'Painting',
      type: 'Baroque'
    },
    {
      id: 8,
      name: 'The Birth of Venus',
      imgPath: 'https://uploads6.wikiart.org/images/sandro-botticelli/the-birth-of-venus-1485(1).jpg!Large.jpg',
      description: 'A celebration of beauty and mythology, The Birth of Venus by Sandro Botticelli depicts the goddess Venus emerging from the sea on a shell. The painting is rich in allegorical meaning, symbolizing divine love and earthly beauty. Botticelli’s use of graceful lines and ethereal colors creates a dreamlike quality, making it one of the most iconic works of the Italian Renaissance.',
      shortDescription: 'A depiction of Venus emerging from the sea.',
      artist: 'Sandro Botticelli',
      publicationDate: '1486-01-01',
      category: 'Painting',
      type: 'Renaissance'
    },
    {
      id: 9,
      name: 'American Gothic',
      imgPath: 'https://uploads4.wikiart.org/00129/images/grant-wood/american-gothic.jpg!Large.jpg',
      description: 'American Gothic by Grant Wood is an iconic representation of Midwestern life during the Great Depression. The painting features a stern farmer holding a pitchfork alongside a woman who is often interpreted as his daughter or wife. The work’s meticulously detailed style and stoic expressions reflect a sense of resilience and tradition, making it a cornerstone of American Regionalism.',
      shortDescription: 'A famous depiction of a farmer and his daughter.',
      artist: 'Grant Wood',
      publicationDate: '1930-01-01',
      category: 'Painting',
      type: 'Regionalism'
    },
    {
      id: 10,
      name: 'The Last Supper',
      imgPath: 'https://uploads4.wikiart.org/00178/images/leonardo-da-vinci/ltima-cena-da-vinci-5.jpg!Large.jpg',
      description: 'The Last Supper by Leonardo da Vinci captures a pivotal moment in Christian history: Jesus announcing that one of his disciples will betray him. The fresco’s dramatic composition, masterful use of perspective, and emotional intensity make it one of the most studied and revered works of art in the world. Each disciple’s reaction is uniquely detailed, reflecting a range of human emotions.',
      shortDescription: 'A depiction of Jesus and his disciples during the Last Supper.',
      artist: 'Leonardo da Vinci',
      publicationDate: '1498-01-01',
      category: 'Painting',
      type: 'Renaissance'
    },
    {
      id: 11,
      name: 'The Kiss',
      imgPath: 'https://uploads7.wikiart.org/00142/images/57726d7eedc2cb3880b47e13/the-kiss-gustav-klimt-google-cultural-institute.jpg!Large.jpg',
      description: 'The Kiss by Gustav Klimt is a radiant celebration of love and intimacy. Featuring a couple wrapped in a golden, ornamental embrace, the painting blends elements of Symbolism and Art Nouveau. Klimt’s use of intricate patterns, vibrant colors, and gold leaf creates a mesmerizing effect, making it one of the most beloved romantic artworks of all time.',
      shortDescription: 'A romantic portrayal of a couple embracing.',
      artist: 'Gustav Klimt',
      publicationDate: '1908-01-01',
      category: 'Painting',
      type: 'Symbolism'
    },
    {
      id: 12,
      name: 'The Night Watch',
      imgPath: 'https://uploads7.wikiart.org/00121/images/rembrandt/2.jpg!Large.jpg',
      description: 'The Night Watch by Rembrandt is a dramatic and complex group portrait of a Dutch militia company. The painting stands out for its innovative use of light and shadow, as well as its dynamic composition. Each figure is portrayed with individuality, capturing a moment of action and camaraderie. The work is considered a masterpiece of the Baroque era.',
      shortDescription: 'A group portrait of a city militia.',
      artist: 'Rembrandt',
      publicationDate: '1642-01-01',
      category: 'Painting',
      type: 'Baroque'
    },

    {
      id: 13,
      name: 'Campbell\'s Soup Cans',
      imgPath: 'https://uploads1.wikiart.org/00160/images/andy-warhol/cri-000000318242.jpg!Large.jpg',
      description: 'Campbell’s Soup Cans by Andy Warhol is a defining work of the Pop Art movement. Consisting of 32 canvases depicting different flavors of soup, the piece challenges traditional notions of art by elevating everyday consumer goods to the status of fine art. Warhol’s use of repetition and bold colors reflects the commercialization and mass production of the 20th century.',
      shortDescription: 'An iconic pop art piece of 32 soup can paintings.',
      artist: 'Andy Warhol',
      publicationDate: '1962-01-01',
      category: 'Painting',
      type: 'Pop Art'
    },
    {
      id: 14,
      name: 'The School of Athens',
      imgPath: 'https://uploads6.wikiart.org/00475/images/raphael/1-xvkpn0qm3eiqpzivkggfea.jpg!Large.jpg',
      description: 'The School of Athens by Raphael is a fresco that celebrates the intellectual achievements of classical antiquity. It features prominent philosophers such as Plato, Aristotle, and Socrates, along with Raphael’s contemporaries. The grand architectural setting and intricate details highlight the harmony between art and science, making it a masterpiece of the High Renaissance.',
      shortDescription: 'A fresco showing great thinkers of classical antiquity.',
      artist: 'Raphael',
      publicationDate: '1511-01-01',
      category: 'Painting',
      type: 'Renaissance'
    },
    {
      id: 15,
      name: 'Nighthawks',
      imgPath: 'https://uploads2.wikiart.org/00129/images/edward-hopper/nighthawks.jpg!Large.jpg',
      description: 'Nighthawks by Edward Hopper captures the quiet loneliness of urban life. The painting depicts a late-night diner with a few isolated patrons, illuminated by harsh artificial light. Hopper’s use of muted colors and stark composition creates a mood of introspection, making it one of the most enduring images of American Realism.',
      shortDescription: 'A lonely late-night diner scene.',
      artist: 'Edward Hopper',
      publicationDate: '1942-01-01',
      category: 'Painting',
      type: 'Realism'
    },
    {
      id: 16,
      name: 'Las Meninas',
      imgPath: 'https://uploads7.wikiart.org/00142/images/diego-velazquez/las-meninas.jpg!Large.jpg',
      description: 'Las Meninas by Diego Velázquez is a complex and enigmatic painting of the Spanish royal family. The composition includes Princess Margarita, her attendants, and Velázquez himself painting the scene. The work is celebrated for its innovative use of perspective and light, as well as its layered meanings, which continue to intrigue viewers and art historians.',
      shortDescription: 'A complex painting of the Spanish royal family.',
      artist: 'Diego Velázquez',
      publicationDate: '1656-01-01',
      category: 'Painting',
      type: 'Baroque'
    }
  ];


  selectedArtwork: any = null;

  openModal(item: any) {
    this.selectedArtwork = item; 
  }

  constructor() {


  }

}