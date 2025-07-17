import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Declarations
  searchTerm: string = '';
  searchName: string = '';
  searchArtist: string = '';
  searchCategory: string = '';
  searchType: string = '';
  filteredArtworks: any[] = [];
  searchedArtworks: any[] = [];
  selectedArtwork: any = null;


  //Artwork information 
  artworks = [
    {
      id: 1,
      name: 'Starry Night',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/960px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
      description: 'A masterpiece depicting a swirling night sky, with expressive, vibrant brushstrokes. Created by Vincent van Gogh during his stay at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, this iconic work captures his emotional turbulence and connection to nature. The painting showcases a village beneath a dramatic sky dominated by a glowing crescent moon and spiraling stars, symbolizing both chaos and beauty.',
      shortDescription: 'A masterpiece depicting a swirling night sky.',
      artist: {
        name: 'Vincent van Gogh',
        profileImage: 'https://cdn.britannica.com/36/69636-050-81A93193/Self-Portrait-artist-panel-board-Vincent-van-Gogh-1887.jpg'
      },
      publicationDate: '1889-06-01',
      category: 'Painting',
      type: 'Post-Impressionism'
    },
    {
      id: 2,
      name: 'Mona Lisa',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
      description: 'A portrait of a woman with an enigmatic smile, the Mona Lisa is widely regarded as the most famous painting in the world. Painted by Leonardo da Vinci during the Italian Renaissance, it is known for its mastery of light, shadow, and perspective. The subject’s mysterious expression continues to intrigue art enthusiasts and historians alike, with theories ranging from hidden emotions to secret messages.',
      shortDescription: 'A portrait of a woman with an enigmatic smile.',
      artist: {
        name: 'Leonardo da Vinci',
        profileImage: 'https://www.leonardodavinci.net/assets/img/leonardo-da-vinci.jpg'
      },
      publicationDate: '1503-01-01',
      category: 'Painting',
      type: 'Renaissance'
    },
    {
      id: 3,
      name: 'The Persistence of Memory',
      imgPath: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
      description: 'A surreal masterpiece by Salvador Dalí, this painting is famous for its melting clocks, which symbolize the fluidity and impermanence of time. Set against a dreamlike landscape, the work reflects Dalí’s fascination with Freudian psychoanalysis and explores themes of memory, decay, and subconscious realities. The Persistence of Memory is one of the most iconic pieces of the Surrealist movement.',
      shortDescription: 'A surreal painting featuring melting clocks.',
      artist: {
        name: 'Salvador Dalí',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/440px-Salvador_Dal%C3%AD_1939.jpg'
      },
      publicationDate: '1931-01-01',
      category: 'Painting',
      type: 'Surrealism'
    },
    {
      id: 4,
      name: 'The Scream',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/500px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
      description: 'An expression of existential angst, The Scream is Edvard Munch’s most famous work. This haunting painting, with its vivid colors and distorted forms, captures the universal human experience of anxiety and despair. Munch drew inspiration from his own turbulent emotions and the tumultuous environment of the late 19th century. The figure in the painting appears to release a silent scream, resonating with viewers worldwide.',
      shortDescription: 'An expression of existential angst.',
      artist: {
        name: 'Edvard Munch',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Portrait_of_Edvard_Munch_%28cropped%29.png/440px-Portrait_of_Edvard_Munch_%28cropped%29.png'
      },
      publicationDate: '1893-01-01',
      category: 'Painting',
      type: 'Expressionism'
    },
    {
      id: 5,
      name: 'Guernica',
      imgPath: 'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
      description: 'A powerful anti-war statement, Guernica is a monumental work by Pablo Picasso. Created in response to the bombing of the town of Guernica during the Spanish Civil War, this monochromatic painting uses fragmented forms and stark imagery to convey the horrors of war. The piece is filled with symbolism, including a weeping woman, a dying horse, and a lightbulb representing both destruction and revelation.',
      shortDescription: 'A powerful anti-war statement.',
      artist: {
        name: 'Pablo Picasso',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/440px-Pablo_picasso_1.jpg'
      },
      publicationDate: '1937-01-01',
      category: 'Painting',
      type: 'Cubism'
    },
    {
      id: 6,
      name: 'The Thinker',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mus%C3%A9e_Rodin_1.jpg/500px-Mus%C3%A9e_Rodin_1.jpg',
      description: 'A sculpture of a man lost in deep thought, The Thinker by Auguste Rodin is an iconic symbol of intellectual contemplation. Originally conceived as part of a larger work, *The Gates of Hell*, this bronze statue captures the strength and vulnerability of human reflection. The muscular figure’s pose conveys both physical tension and mental focus, making it a timeless emblem of philosophy.',
      shortDescription: 'A sculpture of a man lost in deep thought.',
      artist: {
        name: 'Auguste Rodin',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Auguste_Rodin_by_George_Charles_Beresford_%28NPG_x6573%29.jpg/500px-Auguste_Rodin_by_George_Charles_Beresford_%28NPG_x6573%29.jpg'
      },
      publicationDate: '1902-01-01',
      category: 'Sculpture',
      type: 'Realism'
    },
    {
      id: 7,
      name: 'Girl with a Pearl Earring',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/960px-1665_Girl_with_a_Pearl_Earring.jpg',
      description: 'Often referred to as the "Mona Lisa of the North," Girl with a Pearl Earring is a stunning portrait by Johannes Vermeer. The painting features a young girl with a striking gaze and a delicate pearl earring. Vermeer’s masterful use of light and shadow gives the piece an almost photographic quality, while the simplicity of the subject evokes a timeless beauty.',
      shortDescription: 'A beautiful portrait of a girl wearing a pearl earring.',
      artist: {
        name: 'Johannes Vermeer',
        profileImage: 'https://blog.creativeflair.org/wp-content/uploads/2023/03/download-5-1.webp'
      },
      publicationDate: '1665-01-01',
      category: 'Painting',
      type: 'Baroque'
    },
    {
      id: 8,
      name: 'The Birth of Venus',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/960px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
      description: 'A celebration of beauty and mythology, The Birth of Venus by Sandro Botticelli depicts the goddess Venus emerging from the sea on a shell. The painting is rich in allegorical meaning, symbolizing divine love and earthly beauty. Botticelli’s use of graceful lines and ethereal colors creates a dreamlike quality, making it one of the most iconic works of the Italian Renaissance.',
      shortDescription: 'A depiction of Venus emerging from the sea.',
      artist: {
        name: 'Sandro Botticelli',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/440px-Sandro_Botticelli_083.jpg'
      },
      publicationDate: '1486-01-01',
      category: 'Painting',
      type: 'Renaissance'
    },
    {
      id: 9,
      name: 'American Gothic',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/960px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg',
      description: 'American Gothic by Grant Wood is an iconic representation of Midwestern life during the Great Depression. The painting features a stern farmer holding a pitchfork alongside a woman who is often interpreted as his daughter or wife. The work’s meticulously detailed style and stoic expressions reflect a sense of resilience and tradition, making it a cornerstone of American Regionalism.',
      shortDescription: 'A famous depiction of a farmer and his daughter.',
      artist: {
        name: 'Grant Wood',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Grant_Wood.jpg/440px-Grant_Wood.jpg'
      },
      publicationDate: '1930-01-01',
      category: 'Painting',
      type: 'Regionalism'
    },
    {
      id: 10,
      name: 'The Last Supper',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1000px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg',
      description: 'The Last Supper by Leonardo da Vinci captures a pivotal moment in Christian history: Jesus announcing that one of his disciples will betray him. The fresco’s dramatic composition, masterful use of perspective, and emotional intensity make it one of the most studied and revered works of art in the world. Each disciple’s reaction is uniquely detailed, reflecting a range of human emotions.',
      shortDescription: 'A depiction of Jesus and his disciples during the Last Supper.',
      artist: {
        name: 'Leonardo da Vinci',
        profileImage: 'https://www.leonardodavinci.net/assets/img/leonardo-da-vinci.jpg'
      },
      publicationDate: '1498-01-01',
      category: 'Painting',
      type: 'Renaissance'
    },
    {
      id: 11,
      name: 'The Kiss',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/960px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
      description: 'The Kiss by Gustav Klimt is a radiant celebration of love and intimacy. Featuring a couple wrapped in a golden, ornamental embrace, the painting blends elements of Symbolism and Art Nouveau. Klimt’s use of intricate patterns, vibrant colors, and gold leaf creates a mesmerizing effect, making it one of the most beloved romantic artworks of all time.',
      shortDescription: 'A romantic portrayal of a couple embracing.',
      artist: {
        name: 'Gustav Klimt',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Klimt.jpg/500px-Klimt.jpg'
      },
      publicationDate: '1908-01-01',
      category: 'Painting',
      type: 'Symbolism'
    },
    {
      id: 12,
      name: 'The Night Watch',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/960px-The_Night_Watch_-_HD.jpg',
      description: 'The Night Watch by Rembrandt is a dramatic and complex group portrait of a Dutch militia company. The painting stands out for its innovative use of light and shadow, as well as its dynamic composition. Each figure is portrayed with individuality, capturing a moment of action and camaraderie. The work is considered a masterpiece of the Baroque era.',
      shortDescription: 'A group portrait of a city militia.',
      artist: {
        name: 'Rembrandt',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg'
      },
      publicationDate: '1642-01-01',
      category: 'Painting',
      type: 'Baroque'
    },

    {
      id: 13,
      name: 'Campbell\'s Soup Cans',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg/960px-Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg',
      description: 'Campbell’s Soup Cans by Andy Warhol is a defining work of the Pop Art movement. Consisting of 32 canvases depicting different flavors of soup, the piece challenges traditional notions of art by elevating everyday consumer goods to the status of fine art. Warhol’s use of repetition and bold colors reflects the commercialization and mass production of the 20th century.',
      shortDescription: 'An iconic pop art piece of 32 soup can paintings.',
      artist: {
        name: 'Andy Warhol',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg/500px-Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg'
      },
      publicationDate: '1962-01-01',
      category: 'Painting',
      type: 'Pop Art'
    },
    {
      id: 14,
      name: 'The School of Athens',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/960px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
      description: 'The School of Athens by Raphael is a fresco that celebrates the intellectual achievements of classical antiquity. It features prominent philosophers such as Plato, Aristotle, and Socrates, along with Raphael’s contemporaries. The grand architectural setting and intricate details highlight the harmony between art and science, making it a masterpiece of the High Renaissance.',
      shortDescription: 'A fresco showing great thinkers of classical antiquity.',
      artist: {
        name: 'Raphael',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/500px-Raffaello_Sanzio.jpg'
      },
      publicationDate: '1511-01-01',
      category: 'Painting',
      type: 'Renaissance'
    },
    {
      id: 15,
      name: 'Nighthawks',
      imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/960px-Nighthawks_by_Edward_Hopper_1942.jpg',
      description: 'Nighthawks by Edward Hopper captures the quiet loneliness of urban life. The painting depicts a late-night diner with a few isolated patrons, illuminated by harsh artificial light. Hopper’s use of muted colors and stark composition creates a mood of introspection, making it one of the most enduring images of American Realism.',
      shortDescription: 'A lonely late-night diner scene.',
      artist: {
        name: 'Edward Hopper',
        profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg/500px-Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg'
      },
      publicationDate: '1942-01-01',
      category: 'Painting',
      type: 'Realism'
    }
  ];

  
  constructor() {

    this.filteredArtworks = [...this.artworks];

  }


searchArtworks() {
  const query = this.searchQuery.trim().toLowerCase();

  this.filteredArtworks = this.artworks.filter(artwork => 
    artwork.name.toLowerCase().includes(query) ||
    artwork.artist.name.toLowerCase().includes(query)
  );

  console.log('🔎 Searching for:', query);
}



    filterArtworks() {
        const query = this.searchQuery.trim().toLowerCase();
  const name = this.searchName.trim().toLowerCase();
  const artist = this.searchArtist.trim().toLowerCase();
  const category = this.searchCategory.trim().toLowerCase();
  const type = this.searchType.trim().toLowerCase();
    this.filteredArtworks = this.artworks.filter((artwork) =>
      (this.searchName ? artwork.name.toLowerCase().includes(this.searchName.toLowerCase()) : true) &&
      (this.searchArtist ? artwork.artist.name.toLowerCase().includes(this.searchArtist.toLowerCase()) : true) &&
      (this.searchCategory ? artwork.category.toLowerCase().includes(this.searchCategory.toLowerCase()) : true) &&
      (this.searchType ? artwork.type.toLowerCase().includes(this.searchType.toLowerCase()) : true)
    );
  console.log('🔎 Searching for:', { query, name, artist, type, category });
    this.searchQuery = '';
  this.searchName = '';
  this.searchArtist = '';
  this.searchCategory='';
      this.searchType='';
  }
  

  openModal(item: any) {
    this.selectedArtwork = item; 
  }

  closeModal() {
    const modal = document.getElementById('artworkModal');
    if (modal) {
      modal.classList.remove('show'); 
      document.body.classList.remove('modal-open');
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) {
        backdrop.remove();
      }
    }
  }
  

  filterVisible = false;

toggleFilter() {
  this.filterVisible = !this.filterVisible;
}

searchQuery: string = '';

  
}