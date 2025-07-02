

let runText = 0;
let words1, words2, words3;
let countDown900 = 0;
let countDown700 = 300;
let speedCountDown = 3;
let textOut = false;
function page2() {
    if (runText < height * 3.5) {
        words1 = '\"Pets have been companions to humans for centuries, providing joy, comfort, and a sense of responsibility. Whether furry, feathered, or scaly, these animals become integral parts of our lives, each with its unique characteristics and qualities. Let\\\'s delve into the fascinating world of pets, exploring their history, benefits, diverse species, and the responsibilities that come with caring for these beloved creatures.\n\n'
            + 'The bond between humans and pets dates back thousands of years. Archaeological evidence suggests that domestication of animals began as early as 10,000 BCE, with dogs being among the first to form close relationships with humans. Over time, this bond has evolved, and today, a wide variety of animals are kept as pets, ranging from the traditional cats and dogs to more exotic choices like reptiles and birds.\n\n'
            + 'One of the most popular and cherished pets is the dog. Known for their loyalty and companionship, dogs come in various breeds, each with its own set of characteristics. From the energetic and playful Labrador Retriever to the regal and dignified German Shepherd, there\\\'s a dog breed to suit every personality and lifestyle. Dogs not only provide companionship but also offer emotional support and can be trained for various tasks, such as assistance for individuals with disabilities or working in search and rescue operations.\n\n'
            + 'Cats, another common choice for pets, have a reputation for independence. Felines are known for their agility, grace, and the ability to form strong bonds with their human counterparts. Cat owners often find solace in the gentle purring of their furry friends, which is believed to have therapeutic effects, reducing stress and promoting relaxation.\n\n'
            + 'As the world of pets extends beyond the realm of traditional companions, many individuals find joy in keeping smaller animals like rabbits, guinea pigs, and hamsters. These pint-sized creatures bring a different kind of delight to households, with their cute antics and unique personalities. While they may not require as much space as larger pets, these small animals still need proper care and attention to thrive.\n\n'
            + 'For those with a taste for the exotic, reptiles have carved out their niche in the pet world. Snakes, lizards, and turtles are among the scaly companions that have found their way into homes. Reptile enthusiasts appreciate the unique beauty and behaviors of these creatures, investing time and effort into creating specialized habitats to meet their specific needs.\n\n'
            + 'Birds, with their vibrant plumage and melodic songs, are another popular choice for pet owners. From the talkative African Grey Parrot to the colorful Budgerigar, birds bring a touch of the wild into homes. However, caring for birds involves more than just providing a cage; they require social interaction, mental stimulation, and a balanced diet to thrive.\n\n'
            + 'The benefits of having a pet extend beyond mere companionship. Research has shown that owning a pet can have positive effects on both physical and mental health. The act of petting a dog or cat, for example, can lower blood pressure and reduce stress levels. The responsibility of caring for a living being also instills a sense of routine and purpose, particularly beneficial for individuals dealing with mental health issues.\n\n'
            + 'Moreover, pets can serve as social catalysts, fostering connections between individuals. Dog owners often find themselves engaging in conversations with fellow pet enthusiasts during walks or visits to the dog park. This social aspect of pet ownership creates a sense of community and shared experiences, contributing to an individual\\\'s overall well-being.\n\n'
            + 'However, the decision to bring a pet into one\\\'s life comes with responsibilities. Each species has specific requirements regarding diet, exercise, and healthcare. It\\\'s essential for pet owners to educate themselves on the needs of their chosen companion and invest time and resources to ensure their well-being. Regular veterinary check-ups, proper nutrition, and a safe living environment are fundamental aspects of responsible pet ownership.\n\n'
            + 'The commitment to caring for a pet also involves understanding the lifespan of the chosen species. Dogs and cats, for instance, can live for a decade or more, requiring a long-term commitment from their owners. This commitment is not to be taken lightly, as it involves financial, emotional, and time-related investments.\n\n'
            + 'In recent years, the rise of technology has even impacted the pet industry. Smart pet gadgets, such as automated feeders, GPS trackers, and interactive toys, have become increasingly popular. These innovations aim to enhance the overall well-being of pets and provide convenience for their owners. For instance, smart collars with GPS tracking capabilities offer peace of mind for pet owners, allowing them to locate their furry friends if they happen to wander off.\n\n'
            + 'In conclusion, the world of pets is a vast and diverse one, offering companionship and joy to millions of people worldwide. Whether you choose the playful antics of a dog, the independent charm of a cat, or the exotic allure of a reptile, the bond between humans and their pets is a special and enduring one. As we continue to learn more about the needs and behaviors of different species, responsible pet ownership remains crucial for ensuring the well-being of these beloved companions.\"';
        words2 = 'Humans, the enigmatic species that dominates the planet Earth, are characterized by their complexity, diversity, and capacity for innovation. From ancient civilizations to modern technological societies, the story of humanity is one of continuous evolution, adaptation, and progress. Let\'s embark on a journey through the random tapestry of human existence, exploring various aspects of our biology, culture, history, and the challenges we face in the contemporary world.\n' +
            '\n' + 'At the core of human existence is our biology. The human body, a marvel of intricate design, comprises various systems working in harmony. The cardiovascular system, with its rhythmic beating heart, ensures the circulation of blood and nutrients. The respiratory system allows for the exchange of oxygen and carbon dioxide, sustaining the body\'s energy production.The nervous system, a complex network of neurons, enables communication between different parts of the body, facilitating movement, perception, and cognition.\n' + '\n' + 'Genetics, the blueprint encoded in our DNA, plays a pivotal role in shaping individual characteristics and predispositions. The human genome, a vast sequence of genes, carries the information that dictates everything from eye color to susceptibility to certain diseases. The study of genetics has opened new frontiers in medicine, enabling researchers to understand, prevent, and treat various genetic disorders.\n' +
            '\n' + 'As social beings, humans have a natural inclination to form communities. The concept of family, one of the fundamental building blocks of human society, extends beyond biological ties to encompass emotional bonds and mutual support. Families provide a sense of identity, belonging, and the foundation for cultural transmission.\n' +
            '\n' + 'Culture, a rich tapestry woven through the collective experiences of a society, encompasses language, art, music, traditions, and beliefs. The diversity of human cultures across the globe is a testament to our ability to adapt to different environments and express creativity in myriad ways. Language, a sophisticated system of communication, allows humans to convey thoughts, emotions, and complex ideas, fostering cooperation and shared understanding.\n' +
            '\n' + 'Throughout history, humans have demonstrated an innate drive for exploration and discovery. The evolution of early Homo sapiens saw migration from Africa to other continents, adapting to diverse climates and landscapes. This spirit of exploration persisted through the ages, driving the Age of Discovery in the 15th and 16th centuries, when European explorers ventured into uncharted territories, expanding trade routes and cultural exchange.\n' +
            '\n' + 'In the realm of innovation, humans have harnessed the power of technology to reshape the world. The agricultural revolution marked a pivotal moment in human history, transitioning from a nomadic lifestyle to settled agricultural communities. The industrial revolution, fueled by technological advancements, ushered in a new era of manufacturing and urbanization, transforming societies and economies.\n' +
            '\n' + 'The 21st century has witnessed the rapid acceleration of technological progress, with the digital revolution at its forefront. The internet, a global network connecting billions of people, has revolutionized communication, commerce, and access to information. Smartphones, with their multifunctional capabilities, have become ubiquitous tools in the hands of individuals worldwide, reshaping how we connect, work, and entertain ourselves.\n' +
            '\n' + 'However, the same technological advancements that bring convenience and connectivity also pose challenges to human well-being. The digital age has given rise to concerns about privacy, cybersecurity, and the impact of constant connectivity on mental health. The rapid pace of technological change requires societies to adapt and address the ethical implications of emerging technologies, such as artificial intelligence, biotechnology, and automation.\n' +
            '\n' + 'In the face of these challenges, humans have demonstrated resilience and the capacity for cooperation. Global issues, such as climate change, pandemics, and socio-economic inequality, necessitate collaborative efforts on an international scale. The interconnectedness of the modern world highlights the importance of shared responsibility in addressing these challenges and shaping a sustainable future.\n' +
            '\n' + 'The human experience is also marked by the pursuit of knowledge and self-discovery. Education, a cornerstone of personal and societal development, empowers individuals to understand the world, critically analyze information, and contribute to the advancement of knowledge. The quest for knowledge extends beyond formal education to include lifelong learning, curiosity, and the exploration of diverse perspectives.\n' +
            '\n' + 'In the realm of emotions, humans exhibit a wide spectrum of feelings, from joy and love to fear and sadness. The arts, including literature, music, and visual arts, serve as expressive outlets for the complex tapestry of human emotions. Creativity, a uniquely human trait, allows individuals to innovate, problem-solve, and find meaning in the world.\n' +
            '\n' + 'The concept of morality and ethics is deeply ingrained in human societies. While cultural and religious beliefs shape ethical frameworks, there is a universal recognition of certain principles, such as empathy, fairness, and the inherent value of human life. Ethical considerations guide decision-making in various domains, from individual choices to the formulation of public policies.\n' +
            '\n' + 'As social creatures, humans engage in complex interpersonal relationships that shape their sense of identity and belonging. Friendships, romantic partnerships, and familial bonds contribute to the social fabric, providing emotional support, companionship, and a sense of shared history. The study of psychology delves into the intricacies of human behavior, cognition, and the factors that influence mental well-being.\n' +
            '\n' + 'In conclusion, the random exploration of the human experience reveals a tapestry woven with threads of biology, culture, history, and the challenges of the contemporary world. From the intricate workings of the human body to the vast diversity of cultures across the globe, humans continue to navigate the complexities of existence. The journey of humanity is marked by resilience, innovation, and the collective pursuit of a better future. As we navigate the challenges of the 21st century, the shared responsibility to address global issues underscores the interconnected nature of human existence.';
        words3 = 'Paper, a versatile and ancient invention, has played a pivotal role in the development of human civilization. Its evolution from simple papyrus scrolls to modern recycled sheets reflects the ingenuity and adaptability of human beings. Let\'s delve into the diverse facets of paper, exploring its history, manufacturing processes, environmental impact, and the myriad ways it shapes our daily lives.\n' +
            '\n' + 'The history of paper is a fascinating journey that spans centuries and continents. Ancient Egyptians are credited with developing one of the earliest forms of paper—papyrus. Made from the fibrous stalks of the papyrus plant, these early scrolls served as a medium for recording information, preserving knowledge, and communicating messages. The Chinese, however, are often recognized for the invention of true paper around the 2nd century BCE, using a mixture of mulberry bark and other plant fibers.\n' +
            '\n' + 'Papermaking techniques gradually spread throughout the world, reaching the Arab world and Europe by the 8th century. The advent of the printing press in the 15th century marked a revolutionary moment in the history of paper, as it fueled the mass production of books, enabling the dissemination of knowledge on an unprecedented scale. The Gutenberg Bible, printed in the 1450s, stands as a symbol of this transformative era, emphasizing the importance of paper in the proliferation of information.\n' +
            '\n' + 'The manufacturing of paper involves a series of intricate processes, each contributing to the final product\'s characteristics.The primary raw material for papermaking is wood pulp, obtained from various tree species.The pulping process, which separates fibers from wood, can be achieved through mechanical or chemical means.Mechanical pulping involves grinding wood into fibers, while chemical pulping uses chemicals to break down lignin, a component that binds fibers together.\n' +
            '\n' + 'Once pulped, the fibers undergo a refining process to enhance their quality and create a pulp slurry. This slurry is then formed into sheets through a papermaking machine, where it undergoes pressing, drying, and sometimes coating to achieve specific properties. The choice of raw materials, manufacturing methods, and additives influences the paper\'s characteristics, including texture, weight, and absorbency.\n' +
            '\n' + 'As society becomes increasingly aware of environmental issues, the paper industry has faced scrutiny regarding its impact on forests and ecosystems. Sustainable forestry practices and certification programs, such as those endorsed by the Forest Stewardship Council (FSC), aim to ensure responsible management of forests and promote the use of wood from well-managed sources. Additionally, advancements in recycling have played a crucial role in reducing the demand for virgin wood pulp, as recycled paper can be used to produce various paper products.\n' +
            '\n' + 'Recycling paper involves collecting used paper, breaking it down into fibers, and incorporating it into the papermaking process. The recycling loop helps conserve natural resources, reduce energy consumption, and minimize waste. However, challenges exist in achieving a high level of paper recycling due to contamination, varying paper qualities, and consumer habits. Education and awareness campaigns play a crucial role in encouraging individuals and businesses to prioritize recycling and reduce their environmental footprint.\n' +
            '\n' + 'In the digital age, where information is often transmitted electronically, the role of paper has evolved. While electronic communication and documentation have become prevalent, paper retains its significance in various domains. In offices, businesses, and educational institutions, printed documents continue to be essential for certain tasks. The tactile nature of paper, coupled with its readability and ease of annotation, contributes to its enduring appeal in specific contexts.\n' +
            '\n' + 'Books, newspapers, and magazines remain popular forms of printed media, offering a tangible and immersive reading experience. The smell of a new book or the rustle of turning pages evoke a sensory connection that digital formats may not fully replicate. While e-books and online news platforms have gained prominence, the coexistence of digital and print media reflects the diverse preferences of consumers.\n' +
            '\n' + 'Artists and craftsmen also utilize paper as a medium for creativity. Origami, the Japanese art of paper folding, transforms a flat sheet into intricate three-dimensional sculptures. Collage artists repurpose paper materials to create visually compelling compositions. Beyond its functional roles, paper serves as a canvas for artistic expression, enabling individuals to convey ideas and emotions through visual forms.\n' +
            '\n' + 'The realm of academia and research relies heavily on the publication of scholarly papers. Peer-reviewed journals, academic conferences, and research papers contribute to the dissemination of knowledge, fostering intellectual exchange and advancements in various fields. The peer-review process, a cornerstone of academic publishing, ensures the credibility and rigor of scientific papers, promoting the pursuit of truth and innovation.\n' +
            '\n' + 'In the business world, paper plays a crucial role in documentation, record-keeping, and communication. Invoices, contracts, and official documents often exist in both digital and physical formats to meet the needs of diverse stakeholders. While digitalization has streamlined many processes, the importance of paper trails for legal, archival, and regulatory purposes persists.\n' +
            '\n' + 'In the realm of packaging, paper offers sustainable alternatives to traditional materials like plastic. Biodegradable and recyclable, paper packaging has gained popularity as consumers and businesses seek eco-friendly solutions. From cardboard boxes to paper bags, the packaging industry continues to explore innovative ways to reduce environmental impact without compromising functionality.\n' +
            '\n' + 'In conclusion, the narrative of paper weaves through the tapestry of human history, connecting ancient civilizations to the present day. From papyrus scrolls in ancient Egypt to the digital age of electronic communication, paper has evolved in response to societal needs and technological advancements. The multifaceted nature of paper encompasses its cultural, environmental, and practical dimensions, making it a symbol of human ingenuity and adaptability. As we navigate the challenges of sustainability and digital transformation, the story of paper continues to unfold, reflecting the ever-changing dynamics of human existence.';


        runText += 80;
        rectMode(CORNER);
        fill(0, 200, 0);
        textFont(pressStart2P);
        textSize(8);
        textAlign(LEFT, CENTER);
        text(words2, 0, (-height * 2) + runText, width, height * 2);

        rectMode(CORNER);
        fill(0, 200, 0);
        textFont(pressStart2P);
        textSize(10);
        textAlign(LEFT, CENTER);
        text(words3, 0, (-height * 2.3) + runText, width, height * 2);

        rectMode(CORNER);
        fill(0, 250, 0);
        textFont(pressStart2P);
        textSize(12);
        textAlign(LEFT, CENTER);
        text(words1, 0, (-height * 2) + runText, width, height * 2);
    } else {
        textOut = true;
    }
    if (!textOut) {
        step = 1;
    }
    if (step != 1) {
        if (countDown700 < 900 && countDown900 < 900) {
            for (let i = 1; i <= 41; i++) {
                if (i % 2 == 0) {
                    showText(countDown700 | 0, i, 17);
                } else {
                    showText(countDown900 | 0, i, 17);
                }
            }
            countDown700 += speedCountDown;
            countDown900 += speedCountDown * (900 / ((700 / speedCountDown) * speedCountDown));
            console.log(countDown700 + " " + countDown900);
        } else {
            for (let i = 1; i <= 41; i++) {
                showText("ERROR", i, 10);
            }
            console.log(countDown700 + " " + countDown900);
        }

    }

    if (step === 1) {
        countDown700 = 300;
        countDown900 = 0;
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        textSize(13);
        textFont(pressStart2P);
        fill(0, 255, 0);
        text(`What just ran over there?\nDo I need to read and absorb all of them?`, width / 2, height - 50 - padding, 1200, 100);

    } else if (step == 2) {
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        textSize(13);
        textFont(pressStart2P);
        fill(0, 255, 0);
        text(`In me, there is an invisible fear of "not keeping up" with new technology and of "tolerating" useless information.`, width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 3) {
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        textSize(13);
        textFont(pressStart2P);
        fill(0, 255, 0);
        text(`But then I gradually learned the importance of understanding what is necessary`, width / 2, height - 50 - padding, 1200, 100);
    } else if (step == 4) {
        textAlign(CENTER, CENTER);
        rectMode(CENTER);
        textSize(13);
        textFont(pressStart2P);
        fill(0, 255, 0);
        text(`Even though it's hard to balance everything, I'm still trying haha...`, width / 2, height - 50 - padding, 1200, 100);
    }
};

