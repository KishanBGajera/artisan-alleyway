import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import img1 from "../../../public/images/locality/accordion-1.jpg";
import img2 from "../../../public/images/locality/accordion-2.jpg";
import img3 from "../../../public/images/locality/accordion-3.jpg";
import img4 from "../../../public/images/locality/accordion-4.jpg";
import img5 from "../../../public/images/locality/accordion-5.jpg";
import img6 from "../../../public/images/locality/accordion-6.jpg";
import img7 from "../../../public/images/locality/accordion-7.jpg";
import './Locality.css'

const Locality = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Mystic Rhythms",
      content: (
        <>
          <div className="column" id="mysticRhythmsContent">
            <p>India's rich cultural heritage traces back to its ancient civilizations, such as the Indus Valley Civilization, which flourished around 2500 BCE. The people of this era developed sophisticated urban centers, advanced agricultural practices, and intricate trade networks. Artifacts uncovered from archaeological sites reveal their mastery in pottery, metallurgy, and urban planning, showcasing a society that thrived on innovation and craftsmanship. Indian music and dance are integral parts of the country's cultural heritage. Classical music forms like Hindustani and Carnatic music have roots dating back centuries, with intricate melodies and rhythms that evoke a range of emotions. Traditional dance forms such as Bharatanatyam, Kathak, Odissi, and Kathakali are not just artistic expressions but also storytelling mediums, depicting tales from mythology and folklore with grace and precision.</p>
          </div>
          <div className="column" id="mysticRhythmsImage">
            <img src={img1} alt="Image 1" />
          </div>
        </>
      ),
      img: img1,
    },
    {
      title: "Silken Sarees",
      content: (
        <>
          <div className="column" id="silkenSareesContent">
            <p>Indian culture has long been synonymous with spirituality and philosophy. Ancient texts like the Vedas, Upanishads, and Bhagavad Gita form the philosophical backbone of Hinduism, emphasizing concepts such as dharma (duty), karma (action), and moksha (liberation). The teachings of sages like Gautama Buddha and Mahavira Jain further enriched the spiritual tapestry of India, giving rise to Buddhism and Jainism, respectively. These spiritual traditions continue to influence Indian society, shaping moral values and guiding personal conduct. Ancient India made significant contributions to the fields of science and mathematics. The concept of zero, the decimal system, and the value of pi were pioneered by Indian mathematicians. Scholars like Aryabhata and Bhaskara made groundbreaking discoveries in astronomy, laying the foundation for modern scientific inquiry.</p>
          </div>
          <div className="column" id="silkenSareesImage">
            <img src={img2} alt="Image 2" />
          </div>
        </>
      ),
      img: img2,
    },
    {
      title: "Golden Temples",
      content: (
        <>
          <div className="column" id="goldenTemplesContent">
            <p>India's cultural landscape is as diverse as it is vibrant, with each region boasting its own unique traditions, languages, and customs. From the colorful festivities of Diwali in the north to the lively dance forms of Bharatanatyam in the south, the country's cultural mosaic reflects a tapestry of diversity. Despite this diversity, a sense of unity pervades Indian culture, transcending regional boundaries and fostering a deep sense of national identity. India is a land of diverse cultures, languages, and religions, yet it has a long history of coexistence and harmony. The country's secular ethos promotes tolerance and respect for all faiths, fostering a pluralistic society where people of different backgrounds live and work together in peace. Indian craftsmanship is renowned for its intricacy and attention to detail. From handwoven textiles like silk and cotton sarees to intricate embroidery and beadwork, India's textile heritage reflects a legacy of skilled craftsmanship passed down through generations. Each region boasts its own distinctive textile traditions, showcasing a vibrant array of colors, patterns, and motifs that celebrate the country's cultural diversity.</p>
          </div>
          <div className="column" id="goldenTemplesImage">
            <img src={img3} alt="Image 3" />
          </div>
        </>
      ),
      img: img3,
    },
    {
      title: "Vibrant Bazaars",
      content: (
        <>
          <div className="column" id="vibrantBazaarsContent">
            <p>Indian art and architecture have left an indelible mark on world history, with architectural marvels like the Taj Mahal standing as testaments to the country's rich artistic legacy. From the intricate carvings of Hindu temples at Khajuraho to the majestic forts and palaces of Rajasthan, Indian architecture showcases a blend of indigenous styles and foreign influences. Similarly, Indian art spans a wide range of mediums, from classical paintings and sculptures to folk art traditions that capture the essence of rural life. India's history also includes a period of colonial rule under the British Empire, which significantly shaped the nation's trajectory. The struggle for independence led by figures like Mahatma Gandhi, Jawaharlal Nehru, and Subhas Chandra Bose united people across the country in a nonviolent resistance against colonial oppression. The Indian independence movement ultimately culminated in 1947 with the end of British rule and the birth of the modern Indian nation-state.</p>
          </div>
          <div className="column" id="vibrantBazaarsImage">
            <img src={img4} alt="Image 4" />
          </div>
        </>
      ),
      img: img4,
    },
    {
      title: "Timeless Traditions",
      content: (
        <>
          <div className="column" id="timelessTraditionsContent">
            <p>Festivals form an integral part of Indian culture, serving as occasions for joy, unity, and spiritual renewal. Whether it's the colorful revelry of Holi, the auspiciousness of Navratri, or the communal feasting of Eid, festivals bring people from diverse backgrounds together in celebration. These festivities are marked by vibrant decorations, traditional rituals, and the exchange of sweets and gifts, fostering a sense of camaraderie and goodwill among communities. Sports and traditional games have long been an integral part of Indian culture, offering both entertainment and opportunities for physical fitness. Cricket holds a special place in the hearts of many Indians and is considered more than just a sport. It brings people together, fostering a sense of camaraderie and national pride. In rural areas, traditional games like kabaddi and kho-kho are popular, showcasing the agility and teamwork of players. These games reflect the spirit of community and the joy of friendly competition, contributing to the vibrant tapestry of Indian culture.</p>
          </div>
          <div className="column" id="timelessTraditionsImage">
            <img src={img5} alt="Image 5" />
          </div>
        </>
      ),
      img: img5,
    },
    {
      title: "Culinary Delights",
      content: (
        <>
          <div className="column" id="culinaryDelightsContent">
            <p>Indian cuisine is a symphony of flavors and aromas, with each region offering its own distinctive culinary traditions. From the spicy curries of the south to the delectable sweets of the north, Indian food reflects a rich tapestry of tastes and textures. The use of diverse spices, herbs, and ingredients results in a culinary experience that is both diverse and deeply satisfying. The enduring appeal of India's cultural heritage lies in its ability to evolve while staying true to its roots. In a rapidly changing world, the preservation of traditional arts, crafts, and practices ensures that future generations can appreciate and draw inspiration from their rich cultural legacy. The global diaspora of Indians has also played a crucial role in spreading Indian culture worldwide, making it a truly global phenomenon.</p>
          </div>
          <div className="column" id="culinaryDelightsImage">
            <img src={img6} alt="Image 6" />
          </div>
        </>
      ),
      img: img6,
    }
  ];

  return (
    <div className="accordion" id="accordionComponent">
      {accordionData.map(({ title, content, img }, index) => (
        <AccordionItem 
          key={index} 
          title={title} 
          content={content} 
          img={img} 
          isActive={index === activeIndex}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Locality;
