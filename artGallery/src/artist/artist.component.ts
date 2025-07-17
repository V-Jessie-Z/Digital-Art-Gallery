import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  standalone: false,
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.css'
})
export class ArtistComponent implements OnInit {
  artist: any;

  // Artist Information
  artworks = [
  {

    id: 1,
    name: 'Starry Night',
    imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/960px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    description: 'A masterpiece depicting a swirling night sky, with expressive, vibrant brushstrokes. Created by Vincent van Gogh during his stay at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, this iconic work captures his emotional turbulence and connection to nature.',
    shortDescription: 'A masterpiece depicting a swirling night sky.',
    artist: {
      name: 'Vincent van Gogh',
      profileImage: 'https://cdn.britannica.com/36/69636-050-81A93193/Self-Portrait-artist-panel-board-Vincent-van-Gogh-1887.jpg',
      bio: 'Vincent van Gogh (1853–1890) was a Dutch Post‑Impressionist painter known for his expressive use of color and bold brushwork. Despite struggling with mental health and poverty, he created over 2,000 artworks that shaped modern art.'
    },
    publicationDate: '1889-06-01',
    category: 'Painting',
    type: 'Post-Impressionism'
  },
  {
    id: 2,
    name: 'Mona Lisa',
    imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    description: 'A portrait of a woman with an enigmatic smile, the Mona Lisa is widely regarded as the most famous painting in the world.',
    shortDescription: 'A portrait of a woman with an enigmatic smile.',
    artist: {
      name: 'Leonardo da Vinci',
      profileImage: 'https://www.leonardodavinci.net/assets/img/leonardo-da-vinci.jpg',
      bio: 'Leonardo da Vinci (1452–1519) was an Italian polymath of the Renaissance, celebrated for his contributions to art, science, and engineering. His works combine technical mastery with deep observation of nature.'
    },
    publicationDate: '1503-01-01',
    category: 'Painting',
    type: 'Renaissance'
  },
  {
    id: 3,
    name: 'The Persistence of Memory',
    imgPath: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
    description: 'A surreal masterpiece by Salvador Dalí, this painting is famous for its melting clocks, which symbolize the fluidity and impermanence of time.',
    shortDescription: 'A surreal painting featuring melting clocks.',
    artist: {
      name: 'Salvador Dalí',
      profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/440px-Salvador_Dal%C3%AD_1939.jpg',
      bio: 'Salvador Dalí (1904–1989) was a Spanish surrealist known for his eccentric personality and dreamlike imagery. His art explored the subconscious and challenged conventional reality.'
    },
    publicationDate: '1931-01-01',
    category: 'Painting',
    type: 'Surrealism'
  },
  {
    id: 4,
    name: 'The Scream',
    imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream.jpg/500px-Edvard_Munch%2C_1893%2C_The_Scream.jpg',
    description: 'An expression of existential angst, The Scream is Edvard Munch’s most famous work.',
    shortDescription: 'An expression of existential angst.',
    artist: {
      name: 'Edvard Munch',
      profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Portrait_of_Edvard_Munch_%28cropped%29.png/440px-Portrait_of_Edvard_Munch_%28cropped%29.png',
      bio: 'Edvard Munch (1863–1944) was a Norwegian painter whose work explored themes of love, anxiety, and death. He was a pioneer of expressionism, influencing generations of artists.'
    },
    publicationDate: '1893-01-01',
    category: 'Painting',
    type: 'Expressionism'
  },
  {
    id: 5,
    name: 'Guernica',
    imgPath: 'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
    description: 'A powerful anti-war statement, Guernica is a monumental work by Pablo Picasso.',
    shortDescription: 'A powerful anti-war statement.',
    artist: {
      name: 'Pablo Picasso',
      profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/440px-Pablo_picasso_1.jpg',
      bio: 'Pablo Picasso (1881–1973) was a Spanish painter and sculptor, co‑founder of Cubism. His prolific career spanned styles from realism to abstraction.'
    },
    publicationDate: '1937-01-01',
    category: 'Painting',
    type: 'Cubism'
  },
  {
    id: 6,
    name: 'The Thinker',
    imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mus%C3%A9e_Rodin_1.jpg/500px-Mus%C3%A9e_Rodin_1.jpg',
    description: 'A sculpture of a man lost in deep thought, The Thinker by Auguste Rodin is an iconic symbol of intellectual contemplation.',
    shortDescription: 'A sculpture of a man lost in deep thought.',
    artist: {
      name: 'Auguste Rodin',
      profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Auguste_Rodin_by_George_Charles_Beresford_%28NPG_x6573%29.jpg/500px-Auguste_Rodin_by_George_Charles_Beresford_%28NPG_x6573%29.jpg',
      bio: 'Auguste Rodin (1840–1917) was a French sculptor renowned for bringing a new level of emotion and realism to sculpture, breaking classical traditions.'
    },
    publicationDate: '1902-01-01',
    category: 'Sculpture',
    type: 'Realism'
  },
  {
    id: 7,
    name: 'Girl with a Pearl Earring',
    imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/960px-1665_Girl_with_a_Pearl_Earring.jpg',
    description: 'Often referred to as the "Mona Lisa of the North," Girl with a Pearl Earring is a stunning portrait by Johannes Vermeer.',
    shortDescription: 'A beautiful portrait of a girl wearing a pearl earring.',
    artist: {
      name: 'Johannes Vermeer',
      profileImage: 'https://blog.creativeflair.org/wp-content/uploads/2023/03/download-5-1.webp',
      bio: 'Johannes Vermeer (1632–1675) was a Dutch Baroque painter celebrated for his masterful use of light and intimate domestic scenes.'
    },
    publicationDate: '1665-01-01',
    category: 'Painting',
    type: 'Baroque'
  },
  {
    id: 8,
    name: 'The Birth of Venus',
    imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/960px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
    description: 'A celebration of beauty and mythology, The Birth of Venus by Sandro Botticelli depicts the goddess Venus emerging from the sea on a shell.',
    shortDescription: 'A depiction of Venus emerging from the sea.',
    artist: {
      name: 'Sandro Botticelli',
      profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/440px-Sandro_Botticelli_083.jpg',
      bio: 'Sandro Botticelli (1445–1510) was an Italian painter of the Early Renaissance known for his poetic compositions and mythological subjects.'
    },
    publicationDate: '1486-01-01',
    category: 'Painting',
    type: 'Renaissance'
  },
{
  id: 10,
  name: 'The Last Supper',
  imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1000px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg',
  description: 'The Last Supper by Leonardo da Vinci captures a pivotal moment in Christian history: Jesus announcing that one of his disciples will betray him.',
  shortDescription: 'A depiction of Jesus and his disciples during the Last Supper.',
  artist: {
    name: 'Leonardo da Vinci',
    profileImage: 'https://www.leonardodavinci.net/assets/img/leonardo-da-vinci.jpg',
    bio: 'Leonardo da Vinci (1452–1519) was an Italian Renaissance master whose genius spanned painting, anatomy, architecture, and invention. His curiosity and innovation left an enduring legacy.'
  },
  publicationDate: '1498-01-01',
  category: 'Painting',
  type: 'Renaissance'
},
{
  id: 11,
  name: 'The Kiss',
  imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/960px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
  description: 'The Kiss by Gustav Klimt is a radiant celebration of love and intimacy.',
  shortDescription: 'A romantic portrayal of a couple embracing.',
  artist: {
    name: 'Gustav Klimt',
    profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Klimt.jpg/500px-Klimt.jpg',
    bio: 'Gustav Klimt (1862–1918) was an Austrian Symbolist painter, renowned for his golden phase and sensuous, ornamental works that merged symbolism with modernist design.'
  },
  publicationDate: '1908-01-01',
  category: 'Painting',
  type: 'Symbolism'
},
{
  id: 12,
  name: 'The Night Watch',
  imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/960px-The_Night_Watch_-_HD.jpg',
  description: 'The Night Watch by Rembrandt is a dramatic and complex group portrait of a Dutch militia company.',
  shortDescription: 'A group portrait of a city militia.',
  artist: {
    name: 'Rembrandt',
    profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg',
    bio: 'Rembrandt van Rijn (1606–1669) was a Dutch Baroque master known for his innovative use of light and shadow and his deeply human portraits and biblical scenes.'
  },
  publicationDate: '1642-01-01',
  category: 'Painting',
  type: 'Baroque'
},
{
  id: 13,
  name: 'Campbell\'s Soup Cans',
  imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg/960px-Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg',
  description: 'Campbell’s Soup Cans by Andy Warhol is a defining work of the Pop Art movement.',
  shortDescription: 'An iconic pop art piece of 32 soup can paintings.',
  artist: {
    name: 'Andy Warhol',
    profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg/500px-Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg',
    bio: 'Andy Warhol (1928–1987) was an American artist and leading figure of Pop Art, famed for his explorations of consumer culture and mass production through bold, repeated imagery.'
  },
  publicationDate: '1962-01-01',
  category: 'Painting',
  type: 'Pop Art'
},
{
  id: 14,
  name: 'The School of Athens',
  imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/960px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
  description: 'The School of Athens by Raphael is a fresco that celebrates the intellectual achievements of classical antiquity.',
  shortDescription: 'A fresco showing great thinkers of classical antiquity.',
  artist: {
    name: 'Raphael',
    profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/500px-Raffaello_Sanzio.jpg',
    bio: 'Raphael (1483–1520) was an Italian High Renaissance painter and architect, celebrated for his harmonious compositions and serene figures.'
  },
  publicationDate: '1511-01-01',
  category: 'Painting',
  type: 'Renaissance'
},
{
  id: 15,
  name: 'Nighthawks',
  imgPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/960px-Nighthawks_by_Edward_Hopper_1942.jpg',
  description: 'Nighthawks by Edward Hopper captures the quiet loneliness of urban life.',
  shortDescription: 'A lonely late-night diner scene.',
  artist: {
    name: 'Edward Hopper',
    profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg/500px-Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg',
    bio: 'Edward Hopper (1882–1967) was an American realist painter whose depictions of modern isolation and urban scenes became iconic representations of 20th‑century life.'
  },
  publicationDate: '1942-01-01',
  category: 'Painting',
  type: 'Realism'
}
  ]
    

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const artistName = params.get('name');
    if (artistName) {
      // Find all artworks by this artist
      const artworksByArtist = this.artworks.filter(
        art => art.artist.name === artistName
      );

      if (artworksByArtist.length > 0) {
        // Use the first artwork's artist info
        const artistInfo = artworksByArtist[0].artist;

        // Attach artworks to the artist
        this.artist = {
          ...artistInfo,
          artworks: artworksByArtist
        };
      }
    }
  });
}


}