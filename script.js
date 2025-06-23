


        // Game Data - Moved to separate object for better organization
        const gameData = {
                vocab2: [
                    { word: "carrot 🥕", meaning: "A long, orange, root vegetable that is sweet and crunchy.", khmer: "ការ៉ុត", audio: "carrot.mp3" },
                    { word: "potato 🥔", meaning: "A starchy, round or oval-shaped root vegetable.", khmer: "ដំឡូងបារាំង", audio: "potato.mp3" },
                    { word: "onion 🧅", meaning: "A round vegetable with thin, dry skin and many layers inside, having a strong smell and taste.", khmer: "ខ្ទឹមបារាំង", audio: "onion.mp3" },
                    { word: "tomato 🍅", meaning: "A soft, red fruit, eaten as a vegetable, often in salads.", khmer: "ប៉េងប៉ោះ", audio: "tomato.mp3" },
                    { word: "cucumber 🥒", meaning: "A long, green-skinned fruit with watery flesh, usually eaten raw in salads.", khmer: "ត្រសក់", audio: "cucumber.mp3" },
                    { word: "lettuce 🥬", meaning: "A leafy green vegetable, often used in salads.", khmer: "សាឡាត់", audio: "lettuce.mp3" },
                    { word: "broccoli 🥦", meaning: "A green vegetable with a tree-like shape.", khmer: "ផ្កាខាត់ណាខៀវ", audio: "broccoli.mp3" },
                    { word: "cabbage 🥬", meaning: "A round vegetable with large, green or purple leaves.", khmer: "ស្ពៃក្តោប", audio: "cabbage.mp3" },
                    { word: "spinach 🥬", meaning: "A leafy green vegetable, rich in iron.", khmer: "ស្ពៃខ្មៅ", audio: "spinach.mp3" },
                    { word: "bell pepper 🌶️", meaning: "A hollow, mild-flavored vegetable, often red, yellow, or green.", khmer: "ម្ទេសប្លោក", audio: "bellpepper.mp3" }
                ],
                vocab1: [
                    { word: "apple 🍎", meaning: "A round fruit with crisp flesh and pips.", khmer: "ផ្លែប៉ោម", audio: "apple.mp3" },
                    { word: "banana 🍌", meaning: "A long, curved fruit with soft pulpy flesh and yellow skin when ripe.", khmer: "ចេក", audio: "banana.mp3" },
                    { word: "orange 🍊", meaning: "A round, sweet, juicy citrus fruit with a tough, reddish-yellow rind.", khmer: "ក្រូច", audio: "orange.mp3" },
                    { word: "grape 🍇", meaning: "A green, purple, or red berry, typically growing in clusters.", khmer: "ទំពាំងបាយជូរ", audio: "grape.mp3" },
                    { word: "lemon 🍋", meaning: "A yellow, oval citrus fruit with thick skin and fragrant, acidic juice.", khmer: "ក្រូចឆ្មារ", audio: "lemon.mp3" },
                    { word: "strawberry 🍓", meaning: "A sweet soft red fruit with a seed-studded surface.", khmer: "ស្ត្រប៊ឺរី", audio: "strawberry.mp3" },
                    { word: "mango 🥭", meaning: "A fleshy, oval, yellowish-red tropical fruit.", khmer: "ស្វាយ", audio: "mango.mp3" },
                    { word: "pineapple 🍍", meaning: "A large tropical fruit with spiky, tough skin and sweet, yellow flesh.", khmer: "ម្នាស់", audio: "pineapple.mp3" },
                    { word: "watermelon 🍉", meaning: "A large, round, green fruit with sweet, red, watery pulp and black seeds.", khmer: "ឪឡឹក", audio: "watermelon.mp3" },
                    { word: "pear 🍐", meaning: "A sweet, juicy fruit that is narrow at the stem and wide at the bottom.", khmer: "ផ្លែសេរី", audio: "pear.mp3" },
                    { word: "cherry 🍒", meaning: "A small, soft, round stone fruit that is typically bright or dark red.", khmer: "ផ្លែឆឺរី", audio: "cherry.mp3" },
                    { word: "peach 🍑", meaning: "A round stone fruit with juicy yellow flesh and fuzzy skin.", khmer: "ផ្លែប៉េស", audio: "peach.mp3" },
                    { word: "plum 🍑", meaning: "An oval fleshy fruit that is purple, red, or yellow when ripe and contains a flattish pointed stone.", khmer: "ផ្លែព្រីង", audio: "plum.mp3" },
                    { word: "kiwi 🥝", meaning: "A small oval fruit with a brown, hairy skin, sweet green flesh, and tiny black seeds.", khmer: "គីវី", audio: "kiwi.mp3" },
                    { word: "blueberry 🫐", meaning: "A small, sweet, dark blue berry, often grown in clusters.", khmer: "ផ្លែប៊្លូបឺរី", audio: "blueberry.mp3" },

                ],
                vocab3: [
                    { word: "hair 💇‍♂️", meaning: "The fine threads that grow from the skin of people and animals.", khmer: "សក់", audio: "hair.mp3" },
                    { word: "short ✂️", meaning: "Not long.", khmer: "ខ្លី", audio: "short.mp3" },
                    { word: "long 📏", meaning: "Measuring a great distance from end to end.", khmer: "វែង", audio: "long.mp3" },
                    { word: "curly 🔄", meaning: "Formed into coils or ringlets.", khmer: "រួញ", audio: "curly.mp3" },
                    { word: "straight ➡️", meaning: "Without a bend or curve.", khmer: "ត្រង់", audio: "straight.mp3" },
                    { word: "brown 🟫", meaning: "A color like that of earth or wood.", khmer: "ត្នោត", audio: "brown.mp3" },
                    { word: "black ⚫", meaning: "The darkest color, the opposite of white.", khmer: "ខ្មៅ", audio: "black.mp3" },
                    { word: "blonde 🌟", meaning: "Pale yellow or golden hair.", khmer: "ទង់ដែង", audio: "blonde.mp3" },
                    { word: "red 🔴", meaning: "A color like that of blood.", khmer: "ក្រហម", audio: "red.mp3" },
                    { word: "brush 🖌️", meaning: "An object with bristles used for tidying hair.", khmer: "ច្រាស", audio: "brush.mp3" }
                ],
                vocab4: [
                    { word: "red 🔴", meaning: "The color of blood or fire.", khmer: "ក្រហម", audio: "red.mp3" },
                    { word: "blue 🔵", meaning: "The color of the sky or the sea.", khmer: "ខៀវ", audio: "blue.mp3" },
                    { word: "yellow 🟡", meaning: "The color of ripe lemons or gold.", khmer: "លឿង", audio: "yellow.mp3" },
                    { word: "green 🟢", meaning: "The color of grass or leaves.", khmer: "បៃតង", audio: "green.mp3" },
                    { word: "black ⚫", meaning: "The darkest color; the opposite of white.", khmer: "ខ្មៅ", audio: "black.mp3" },
                    { word: "white ⚪", meaning: "The lightest color; the opposite of black.", khmer: "ស", audio: "white.mp3" },
                    { word: "orange 🟠", meaning: "A color between red and yellow; the color of an orange fruit.", khmer: "ទឹកក្រូច", audio: "orange_color.mp3" },
                    { word: "purple 🟣", meaning: "A color between red and blue.", khmer: "ស្វាយ", audio: "purple.mp3" },
                    { word: "pink 🌸", meaning: "A pale red color.", khmer: "ផ្កាឈូក", audio: "pink.mp3" },
                    { word: "brown 🟤", meaning: "A dark color like that of earth or wood.", khmer: "ត្នោត", audio: "brown_color.mp3" }
                ],
                vocab5: [
                    { word: "shirt 👕", meaning: "A piece of clothing for the upper body, typically with a collar and sleeves.", khmer: "អាវ", audio: "shirt.mp3" },
                    { word: "trousers 👖", meaning: "An outer garment covering the body from the waist to the ankles, with a separate part for each leg.", khmer: "ខោវែង", audio: "trousers.mp3" },
                    { word: "dress 👗", meaning: "A one-piece garment for a woman or girl that covers the body and extends down over the legs.", khmer: "រ៉ូប", audio: "dress.mp3" },
                    { word: "skirt 👚", meaning: "A garment fastened around the waist and hanging down around the legs.", khmer: "សំពត់", audio: "skirt.mp3" },
                    { word: "shoes 👟", meaning: "A covering for the foot, typically made of leather, with a sturdy sole and not reaching above the ankle.", khmer: "ស្បែកជើង", audio: "shoes.mp3" },
                    { word: "socks 🧦", meaning: "A garment for the foot and lower part of the leg.", khmer: "ស្រោមជើង", audio: "socks.mp3" },
                    { word: "coat 🧥", meaning: "An outer garment that you wear over other clothes to keep warm or for protection.", khmer: "អាវធំ", audio: "coat.mp3" },
                    { word: "hat 🎩", meaning: "A shaped covering for the head.", khmer: "មួក", audio: "hat.mp3" },
                    { word: "jacket 🧥", meaning: "An outer garment extending to the waist or hips, with sleeves.", khmer: "អាវក្រៅ", audio: "jacket.mp3" },
                    { word: "t-shirt 👕", meaning: "A short-sleeved casual top, generally made of cotton.", khmer: "អាវយឺត", audio: "t-shirt.mp3" }
                ],
                vocab6: [
                    { word: "chair 🪑", meaning: "A seat for one person, with a back and four legs.", khmer: "កៅអី", audio: "chair.mp3" },
                    { word: "table 🛋️", meaning: "A piece of furniture with a flat top and one or more legs, providing a surface for eating, writing, or working.", khmer: "តុ", audio: "table.mp3" },
                    { word: "bed 🛏️", meaning: "A piece of furniture for sleeping on, typically a framework with a mattress.", khmer: "គ្រែ", audio: "bed.mp3" },
                    { word: "sofa 🛋️", meaning: "A long upholstered seat with a back and arms, for two or more people.", khmer: "សាឡុង", audio: "sofa.mp3" },
                    { word: "desk 🖥️", meaning: "A piece of furniture with a flat top and often drawers, used for writing or working.", khmer: "តុការងារ", audio: "desk.mp3" },
                    { word: "wardrobe 👗", meaning: "A large, tall cupboard in which clothes may be hung or stored.", khmer: "ទូខោអាវ", audio: "wardrobe.mp3" },
                    { word: "lamp 💡", meaning: "A device for giving light.", khmer: "ចង្កៀង", audio: "lamp.mp3" },
                    { word: "shelf 📚", meaning: "A flat length of wood or other rigid material, attached to a wall or forming part of a unit, used for holding objects.", khmer: "ធ្នើរ", audio: "shelf.mp3" },
                    { word: "mirror 🪞", meaning: "A surface, typically of glass coated with a metallic amalgam, that reflects a clear image.", khmer: "កញ្ចក់", audio: "mirror.mp3" },
                    { word: "cupboard 🗄️", meaning: "A piece of furniture with a door, doors, or drawers and usually shelves, used for storage.", khmer: "ទូ", audio: "cupboard.mp3" }
                ],
                vocab7: [
                    { word: "heart ❤️", meaning: "A symbol of love or affection, shaped like a heart.", khmer: "បេះដូង", audio: "heart.mp3", emoji: "❤️" },
                    { word: "star ⭐", meaning: "A symbol with five or more points radiating from a center, representing a star.", khmer: "ផ្កាយ", audio: "star.mp3", emoji: "⭐" },
                    { word: "cross ➕", meaning: "A mark, object, or figure formed by two short intersecting lines or pieces, typically with one being horizontal and the other vertical.", khmer: "ឈើឆ្កាង", audio: "cross.mp3", emoji: "➕" },
                    { word: "arrow ➡️", meaning: "A mark or sign resembling an arrow, used to indicate direction or position.", khmer: "ព្រួញ", audio: "arrow.mp3", emoji: "➡️" },
                    { word: "circle 🔵", meaning: "A round plane figure whose boundary (the circumference) consists of points equidistant from a fixed center.", khmer: "រង្វង់", audio: "circle.mp3", emoji: "🔵" },
                    { word: "square 🟩", meaning: "A plane figure with four equal straight sides and four right angles.", khmer: "ការ៉េ", audio: "square.mp3", emoji: "🟩" },
                    { word: "plus ➕", meaning: "A mathematical symbol (+) indicating addition or a positive value.", khmer: "បូក", audio: "plus.mp3", emoji: "➕" },
                    { word: "minus ➖", meaning: "A mathematical symbol (-) indicating subtraction or a negative value.", khmer: "ដក", audio: "minus.mp3", emoji: "➖" },
                    { word: "question mark ❓", meaning: "A punctuation mark (?) indicating an interrogative clause or phrase.", khmer: "សញ្ញាសួរ", audio: "question_mark.mp3", emoji: "❓" },
                    { word: "exclamation mark ❗", meaning: "A punctuation mark (!) indicating an exclamation.", khmer: "សញ្ញាឧទាន", audio: "exclamation_mark.mp3", emoji: "❗" }
                ],
                 vocab: [
                 // Your existing 60 vocabulary words go here first
                 { word: "beautiful", meaning: "pleasing to the senses or mind aesthetically", khmer: "ស្អាត", audio: "beautiful.mp3" },
                 { word: "interesting", meaning: "something that catches your attention or curiosity", khmer: "គួរឱ្យចាប់អារម្មណ៍", audio: "interesting.mp3" },
                 { word: "difficult", meaning: "requiring much effort or skill to accomplish, deal with, or understand", khmer: "ពិបាក", audio: "difficult.mp3" },
                 { word: "quick", meaning: "moving or doing something with great speed", khmer: "លឿន", audio: "quick.mp3" },
                 { word: "happy", meaning: "feeling or showing pleasure or contentment", khmer: "សប្បាយចិត្ត", audio: "happy.mp3" },
                 { word: "amazing", meaning: "causing great wonder; astonishing", khmer: "អស្ចារ្យ", audio: "amazing.mp3" },
                 { word: "courageous", meaning: "not deterred by danger or pain; brave", khmer: "ក្លាហាន", audio: "courageous.mp3" },
                 { word: "diligent", meaning: "having or showing care and conscientiousness in one's work or duties", khmer: "ឧស្សាហ៍ព្យាយាម", audio: "diligent.mp3" },
                 { word: "generous", meaning: "showing a readiness to give more of something, especially money, than is necessary or expected", khmer: "ចិត្តទូលាយ", audio: "generous.mp3" },
                 { word: "patient", meaning: "able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious", khmer: "អត់ធ្មត់", audio: "patient.mp3" },
                 { word: "brilliant", meaning: "exceptionally clever or talented", khmer: "ឆ្លាត", audio: "brilliant.mp3" },
                 { word: "friendly", meaning: "acting in a kind and pleasant way", khmer: "រួសរាយ", audio: "friendly.mp3" },
                 { word: "honest", meaning: "truthful and sincere", khmer: "ស្មោះត្រង់", audio: "honest.mp3" },
                 { word: "lazy", meaning: "unwilling to work or use energy", khmer: "ខ្ជិល", audio: "lazy.mp3" },
                 { word: "polite", meaning: "having or showing good manners", khmer: "សុភាព", audio: "polite.mp3" },
                 { word: "strong", meaning: "having great physical power or strength", khmer: "ខ្លាំង", audio: "strong.mp3" },
                 { word: "weak", meaning: "lacking physical strength or energy", khmer: "ខ្សោយ", audio: "weak.mp3" },
                 { word: "wise", meaning: "having or showing experience, knowledge, and good judgment", khmer: "ប្រាជ្ញា", audio: "wise.mp3" },
                 { word: "young", meaning: "having lived or existed for only a short time", khmer: "ក្មេង", audio: "young.mp3" },
                 { word: "old", meaning: "having lived for a long time", khmer: "ចាស់", audio: "old.mp3" },
                 { word: "give up", meaning: "to stop trying or surrender", khmer: "បោះបង់ ", audio: "giveup.mp3" },
                 { word: "look after", meaning: "to take care of someone or something", khmer: "មើលថែ ", audio: "lookafter.mp3" },
                 { word: "pick up", meaning: "to collect or lift something", khmer: "យកឡើង ", audio: "pickup.mp3" },
                 { word: "turn off", meaning: "to stop the operation of something", khmer: "បិទ ", audio: "turnoff.mp3" },
                 { word: "turn on", meaning: "to start the operation of something", khmer: "បើក ", audio: "turnon.mp3" },
                 { word: "put on", meaning: "to wear or apply something", khmer: "ដាក់លើ ", audio: "puton.mp3" },
                 { word: "take off", meaning: "to remove something or to leave the ground (airplane)", khmer: "ដោះចេញ ", audio: "takeoff.mp3" },
                 { word: "run out", meaning: "to use up all of something", khmer: "អស់ ", audio: "runout.mp3" },
                 { word: "find out", meaning: "to discover or learn something", khmer: "រកឃើញ", audio: "findout.mp3" },
                 { word: "get along", meaning: "to have a good relationship", khmer: "ស្របគ្នា, ចុះសម្រុងគ្នា ", audio: "getalong.mp3" },
                 { word: "kind", meaning: "having or showing a friendly, generous, and considerate nature", khmer: "សប្បុរស", audio: "kind.mp3" },
                 { word: "brave", meaning: "ready to face and endure danger or pain; showing courage", khmer: "ក្លាហាន", audio: "brave.mp3" },
                 { word: "clever", meaning: "quick to understand, learn, and devise or apply ideas; intelligent", khmer: "ឆ្លាត", audio: "clever.mp3" },
                 { word: "honorable", meaning: "deserving of respect or high regard", khmer: "គួរឱ្យគោរព", audio: "honorable.mp3" },
                 { word: "cheerful", meaning: "noticeably happy and optimistic", khmer: "រីករាយ", audio: "cheerful.mp3" },
                 { word: "helpful", meaning: "giving or ready to give help", khmer: "ជួយ", audio: "helpful.mp3" },
                 { word: "calm", meaning: "not showing or feeling nervousness, anger, or other strong emotions", khmer: "ស្ងប់ស្ងាត់", audio: "calm.mp3" },
                 { word: "confident", meaning: "feeling or showing confidence in oneself; self-assured", khmer: "ទំនុកចិត្ត", audio: "confident.mp3" },
                 { word: "creative", meaning: "relating to or involving the use of the imagination or original ideas to create something", khmer: "ច្នៃប្រឌិត", audio: "creative.mp3" },
                 { word: "curious", meaning: "eager to know or learn something", khmer: "ចង់ដឹងចង់ឃើញ", audio: "curious.mp3" },
                 { word: "quickly", meaning: "at a fast speed; rapidly", khmer: "យ៉ាងលឿន", audio: "quickly.mp3" },
                 { word: "slowly", meaning: "at a low speed; not quickly", khmer: "យ៉ាងយឺត", audio: "slowly.mp3" },
                 { word: "happily", meaning: "in a happy way", khmer: "យ៉ាងសប្បាយចិត្ត", audio: "happily.mp3" },
                 { word: "sadly", meaning: "in a sad way", khmer: "យ៉ាងសោកសៅ", audio: "sadly.mp3" },
                 { word: "angrily", meaning: "in an angry way", khmer: "យ៉ាងខឹង", audio: "angrily.mp3" },
                 { word: "easily", meaning: "without difficulty or effort", khmer: "យ៉ាងងាយស្រួល", audio: "easily.mp3" },
                 { word: "carefully", meaning: "in a way that avoids harm or mistakes", khmer: "យ៉ាងប្រុងប្រយ័ត្ន", audio: "carefully.mp3" },
                 { word: "loudly", meaning: "in a way that produces much noise", khmer: "យ៉ាងសំឡេងខ្លាំង", audio: "loudly.mp3" },
                 { word: "silently", meaning: "without making any sound", khmer: "យ៉ាងស្ងាត់", audio: "silently.mp3" },
                 { word: "brightly", meaning: "in a way that gives off much light", khmer: "យ៉ាងភ្លឺ", audio: "brightly.mp3" },
                 { word: "softly", meaning: "in a gentle or quiet way", khmer: "យ៉ាងទន់ភ្លន់", audio: "softly.mp3" },
                 { word: "strongly", meaning: "in a way that shows strength or power", khmer: "យ៉ាងខ្លាំង", audio: "strongly.mp3" },
                 { word: "weakly", meaning: "in a way that lacks strength", khmer: "យ៉ាងខ្សោយ", audio: "weakly.mp3" },
                 { word: "politely", meaning: "in a respectful and considerate way", khmer: "យ៉ាងសុភាព", audio: "politely.mp3" },
                 { word: "rudely", meaning: "in a way that is not polite", khmer: "យ៉ាងអាក្រក់", audio: "rudely.mp3" },
                 { word: "bravely", meaning: "in a courageous way", khmer: "យ៉ាងក្លាហាន", audio: "bravely.mp3" },
                 { word: "kindly", meaning: "in a kind way", khmer: "យ៉ាងសប្បុរស", audio: "kindly.mp3" },
                 { word: "creatively", meaning: "in an imaginative or original way", khmer: "យ៉ាងច្នៃប្រឌិត", audio: "creatively.mp3" },
                 { word: "curiously", meaning: "in a way that shows eagerness to learn or know something", khmer: "យ៉ាងចង់ដឹងចង់ឃើញ", audio: "curiously.mp3" },
                 { word: "excited", meaning: "very enthusiastic and eager", khmer: "រំភើប", audio: "excited.mp3" },
                 { word: "nervous", meaning: "easily agitated or alarmed; tending to be anxious", khmer: "ភ័យ", audio: "nervous.mp3" },
                 { word: "proud", meaning: "feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions or those of someone with whom one is closely associated", khmer: "មានមោទនភាព", audio: "proud.mp3" },
                 { word: "shy", meaning: "nervous or timid in the company of other people", khmer: "ខ្មាសអៀន", audio: "shy.mp3" },
                 { word: "stressed", meaning: "suffering from mental or emotional strain or tension", khmer: "តានតឹង", audio: "stressed.mp3" },
                 { word: "frustrated", meaning: "feeling annoyed or less confident because you cannot achieve what you want", khmer: "ខកចិត្ត", audio: "frustrated.mp3" },
                 { word: "grateful", meaning: "feeling or showing an appreciation for something or someone", khmer: "ដឹងគុណ", audio: "grateful.mp3" },
                 { word: "lonely", meaning: "sad because one has no friends or company", khmer: "ឯកា", audio: "lonely.mp3" },
                 { word: "relieved", meaning: "no longer feeling distressed or anxious; reassured", khmer: "ធូរស្រាល", audio: "relieved.mp3" },
                 { word: "confused", meaning: "unable to think clearly; bewildered", khmer: "ច្របូកច្របល់", audio: "confused.mp3" },
         
                 // --- 50 NEW WORDS ADDED BELOW ---
                 { word: "appreciate", meaning: "to recognize and enjoy the good qualities of something or someone", khmer: "កោតសរសើរ", audio: "appreciate.mp3" },
                 { word: "achieve", meaning: "to successfully bring about or reach (a desired objective or result) by effort, skill, or courage", khmer: "សម្រេចបាន", audio: "achieve.mp3" },
                 { word: "believe", meaning: "to accept that something is true or exists", khmer: "ជឿ", audio: "believe.mp3" },
                 { word: "challenge", meaning: "a call to someone to participate in a competitive situation or fight to prove their ability", khmer: "ការប្រកួតប្រជែង", audio: "challenge.mp3" },
                 { word: "communicate", meaning: "to share or exchange information, news, or ideas", khmer: "ទំនាក់ទំនង", audio: "communicate.mp3" },
                 { word: "consider", meaning: "to think carefully about (something), typically before making a decision", khmer: "ពិចារណា", audio: "consider.mp3" },
                 { word: "develop", meaning: "to grow or cause to grow and become more mature, advanced, or elaborate", khmer: "អភិវឌ្ឍ", audio: "develop.mp3" },
                 { word: "encourage", meaning: "to give support, confidence, or hope to (someone)", khmer: "លើកទឹកចិត្ត", audio: "encourage.mp3" },
                 { word: "explore", meaning: "to travel in or through (an unfamiliar country or area) in order to learn about it", khmer: "រុករក", audio: "explore.mp3" },
                 { word: "imagine", meaning: "to form a mental image of (something not present or existing)", khmer: "ស្រមៃ", audio: "imagine.mp3" },
                 { word: "improve", meaning: "to make or become better", khmer: "កែលម្អ", audio: "improve.mp3" },
                 { word: "learn", meaning: "to gain or acquire knowledge of or skill in (something) by study, experience, or being taught", khmer: "រៀន", audio: "learn.mp3" },
                 { word: "manage", meaning: "to be in charge of (a company, establishment, or undertaking); administer; run", khmer: "គ្រប់គ្រង", audio: "manage.mp3" },
                 { word: "participate", meaning: "to take part in an activity", khmer: "ចូលរួម", audio: "participate.mp3" },
                 { word: "perform", meaning: "to carry out, accomplish, or fulfill (an action, task, or function)", khmer: "អនុវត្ត", audio: "perform.mp3" },
                 { word: "practice", meaning: "to perform (an activity) repeatedly or regularly in order to improve or maintain one's proficiency", khmer: "អនុវត្ត", audio: "practice.mp3" },
                 { word: "prepare", meaning: "to make (something) ready for use or consideration", khmer: "រៀបចំ", audio: "prepare.mp3" },
                 { word: "succeed", meaning: "to achieve the desired aim or result", khmer: "ជោគជ័យ", audio: "succeed.mp3" },
                 { word: "understand", meaning: "to perceive the intended meaning of (words, a language, or a speaker)", khmer: "យល់", audio: "understand.mp3" },
                 { word: "volunteer", meaning: "to freely offer to do something", khmer: "ស្ម័គ្រចិត្ត", audio: "volunteer.mp3" },
                 { word: "adjust", meaning: "to adapt or conform oneself to new conditions", khmer: "កែតម្រូវ", audio: "adjust.mp3" },
                 { word: "analyze", meaning: "to examine in detail the structure of something, typically for purposes of explanation and interpretation", khmer: "វិភាគ", audio: "analyze.mp3" },
                 { word: "collaborate", meaning: "to work jointly on an activity or project", khmer: "សហការ", audio: "collaborate.mp3" },
                 { word: "criticize", meaning: "to indicate the faults of (someone or something) in a disapproving way", khmer: "រិះគន់", audio: "criticize.mp3" },
                 { word: "demonstrate", meaning: "to clearly show the existence or truth of (something) by giving proof or evidence", khmer: "បង្ហាញ", audio: "demonstrate.mp3" },
                 { word: "emphasize", meaning: "to give special importance or prominence to (something) in speaking or writing", khmer: "សង្កត់ធ្ងន់", audio: "emphasize.mp3" },
                 { word: "evaluate", meaning: "to form an idea of the amount, number, or value of; assess", khmer: "វាយតម្លៃ", audio: "evaluate.mp3" },
                 { word: "facilitate", meaning: "to make (an action or process) easy or easier", khmer: "សម្រួល", audio: "facilitate.mp3" },
                 { word: "generate", meaning: "to produce or create (something)", khmer: "បង្កើត", audio: "generate.mp3" },
                 { word: "implement", meaning: "to put (a decision, plan, agreement, etc.) into effect", khmer: "អនុវត្ត", audio: "implement.mp3" },
                 { word: "justify", meaning: "to show or prove to be right or reasonable", khmer: "បង្ហាញភាពត្រឹមត្រូវ", audio: "justify.mp3" },
                 { word: "motivate", meaning: "to provide (someone) with a motive for doing something", khmer: "ជំរុញទឹកចិត្ត", audio: "motivate.mp3" },
                 { word: "negotiate", meaning: "to try to reach an agreement or compromise by discussion with others", khmer: "ចរចា", audio: "negotiate.mp3" },
                 { word: "organize", meaning: "to arrange into a structured whole; order", khmer: "រៀបចំ", audio: "organize.mp3" },
                 { word: "persuade", meaning: "to induce (someone) to do something through reasoning or argument", khmer: "បញ្ចុះបញ្ចូល", audio: "persuade.mp3" },
                 { word: "prioritize", meaning: "to designate or treat (something) as more important than other things", khmer: "ដាក់អាទិភាព", audio: "prioritize.mp3" },
                 { word: "recognize", meaning: "to identify (someone or something) from having encountered them before; know again", khmer: "ទទួលស្គាល់", audio: "recognize.mp3" },
                 { word: "reflect", meaning: "to think deeply or carefully about", khmer: "ឆ្លុះបញ្ចាំង", audio: "reflect.mp3" },
                 { word: "resolve", meaning: "to settle or find a solution to (a problem, dispute, or contentious matter)", khmer: "ដោះស្រាយ", audio: "resolve.mp3" },
                 { word: "strategize", meaning: "to plan the actions you will take to achieve a goal", khmer: "រៀបចំយុទ្ធសាស្ត្រ", audio: "strategize.mp3" },
                 { word: "suggest", meaning: "to put forward for consideration", khmer: "ណែនាំ", audio: "suggest.mp3" },
                 { word: "tolerate", meaning: "to allow the existence, occurrence, or practice of (something that one does not necessarily like or agree with) without interference", khmer: "អត់ធ្មត់", audio: "tolerate.mp3" },
                 { word: "transform", meaning: "to make a thorough or dramatic change in the form, appearance, or character of", khmer: "ផ្លាស់ប្តូរ", audio: "transform.mp3" },
                 { word: "utilize", meaning: "to make practical and effective use of", khmer: "ប្រើប្រាស់", audio: "utilize.mp3" },
                 { word: "validate", meaning: "to check or prove the validity or accuracy of (something)", khmer: "ផ្ទៀងផ្ទាត់", audio: "validate.mp3" },
                 { word: "verify", meaning: "to make sure or demonstrate that (something) is true, accurate, or justified", khmer: "ផ្ទៀងផ្ទាត់", audio: "verify.mp3" },
                 { word: "adapt", meaning: "to make (something) suitable for a new use or purpose; modify", khmer: "សម្របខ្លួន", audio: "adapt.mp3" },
                 { word: "assess", meaning: "to evaluate or estimate the nature, ability, or quality of", khmer: "វាយតម្លៃ", audio: "assess.mp3" },
                 { word: "comprehend", meaning: "to grasp mentally; understand", khmer: "យល់ដឹង", audio: "comprehend.mp3" },
                 { word: "distinguish", meaning: "to recognize or treat (someone or something) as different", khmer: "បែងចែក", audio: "distinguish.mp3" }
                 ,{ word: "beautiful (adj)", meaning: "pleasing to the senses or mind aesthetically", khmer: "ស្អាត", audio: "beautiful.mp3" },
                 { word: "interesting (adj)", meaning: "something that catches your attention or curiosity", khmer: "គួរឱ្យចាប់អារម្មណ៍", audio: "interesting.mp3" },
                 { word: "difficult (adj)", meaning: "requiring much effort or skill to accomplish, deal with, or understand", khmer: "ពិបាក", audio: "difficult.mp3" },
                 { word: "quick (adj)", meaning: "moving or doing something with great speed", khmer: "លឿន", audio: "quick.mp3" },
                 { word: "happy (adj)", meaning: "feeling or showing pleasure or contentment", khmer: "សប្បាយចិត្ត", audio: "happy.mp3" },
                 { word: "amazing (adj)", meaning: "causing great wonder; astonishing", khmer: "អស្ចារ្យ", audio: "amazing.mp3" },
                 { word: "courageous (adj)", meaning: "not deterred by danger or pain; brave", khmer: "ក្លាហាន", audio: "courageous.mp3" },
                 { word: "diligent (adj)", meaning: "having or showing care and conscientiousness in one's work or duties", khmer: "ឧស្សាហ៍ព្យាយាម", audio: "diligent.mp3" },
                 { word: "generous (adj)", meaning: "showing a readiness to give more of something, especially money, than is necessary or expected", khmer: "ចិត្តទូលាយ", audio: "generous.mp3" },
                 { word: "patient (adj)", meaning: "able to accept or tolerate delays, problems, or suffering without becoming annoyed or anxious", khmer: "អត់ធ្មត់", audio: "patient.mp3" },
                 { word: "brilliant (adj)", meaning: "exceptionally clever or talented", khmer: "ឆ្លាត", audio: "brilliant.mp3" },
                 { word: "friendly (adj)", meaning: "acting in a kind and pleasant way", khmer: "រួសរាយ", audio: "friendly.mp3" },
                 { word: "honest (adj)", meaning: "truthful and sincere", khmer: "ស្មោះត្រង់", audio: "honest.mp3" },
                 { word: "lazy (adj)", meaning: "unwilling to work or use energy", khmer: "ខ្ជិល", audio: "lazy.mp3" },
                 { word: "polite (adj)", meaning: "having or showing good manners", khmer: "សុភាព", audio: "polite.mp3" },
                 { word: "strong (adj)", meaning: "having great physical power or strength", khmer: "ខ្លាំង", audio: "strong.mp3" },
                 { word: "weak (adj)", meaning: "lacking physical strength or energy", khmer: "ខ្សោយ", audio: "weak.mp3" },
                 { word: "wise (adj)", meaning: "having or showing experience, knowledge, and good judgment", khmer: "ប្រាជ្ញា", audio: "wise.mp3" },
                 { word: "young (adj)", meaning: "having lived or existed for only a short time", khmer: "ក្មេង", audio: "young.mp3" },
                 { word: "old (adj)", meaning: "having lived for a long time", khmer: "ចាស់", audio: "old.mp3" },
                 { word: "give up (phrasal verb)", meaning: "to stop trying or surrender", khmer: "បោះបង់ ", audio: "giveup.mp3" },
                 { word: "look after (phrasal verb)", meaning: "to take care of someone or something", khmer: "មើលថែ ", audio: "lookafter.mp3" },
                 { word: "pick up (phrasal verb)", meaning: "to collect or lift something", khmer: "យកឡើង ", audio: "pickup.mp3" },
                 { word: "turn off (phrasal verb)", meaning: "to stop the operation of something", khmer: "បិទ ", audio: "turnoff.mp3" },
                 { word: "turn on (phrasal verb)", meaning: "to start the operation of something", khmer: "បើក ", audio: "turnon.mp3" },
                 { word: "put on (phrasal verb)", meaning: "to wear or apply something", khmer: "ដាក់លើ ", audio: "puton.mp3" },
                 { word: "take off (phrasal verb)", meaning: "to remove something or to leave the ground (airplane)", khmer: "ដោះចេញ ", audio: "takeoff.mp3" },
                 { word: "run out (phrasal verb)", meaning: "to use up all of something", khmer: "អស់ ", audio: "runout.mp3" },
                 { word: "find out (phrasal verb)", meaning: "to discover or learn something", khmer: "រកឃើញ", audio: "findout.mp3" },
                 { word: "get along (phrasal verb)", meaning: "to have a good relationship", khmer: "ស្របគ្នា, ចុះសម្រុងគ្នា ", audio: "getalong.mp3" },
                 { word: "kind (adj)", meaning: "having or showing a friendly, generous, and considerate nature", khmer: "សប្បុរស", audio: "kind.mp3" },
                 { word: "brave (adj)", meaning: "ready to face and endure danger or pain; showing courage", khmer: "ក្លាហាន", audio: "brave.mp3" },
                 { word: "clever (adj)", meaning: "quick to understand, learn, and devise or apply ideas; intelligent", khmer: "ឆ្លាត", audio: "clever.mp3" },
                 { word: "honorable (adj)", meaning: "deserving of respect or high regard", khmer: "គួរឱ្យគោរព", audio: "honorable.mp3" },
                 { word: "cheerful (adj)", meaning: "noticeably happy and optimistic", khmer: "រីករាយ", audio: "cheerful.mp3" },
                 { word: "helpful (adj)", meaning: "giving or ready to give help", khmer: "ជួយ", audio: "helpful.mp3" },
                 { word: "calm (adj)", meaning: "not showing or feeling nervousness, anger, or other strong emotions", khmer: "ស្ងប់ស្ងាត់", audio: "calm.mp3" },
                 { word: "confident (adj)", meaning: "feeling or showing confidence in oneself; self-assured", khmer: "ទំនុកចិត្ត", audio: "confident.mp3" },
                 { word: "creative (adj)", meaning: "relating to or involving the use of the imagination or original ideas to create something", khmer: "ច្នៃប្រឌិត", audio: "creative.mp3" },
                 { word: "curious (adj)", meaning: "eager to know or learn something", khmer: "ចង់ដឹងចង់ឃើញ", audio: "curious.mp3" },
                 { word: "quickly (adv)", meaning: "at a fast speed; rapidly", khmer: "យ៉ាងលឿន", audio: "quickly.mp3" },
                 { word: "slowly (adv)", meaning: "at a low speed; not quickly", khmer: "យ៉ាងយឺត", audio: "slowly.mp3" },
                 { word: "happily (adv)", meaning: "in a happy way", khmer: "យ៉ាងសប្បាយចិត្ត", audio: "happily.mp3" },
                 { word: "sadly (adv)", meaning: "in a sad way", khmer: "យ៉ាងសោកសៅ", audio: "sadly.mp3" },
                 { word: "angrily (adv)", meaning: "in an angry way", khmer: "យ៉ាងខឹង", audio: "angrily.mp3" },
                 { word: "easily (adv)", meaning: "without difficulty or effort", khmer: "យ៉ាងងាយស្រួល", audio: "easily.mp3" },
                 { word: "carefully (adv)", meaning: "in a way that avoids harm or mistakes", khmer: "យ៉ាងប្រុងប្រយ័ត្ន", audio: "carefully.mp3" },
                 { word: "loudly (adv)", meaning: "in a way that produces much noise", khmer: "យ៉ាងសំឡេងខ្លាំង", audio: "loudly.mp3" },
                 { word: "silently (adv)", meaning: "without making any sound", khmer: "យ៉ាងស្ងាត់", audio: "silently.mp3" },
                 { word: "brightly (adv)", meaning: "in a way that gives off much light", khmer: "យ៉ាងភ្លឺ", audio: "brightly.mp3" },
                 { word: "softly (adv)", meaning: "in a gentle or quiet way", khmer: "យ៉ាងទន់ភ្លន់", audio: "softly.mp3" },
                 { word: "strongly (adv)", meaning: "in a way that shows strength or power", khmer: "យ៉ាងខ្លាំង", audio: "strongly.mp3" },
                 { word: "weakly (adv)", meaning: "in a way that lacks strength", khmer: "យ៉ាងខ្សោយ", audio: "weakly.mp3" },
                 { word: "politely (adv)", meaning: "in a respectful and considerate way", khmer: "យ៉ាងសុភាព", audio: "politely.mp3" },
                 { word: "rudely (adv)", meaning: "in a way that is not polite", khmer: "យ៉ាងអាក្រក់", audio: "rudely.mp3" },
                 { word: "bravely (adv)", meaning: "in a courageous way", khmer: "យ៉ាងក្លាហាន", audio: "bravely.mp3" },
                 { word: "kindly (adv)", meaning: "in a kind way", khmer: "យ៉ាងសប្បុរស", audio: "kindly.mp3" },
                 { word: "creatively (adv)", meaning: "in an imaginative or original way", khmer: "យ៉ាងច្នៃប្រឌិត", audio: "creatively.mp3" },
                 { word: "curiously (adv)", meaning: "in a way that shows eagerness to learn or know something", khmer: "យ៉ាងចង់ដឹងចង់ឃើញ", audio: "curiously.mp3" },
                 { word: "excited (adj)", meaning: "very enthusiastic and eager", khmer: "រំភើប", audio: "excited.mp3" },
                 { word: "nervous (adj)", meaning: "easily agitated or alarmed; tending to be anxious", khmer: "ភ័យ", audio: "nervous.mp3" },
                 { word: "proud (adj)", meaning: "feeling deep pleasure or satisfaction as a result of one's own achievements, qualities, or possessions or those of someone with whom one is closely associated", khmer: "មានមោទនភាព", audio: "proud.mp3" },
                 { word: "shy (adj)", meaning: "nervous or timid in the company of other people", khmer: "ខ្មាសអៀន", audio: "shy.mp3" },
                 { word: "stressed (adj)", meaning: "suffering from mental or emotional strain or tension", khmer: "តានតឹង", audio: "stressed.mp3" },
                 { word: "frustrated (adj)", meaning: "feeling annoyed or less confident because you cannot achieve what you want", khmer: "ខកចិត្ត", audio: "frustrated.mp3" },
                 { word: "grateful (adj)", meaning: "feeling or showing an appreciation for something or someone", khmer: "ដឹងគុណ", audio: "grateful.mp3" },
                 { word: "lonely (adj)", meaning: "sad because one has no friends or company", khmer: "ឯកា", audio: "lonely.mp3" },
                 { word: "relieved (adj)", meaning: "no longer feeling distressed or anxious; reassured", khmer: "ធូរស្រាល", audio: "relieved.mp3" },
                 { word: "confused (adj)", meaning: "unable to think clearly; bewildered", khmer: "ច្របូកច្របល់", audio: "confused.mp3" },
                 { word: "appreciate (verb)", meaning: "to recognize and enjoy the good qualities of something or someone", khmer: "កោតសរសើរ", audio: "appreciate.mp3" },
                 { word: "achieve (verb)", meaning: "to successfully bring about or reach (a desired objective or result) by effort, skill, or courage", khmer: "សម្រេចបាន", audio: "achieve.mp3" },
                 { word: "believe (verb)", meaning: "to accept that something is true or exists", khmer: "ជឿ", audio: "believe.mp3" },
                 { word: "challenge (noun)", meaning: "a call to someone to participate in a competitive situation or fight to prove their ability", khmer: "ការប្រកួតប្រជែង", audio: "challenge.mp3" },
                 { word: "communicate (verb)", meaning: "to share or exchange information, news, or ideas", khmer: "ទំនាក់ទំនង", audio: "communicate.mp3" },
                 { word: "consider (verb)", meaning: "to think carefully about (something), typically before making a decision", khmer: "ពិចារណា", audio: "consider.mp3" },
                 { word: "develop (verb)", meaning: "to grow or cause to grow and become more mature, advanced, or elaborate", khmer: "អភិវឌ្ឍ", audio: "develop.mp3" },
                 { word: "encourage (verb)", meaning: "to give support, confidence, or hope to (someone)", khmer: "លើកទឹកចិត្ត", audio: "encourage.mp3" },
                 { word: "explore (verb)", meaning: "to travel in or through (an unfamiliar country or area) in order to learn about it", khmer: "រុករក", audio: "explore.mp3" },
                 { word: "imagine (verb)", meaning: "to form a mental image of (something not present or existing)", khmer: "ស្រមៃ", audio: "imagine.mp3" },
                 { word: "improve (verb)", meaning: "to make or become better", khmer: "កែលម្អ", audio: "improve.mp3" },
                 { word: "learn (verb)", meaning: "to gain or acquire knowledge of or skill in (something) by study, experience, or being taught", khmer: "រៀន", audio: "learn.mp3" },
                 { word: "manage (verb)", meaning: "to be in charge of (a company, establishment, or undertaking); administer; run", khmer: "គ្រប់គ្រង", audio: "manage.mp3" },
                 { word: "participate (verb)", meaning: "to take part in an activity", khmer: "ចូលរួម", audio: "participate.mp3" },
                 { word: "perform (verb)", meaning: "to carry out, accomplish, or fulfill (an action, task, or function)", khmer: "អនុវត្ត", audio: "perform.mp3" },
                 { word: "practice (verb)", meaning: "to perform (an activity) repeatedly or regularly in order to improve or maintain one's proficiency", khmer: "អនុវត្ត", audio: "practice.mp3" },
                 { word: "prepare (verb)", meaning: "to make (something) ready for use or consideration", khmer: "រៀបចំ", audio: "prepare.mp3" },
                 { word: "succeed (verb)", meaning: "to achieve the desired aim or result", khmer: "ជោគជ័យ", audio: "succeed.mp3" },
                 { word: "understand (verb)", meaning: "to perceive the intended meaning of (words, a language, or a speaker)", khmer: "យល់", audio: "understand.mp3" },
                 { word: "volunteer (verb)", meaning: "to freely offer to do something", khmer: "ស្ម័គ្រចិត្ត", audio: "volunteer.mp3" },
                 { word: "adjust (verb)", meaning: "to adapt or conform oneself to new conditions", khmer: "កែតម្រូវ", audio: "adjust.mp3" },
                 { word: "analyze (verb)", meaning: "to examine in detail the structure of something, typically for purposes of explanation and interpretation", khmer: "វិភាគ", audio: "analyze.mp3" },
                 { word: "collaborate (verb)", meaning: "to work jointly on an activity or project", khmer: "សហការ", audio: "collaborate.mp3" },
                 { word: "criticize (verb)", meaning: "to indicate the faults of (someone or something) in a disapproving way", khmer: "រិះគន់", audio: "criticize.mp3" },
                 { word: "demonstrate (verb)", meaning: "to clearly show the existence or truth of (something) by giving proof or evidence", khmer: "បង្ហាញ", audio: "demonstrate.mp3" },
                 { word: "emphasize (verb)", meaning: "to give special importance or prominence to (something) in speaking or writing", khmer: "សង្កត់ធ្ងន់", audio: "emphasize.mp3" },
                 { word: "evaluate (verb)", meaning: "to form an idea of the amount, number, or value of; assess", khmer: "វាយតម្លៃ", audio: "evaluate.mp3" },
                 { word: "facilitate (verb)", meaning: "to make (an action or process) easy or easier", khmer: "សម្រួល", audio: "facilitate.mp3" },
                 { word: "generate (verb)", meaning: "to produce or create (something)", khmer: "បង្កើត", audio: "generate.mp3" },
                 { word: "implement (verb)", meaning: "to put (a decision, plan, agreement, etc.) into effect", khmer: "អនុវត្ត", audio: "implement.mp3" },
                 { word: "justify (verb)", meaning: "to show or prove to be right or reasonable", khmer: "បង្ហាញភាពត្រឹមត្រូវ", audio: "justify.mp3" },
                 { word: "motivate (verb)", meaning: "to provide (someone) with a motive for doing something", khmer: "ជំរុញទឹកចិត្ត", audio: "motivate.mp3" },
                 { word: "negotiate (verb)", meaning: "to try to reach an agreement or compromise by discussion with others", khmer: "ចរចា", audio: "negotiate.mp3" },
                 { word: "organize (verb)", meaning: "to arrange into a structured whole; order", khmer: "រៀបចំ", audio: "organize.mp3" },
                 { word: "persuade (verb)", meaning: "to induce (someone) to do something through reasoning or argument", khmer: "បញ្ចុះបញ្ចូល", audio: "persuade.mp3" },
                 { word: "prioritize (verb)", meaning: "to designate or treat (something) as more important than other things", khmer: "ដាក់អាទិភាព", audio: "prioritize.mp3" },
                 { word: "recognize (verb)", meaning: "to identify (someone or something) from having encountered them before; know again", khmer: "ទទួលស្គាល់", audio: "recognize.mp3" },
                 { word: "reflect (verb)", meaning: "to think deeply or carefully about", khmer: "ឆ្លុះបញ្ចាំង", audio: "reflect.mp3" },
                 { word: "resolve (verb)", meaning: "to settle or find a solution to (a problem, dispute, or contentious matter)", khmer: "ដោះស្រាយ", audio: "resolve.mp3" },
                 { word: "strategize (verb)", meaning: "to plan the actions you will take to achieve a goal", khmer: "រៀបចំយុទ្ធសាស្ត្រ", audio: "strategize.mp3" },
                 { word: "suggest (verb)", meaning: "to put forward for consideration", khmer: "ណែនាំ", audio: "suggest.mp3" },
                 { word: "tolerate (verb)", meaning: "to allow the existence, occurrence, or practice of (something that one does not necessarily like or agree with) without interference", khmer: "អត់ធ្មត់", audio: "tolerate.mp3" },
                 { word: "transform (verb)", meaning: "to make a thorough or dramatic change in the form, appearance, or character of", khmer: "ផ្លាស់ប្តូរ", audio: "transform.mp3" },
                 { word: "utilize (verb)", meaning: "to make practical and effective use of", khmer: "ប្រើប្រាស់", audio: "utilize.mp3" },
                 { word: "validate (verb)", meaning: "to check or prove the validity or accuracy of (something)", khmer: "ផ្ទៀងផ្ទាត់", audio: "validate.mp3" },
                 { word: "verify (verb)", meaning: "to make sure or demonstrate that (something) is true, accurate, or justified", khmer: "ផ្ទៀងផ្ទាត់", audio: "verify.mp3" },
                 { word: "adapt (verb)", meaning: "to make (something) suitable for a new use or purpose; modify", khmer: "សម្របខ្លួន", audio: "adapt.mp3" },
                 { word: "assess (verb)", meaning: "to evaluate or estimate the nature, ability, or quality of", khmer: "វាយតម្លៃ", audio: "assess.mp3" },
                 { word: "comprehend (verb)", meaning: "to grasp mentally; understand", khmer: "យល់ដឹង", audio: "comprehend.mp3" },
                 { word: "distinguish (verb)", meaning: "to recognize or treat (someone or something) as different", khmer: "បែងចែក", audio: "distinguish.mp3" },
                 { word: "innovate (verb)", meaning: "to make changes in something established, especially by introducing new methods, ideas, or products", khmer: "ច្នៃប្រឌិត", audio: "innovate.mp3" },
                 { word: "embrace (verb)", meaning: "to accept or support (a cause, theory, or belief) willingly and enthusiastically", khmer: "ទទួលយក", audio: "embrace.mp3" },
                 { word: "overcome (verb)", meaning: "to succeed in dealing with (a problem or difficulty)", khmer: "ជំនះ", audio: "overcome.mp3" },
                 { word: "strive (verb)", meaning: "to make great efforts to achieve or obtain something", khmer: "ខិតខំ", audio: "strive.mp3" },
                 { word: "nurture (verb)", meaning: "to care for and encourage the growth or development of", khmer: "ចិញ្ចឹមបីបាច់", audio: "nurture.mp3" },
                 { word: "resilient (adj)", meaning: "able to withstand or recover quickly from difficult conditions", khmer: "ធន់", audio: "resilient.mp3" },
                 { word: "vibrant (adj)", meaning: "full of energy and enthusiasm", khmer: "រស់រវើក", audio: "vibrant.mp3" },
                 { word: "concise (adj)", meaning: "giving a lot of information clearly and in a few words; brief but comprehensive", khmer: "ខ្លីងាយយល់", audio: "concise.mp3" },
                 { word: "optimistic (adj)", meaning: "hopeful and confident about the future", khmer: "សុទិដ្ឋិនិយម", audio: "optimistic.mp3" },
                 { word: "skeptical (adj)", meaning: "not easily convinced; having doubts or reservations", khmer: "សង្ស័យ", audio: "skeptical.mp3" },
                 { word: "swiftly (adv)", meaning: "at high speed; quickly", khmer: "យ៉ាងលឿន", audio: "swiftly.mp3" },
                 { word: "eagerly (adv)", meaning: "with a lot of interest, desire, or anticipation", khmer: "យ៉ាងអន្ទះសា", audio: "eagerly.mp3" },
                 { word: "thoroughly (adv)", meaning: "in a thorough manner; carefully and completely", khmer: "យ៉ាងហ្មត់ចត់", audio: "thoroughly.mp3" },
                 { word: "consequently (adv)", meaning: "as a result; therefore", khmer: "ជាលទ្ធផល", audio: "consequently.mp3" },
                 { word: "nevertheless (adv)", meaning: "in spite of that; however", khmer: "ទោះជាយ៉ាងណាក៏ដោយ", audio: "nevertheless.mp3" },
                 { word: "phenomenon (noun)", meaning: "a fact or situation that is observed to exist or happen, especially one whose cause or explanation is in question", khmer: "បាតុភូត", audio: "phenomenon.mp3" },
                 { word: "integrity (noun)", meaning: "the quality of being honest and having strong moral principles; moral uprightness", khmer: "សុចរិតភាព", audio: "integrity.mp3" },
                 { word: "perspective (noun)", meaning: "a particular attitude toward or way of regarding something; a point of view", khmer: "ទស្សនៈ", audio: "perspective.mp3" },
                 { word: "break down (phrasal verb)", meaning: "to fail or stop functioning; to lose control of one's feelings", khmer: "ខូច, បែកបាក់អារម្មណ៍", audio: "breakdown.mp3" },
                 { word: "set up (phrasal verb)", meaning: "to establish (a business, an organization, or a system); to arrange for (something) to happen", khmer: "បង្កើត, រៀបចំ", audio: "setup.mp3" }
             ],
        
                // ... (Your vocab data here, if it's in the same gameData object) ...
            
            grammar: {
                    tenses: {
                        "Present Simple": {
                            description: "Used for habits, routines, facts, and general truths.",
                            structure: "Subject + Base Form of Verb (add -s/-es for he/she/it)",
                            examples: [
                                { type: "correct", sentence: "She reads a book every night.", explanation: "Habit: 'reads' (she + verb-s)" },
                                { type: "correct", sentence: "They work in a factory.", explanation: "General truth: 'work' (they + base verb)" },
                                { type: "incorrect", sentence: "He go to school.", correct: "He goes to school.", explanation: "Incorrect: 'go' should be 'goes' for 'he'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence uses the Present Simple correctly?",
                                    options: [
                                        { text: "They are playing soccer now.", correct: false },
                                        { text: "She usually goes to bed early.", correct: true, explanation: "Correct: 'usually goes' shows a habit." },
                                        { text: "I will visit my grandparents tomorrow.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "Every morning, the sun ______ (rise) in the east.",
                                    correctAnswer: "rises",
                                    explanation: "This is a general truth, so we use Present Simple. For 'the sun' (it), we add '-es' to 'rise'."
                                }
                            ]
                        },
                        "Present Continuous": {
                            description: "Used for actions happening now, temporary actions, or planned future actions.",
                            structure: "Subject + am/is/are + Verb-ing",
                            examples: [
                                { type: "correct", sentence: "I am studying English right now.", explanation: "Action happening now: 'am studying'." },
                                { type: "correct", sentence: "They are building a new hospital.", explanation: "Temporary action: 'are building'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which action is happening at the moment of speaking?",
                                    options: [
                                        { text: "She walks to work every day.", correct: false },
                                        { text: "He is watching TV.", correct: true, explanation: "Correct: 'is watching' indicates an action happening now." }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "Look! The cat ______ (sleep) on the sofa.",
                                    correctAnswer: "is sleeping",
                                    explanation: "This describes an action happening now, so we use Present Continuous: 'is sleeping'."
                                }
                            ]
                        },
                        "Present Perfect Simple": {
                            description: "Used for actions that started in the past and continue to the present, or past actions with present results.",
                            structure: "Subject + have/has + Past Participle",
                            examples: [
                                { type: "correct", sentence: "I have lived here for five years.", explanation: "Started in past, continues now: 'have lived'." },
                                { type: "correct", sentence: "She has finished her homework.", explanation: "Past action, present result: 'has finished'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Choose the correct Present Perfect sentence:",
                                    options: [
                                        { text: "They ate dinner last night.", correct: false },
                                        { text: "He has visited London many times.", correct: true, explanation: "Correct: 'has visited' shows repeated action up to now." },
                                        { text: "We are going to the cinema.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "She ______ (not see) him since last week.",
                                    correctAnswer: "has not seen",
                                    explanation: "Action started in the past and continues until now, so 'has not seen'."
                                }
                            ]
                        },
                        "Present Perfect Continuous": {
                            description: "Used for actions that started in the past and continue up to the present, emphasizing the duration.",
                            structure: "Subject + have/has + been + Verb-ing",
                            examples: [
                                { type: "correct", sentence: "They have been studying for three hours.", explanation: "Duration: 'have been studying'." },
                                { type: "correct", sentence: "She has been working here since 2020.", explanation: "Started in past, continues now with duration: 'has been working'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence emphasizes the duration of an ongoing action?",
                                    options: [
                                        { text: "I worked all day yesterday.", correct: false },
                                        { text: "We have been waiting for an hour.", correct: true, explanation: "Correct: 'have been waiting' highlights the duration." },
                                        { text: "He will arrive soon.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "It ______ (rain) all morning.",
                                    correctAnswer: "has been raining",
                                    explanation: "Emphasizes continuous action from the past until now: 'has been raining'."
                                }
                            ]
                        },
                        "Past Simple": {
                            description: "Used for completed actions in the past.",
                            structure: "Subject + Verb in Past Simple Form (e.g., -ed, irregular forms)",
                            examples: [
                                { type: "correct", sentence: "I visited my uncle yesterday.", explanation: "Completed action in the past: 'visited'." },
                                { type: "correct", sentence: "They went to Paris last year.", explanation: "Completed action: 'went' (irregular past of 'go')." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Identify the sentence with a completed past action:",
                                    options: [
                                        { text: "She is reading a book.", correct: false },
                                        { text: "He finished his project two days ago.", correct: true, explanation: "Correct: 'finished' indicates a completed action at a specific past time." },
                                        { text: "We will eat pizza tonight.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "Last night, I ______ (watch) a great movie.",
                                    correctAnswer: "watched",
                                    explanation: "A completed action in the past requires the Past Simple form of 'watch': 'watched'."
                                }
                            ]
                        },
                        "Past Continuous": {
                            description: "Used for actions ongoing in the past, often interrupted by another past action.",
                            structure: "Subject + was/were + Verb-ing",
                            examples: [
                                { type: "correct", sentence: "I was reading when she called.", explanation: "Ongoing action interrupted: 'was reading'." },
                                { type: "correct", sentence: "They were playing soccer all afternoon.", explanation: "Action ongoing over a period in the past: 'were playing'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence shows an action in progress at a specific time in the past?",
                                    options: [
                                        { text: "He will call you later.", correct: false },
                                        { text: "While I was cooking, the doorbell rang.", correct: true, explanation: "Correct: 'was cooking' shows an ongoing past action interrupted." },
                                        { text: "They leave for vacation tomorrow.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "At 8 PM yesterday, she ______ (study) for her exam.",
                                    correctAnswer: "was studying",
                                    explanation: "Describes an action in progress at a specific past time: 'was studying'."
                                }
                            ]
                        },
                        "Past Perfect Simple": {
                            description: "Used for an action that happened before another action in the past.",
                            structure: "Subject + had + Past Participle",
                            examples: [
                                { type: "correct", sentence: "I had finished my work before he arrived.", explanation: "First past action: 'had finished'." },
                                { type: "correct", sentence: "She had never seen a tiger until she went to India.", explanation: "Action before a specific point in the past: 'had never seen'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Choose the sentence where one past action happened before another.",
                                    options: [
                                        { text: "He is sleeping now.", correct: false },
                                        { text: "By the time I got to the station, the train had already left.", correct: true, explanation: "Correct: 'had already left' happened before 'got to the station'." },
                                        { text: "They will study later.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "After she ______ (eat) dinner, she watched TV.",
                                    correctAnswer: "had eaten",
                                    explanation: "The eating happened before watching TV, so 'had eaten'."
                                }
                            ]
                        },
                        "Past Perfect Continuous": {
                            description: "Used for an action that continued up to a certain point in the past, emphasizing duration.",
                            structure: "Subject + had + been + Verb-ing",
                            examples: [
                                { type: "correct", sentence: "He had been waiting for two hours before she arrived.", explanation: "Duration before a past point: 'had been waiting'." },
                                { type: "correct", sentence: "The road was wet because it had been raining.", explanation: "Action continuing up to a past result: 'had been raining'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence shows an action ongoing up to a specific past point?",
                                    options: [
                                        { text: "They are running.", correct: false },
                                        { text: "She was tired because she had been exercising all morning.", correct: true, explanation: "Correct: 'had been exercising' shows continuous action leading to a past state." },
                                        { text: "I have eaten breakfast.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "He felt ill because he ______ (not sleep) well for days.",
                                    correctAnswer: "had not been sleeping",
                                    explanation: "Emphasizes the duration of a past action leading to a past state: 'had not been sleeping'."
                                }
                            ]
                        },
                        "Future Simple (Will)": {
                            description: "Used for predictions, spontaneous decisions, promises, and offers.",
                            structure: "Subject + will + Base Form of Verb",
                            examples: [
                                { type: "correct", sentence: "I will help you with your homework.", explanation: "Offer: 'will help'." },
                                { type: "correct", sentence: "It will rain tomorrow.", explanation: "Prediction: 'will rain'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence expresses a spontaneous decision?",
                                    options: [
                                        { text: "I am going to buy a new car.", correct: false },
                                        { text: "Oh, I'll answer the phone!", correct: true, explanation: "Correct: 'I'll answer' is a spontaneous decision." },
                                        { text: "She has been working hard.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "Don't worry, I ______ (call) you when I arrive.",
                                    correctAnswer: "will call",
                                    explanation: "A promise for the future: 'will call'."
                                }
                            ]
                        },
                        "Future Continuous": {
                            description: "Used for actions that will be in progress at a specific time in the future.",
                            structure: "Subject + will + be + Verb-ing",
                            examples: [
                                { type: "correct", sentence: "At 10 AM tomorrow, I will be working.", explanation: "Action in progress at a future time: 'will be working'." },
                                { type: "correct", sentence: "They will be having dinner when you call.", explanation: "Ongoing future action: 'will be having'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence describes an action that will be ongoing in the future?",
                                    options: [
                                        { text: "I have studied for the test.", correct: false },
                                        { text: "This time next year, I will be living in New York.", correct: true, explanation: "Correct: 'will be living' shows an action ongoing at a future point." },
                                        { text: "He goes to the gym every day.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "Don't call me at 7 PM. I ______ (eat) dinner.",
                                    correctAnswer: "will be eating",
                                    explanation: "Describes an action that will be in progress at a specific future time: 'will be eating'."
                                }
                            ]
                        },
                        "Future Perfect Simple": {
                            description: "Used for an action that will be completed before a certain point in the future.",
                            structure: "Subject + will + have + Past Participle",
                            examples: [
                                { type: "correct", sentence: "By next year, I will have finished my degree.", explanation: "Completed before future point: 'will have finished'." },
                                { type: "correct", sentence: "She will have left by the time you arrive.", explanation: "Action completed before another future action: 'will have left'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence indicates an action completed before a future deadline?",
                                    options: [
                                        { text: "They are running.", correct: false },
                                        { text: "By Monday, he will have completed the report.", correct: true, explanation: "Correct: 'will have completed' shows completion before a future deadline." },
                                        { text: "We went to the beach.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "By the end of the month, I ______ (read) five books.",
                                    correctAnswer: "will have read",
                                    explanation: "Describes an action that will be completed by a future point: 'will have read'."
                                }
                            ]
                        },
                        "Future Perfect Continuous": {
                            description: "Used for an action that will have been ongoing up to a specific point in the future, emphasizing duration.",
                            structure: "Subject + will + have + been + Verb-ing",
                            examples: [
                                { type: "correct", sentence: "By next month, I will have been working here for 10 years.", explanation: "Duration up to a future point: 'will have been working'." },
                                { type: "correct", sentence: "They will have been traveling for 24 hours when they reach their destination.", explanation: "Continuous action leading up to a future event: 'will have been traveling'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence emphasizes the duration of an action up to a future point?",
                                    options: [
                                        { text: "He visited Rome.", correct: false },
                                        { text: "By 5 PM, she will have been studying for eight hours.", correct: true, explanation: "Correct: 'will have been studying' shows continuous action up to a future time." },
                                        { text: "I am going to eat.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "Next year, we ______ (live) in this city for 20 years.",
                                    correctAnswer: "will have been living",
                                    explanation: "Describes a continuous action up to a future point, emphasizing duration: 'will have been living'."
                                }
                            ]
                        },
                        "Be Going To": {
                            description: "Used to express future plans or intentions, or predictions based on present evidence.",
                            structure: "Subject + am/is/are + going to + Base Form of Verb",
                            examples: [
                                { type: "correct", sentence: "I am going to visit my grandparents this weekend.", explanation: "Future plan: 'am going to visit'." },
                                { type: "correct", sentence: "Look at those dark clouds! It is going to rain.", explanation: "Prediction based on evidence: 'is going to rain'." }
                            ],
                            quizQuestions: [
                                {
                                    type: "multiple-choice",
                                    question: "Which sentence expresses a future plan or prediction based on evidence?",
                                    options: [
                                        { text: "She is going to travel to Paris next month.", correct: true, explanation: "Correct: 'is going to travel' indicates a future plan." },
                                        { text: "He works at a bank.", correct: false },
                                        { text: "They are playing soccer now.", correct: false }
                                    ]
                                },
                                {
                                    type: "fill-in-blank",
                                    question: "We ______ (go) to the park tomorrow.",
                                    correctAnswer: "are going to go",
                                    explanation: "This describes a future plan, so we use 'are going to go'."
                                }
                            ]
                        }
                        // Note: You can add more grammar rules here (e.g., Modals, Conditionals, etc.)
                    },
                    // The structureQuiz is a general quiz, not specific to tenses.
                    // You might want to remove it or update your grammar quiz logic
                    // to choose questions from specific tenses if you prefer.
                    structureQuiz: [
                        {
                            question: "Choose the correct verb form: 'She usually ______ (study) at night.'",
                            type: "fill-in-blank",
                            correctAnswer: "studies",
                            explanation: "For habitual actions with 'she', we use Present Simple: 'studies'."
                        },
                        {
                            question: "Complete the sentence: 'We ______ (go) to the beach next weekend.' (Hint: future plan)",
                            type: "fill-in-blank",
                            correctAnswer: "are going"|| "are going to go", // Could also accept "are going to go" depending on flexibility
                            explanation: "For planned future actions, we often use Present Continuous: 'are going'."
                        },
                        {
                            question: "By the time I arrive, they ______ (finish) dinner. (Future Perfect)",
                            type: "fill-in-blank",
                            correctAnswer: "will have finished",
                            explanation: "The action of finishing dinner will be completed before the arrival in the future, thus Future Perfect."
                        },
                        {
                            question: "I ______ (learn) English for five years next month. (Future Perfect Continuous)",
                            type: "fill-in-blank",
                            correctAnswer: "will have been learning",
                            explanation: "Describes a continuous action up to a future point, emphasizing duration."
                        },
                        // --- NEW EXERCISES BELOW ---
                        {
                            question: "While I ______ (read) a book, the phone rang. (Past Continuous)",
                            type: "fill-in-blank",
                            correctAnswer: "was reading",
                            explanation: "An ongoing action in the past ('was reading') was interrupted by another past action ('the phone rang')."
                        },
                        {
                            question: "They ______ (live) in this city since 2010. (Present Perfect Simple)",
                            type: "fill-in-blank",
                            correctAnswer: "have lived",
                            explanation: "An action that started in the past and continues to the present uses Present Perfect Simple."
                        },
                        {
                            question: "Look! The baby ______ (sleep) peacefully. (Present Continuous)",
                            type: "fill-in-blank",
                            correctAnswer: "is sleeping",
                            explanation: "This describes an action happening at the moment of speaking."
                        },
                        {
                            question: "Which sentence correctly uses 'will' for a prediction?",
                            type: "multiple-choice",
                            question: "Which sentence correctly uses 'will' for a prediction?",
                            options: [
                                { text: "It is raining now.", correct: false },
                                { text: "I think it will be sunny tomorrow.", correct: true, explanation: "Correct: 'will be sunny' expresses a prediction about the future." },
                                { text: "She studied hard yesterday.", correct: false }
                            ]
                        },
                        {
                            question: "Before she went to bed, she ______ (turn off) all the lights. (Past Perfect Simple)",
                            type: "fill-in-blank",
                            correctAnswer: "had turned off",
                            explanation: "The action of turning off the lights happened before she went to bed, so Past Perfect Simple is used for the earlier action."
                        },
                        {
                            question: "We ______ (not finish) the report yet. (Present Perfect Simple Negative)",
                            type: "fill-in-blank",
                            correctAnswer: "have not finished",
                            explanation: "'Yet' is a common indicator for Present Perfect Simple for actions not completed up to the present."
                        },
                        {
                            question: "By this time tomorrow, I ______ (relax) on the beach. (Future Continuous)",
                            type: "fill-in-blank",
                            correctAnswer: "will be relaxing",
                            explanation: "Describes an action that will be in progress at a specific time in the future."
                        },
                        {
                            question: "Which sentence indicates a habitual action?",
                            type: "multiple-choice",
                            options: [
                                { text: "He is playing outside.", correct: false },
                                { text: "They usually have breakfast at 7 AM.", correct: true, explanation: "Correct: 'usually have' indicates a routine or habit." },
                                { text: "She will buy a new car.", correct: false }
                            ]
                        },
                        {
                            question: "It ______ (snow) heavily when we left the house. (Past Continuous)",
                            type: "fill-in-blank",
                            correctAnswer: "was snowing",
                            explanation: "Describes an action that was ongoing in the past at the time of another past action ('left the house')."
                        },
                        {
                            question: "They ______ (build) a new bridge for two years by the end of this year. (Future Perfect Continuous)",
                            type: "fill-in-blank",
                            correctAnswer: "will have been building",
                            explanation: "Emphasizes the duration of an action that will be continuous up to a specific future point."
                        },
                        {
                            question: "I'm sure she ______ (pass) the exam easily. (Future Simple - Prediction)",
                            type: "fill-in-blank",
                            correctAnswer: "will pass",
                            explanation: "A simple prediction about a future event uses 'will'."
                        },
                        {
                            question: "Which sentence uses 'be going to' for a definite future plan?",
                            type: "multiple-choice",
                            options: [
                                { text: "I think it will rain.", correct: false },
                                { text: "We are going to move to a new apartment next month.", correct: true, explanation: "Correct: 'are going to move' indicates a definite future plan." },
                                { text: "He plays tennis every Sunday.", correct: false }
                            ]
                        },
                        {
                            question: "He ______ (not eat) meat for a long time. (Present Perfect Simple Negative)",
                            type: "fill-in-blank",
                            correctAnswer: "has not eaten",
                            explanation: "Describes an action that started in the past and continues to the present (or its effect does)."
                        },
                        {
                            question: "The children ______ (play) in the garden all morning. (Present Perfect Continuous)",
                            type: "fill-in-blank",
                            correctAnswer: "have been playing",
                            explanation: "Emphasizes the duration of an activity that started in the past and is still ongoing or has just finished."
                        },
                        {
                            question: "When I woke up, the birds ______ (sing). (Past Continuous)",
                            type: "fill-in-blank",
                            correctAnswer: "were singing",
                            explanation: "Describes an ongoing action in the past that was happening when another event occurred."
                        },
                        // --- NEW EXERCISES WITH ADVANCED STRUCTURES ---

                        // No sooner had + Subject + Past Participle + than + Subject + Past Simple
                        {
                            question: "No sooner had I ______ (open) the door than the phone rang.",
                            type: "fill-in-blank",
                            correctAnswer: "opened",
                            explanation: "'No sooner had... than...' is used for an action that happened immediately after another. The first verb is in Past Perfect (had + Past Participle) and the second in Past Simple."
                        },
                        {
                            question: "Which sentence correctly uses 'No sooner...than'?",
                            type: "multiple-choice",
                            options: [
                                { text: "No sooner I opened the door than he left.", correct: false },
                                { text: "No sooner had I opened the door than he left.", correct: true, explanation: "Correct: Uses inversion with 'had' after 'No sooner' and 'than' before the second clause." },
                                { text: "No sooner had I open the door when he left.", correct: false }
                            ]
                        },

                        // Hardly had + Subject + Past Participle + when + Subject + Past Simple
                        {
                            question: "Hardly had she ______ (arrive) when the storm began.",
                            type: "fill-in-blank",
                            correctAnswer: "arrived",
                            explanation: "'Hardly had... when...' indicates one action immediately followed another. The first verb is in Past Perfect (had + Past Participle) and the second in Past Simple."
                        },
                        {
                            question: "Which of these is correct: 'Hardly had I finished my work ______ the lights went out.'",
                            type: "multiple-choice",
                            options: [
                                { text: "than", correct: false },
                                { text: "when", correct: true, explanation: "Correct: 'Hardly' is always followed by 'when' in this structure." },
                                { text: "then", correct: false }
                            ]
                        },

                    // Scarcely had + Subject + Past Participle + when/before + Subject + Past Simple
                    {
                        question: "Scarcely had they ______ (start) cooking when the guests arrived.",
                        type: "fill-in-blank",
                        correctAnswer: "started",
                        explanation: "'Scarcely had... when/before...' is similar to 'Hardly had... when...' to show immediate sequence of past actions."
                    },

                    // Subject + had just + Past Participle + when + Subject + Past Simple
                    {
                        question: "I had just ______ (sit down) when someone knocked on the door.",
                        type: "fill-in-blank",
                        correctAnswer: "sat down",
                        explanation: "This structure uses Past Perfect ('had just' + Past Participle) to show an action completed immediately before another Past Simple action."
                    },

                    // Inversion with 'Only when', 'Only after'
                    {
                        question: "Only when she ______ (realize) her mistake did she apologize.",
                        type: "fill-in-blank",
                        correctAnswer: "realized",
                        explanation: "With 'Only when/after' at the beginning of a sentence, we use inversion (auxiliary verb before subject) in the main clause. The action in the 'Only when' clause is in Past Simple."
                    },
                    {
                        question: "Only after he had finished his degree ______ (he find) a good job.",
                        type: "fill-in-blank",
                        correctAnswer: "did he find",
                        explanation: "This is an example of inversion after 'Only after'. The main clause requires 'did' + subject + base verb."
                    },

                    // So + Adjective/Adverb + auxiliary + S + that...
                    {
                        question: "So fast ______ (he run) that no one could catch him.",
                        type: "fill-in-blank",
                        correctAnswer: "did he run",
                        explanation: "When 'So' + adjective/adverb starts a sentence for emphasis, use inversion (auxiliary verb before subject)."
                    },

                    // If only (for wishes about the past)
                    {
                        question: "If only I ______ (know) about the party earlier!",
                        type: "fill-in-blank",
                        correctAnswer: "had known",
                        explanation: "'If only' used for wishes about the past requires the Past Perfect tense (had + Past Participle)."
                    },

                    // It's high time / It's about time
                    {
                        question: "It's high time you ______ (start) working harder.",
                        type: "fill-in-blank",
                        correctAnswer: "started",
                        explanation: "'It's high time' or 'It's about time' are followed by the Past Simple tense to express that something should be done now."
                    },

                    // Conditional Type 3 (Past Unreal)
                    {
                        question: "If I ______ (study) harder, I would have passed the exam.",
                        type: "fill-in-blank",
                        correctAnswer: "had studied",
                        explanation: "Conditional Type 3 expresses an unreal situation in the past. The 'if' clause uses Past Perfect (had + Past Participle)."
                    },
                 // Zero Conditional (Facts, General Truths)
                    {
                        question: "If you ______ (heat) ice, it melts.",
                        type: "fill-in-blank",
                        correctAnswer: "heat",
                        explanation: "Zero Conditional for general truths/facts: If + Present Simple, Present Simple."
                    },
                    {
                        question: "When water ______ (reach) 100 degrees Celsius, it boils.",
                        type: "fill-in-blank",
                        correctAnswer: "reaches",
                        explanation: "Zero Conditional can also use 'When'. For 'water' (it), 'reaches' is correct."
                    },

            // First Conditional (Real Future Possibility)
                        {
                            question: "If it ______ (rain) tomorrow, we will stay home.",
                            type: "fill-in-blank",
                            correctAnswer: "rains",
                            explanation: "First Conditional: If + Present Simple, will + Base Verb. 'Rains' for 'it'."
                        },
                        {
                            question: "Which option correctly completes the First Conditional sentence: 'If I study hard, I ______ (pass) the exam.'",
                            type: "multiple-choice",
                            options: [
                                { text: "pass", correct: false },
                                { text: "will pass", correct: true, explanation: "Correct: 'will pass' is the result clause for a real future possibility." },
                                { text: "passed", correct: false }
                            ]
                        },

                // Second Conditional (Unreal Present/Future)
                        {
                            question: "If I ______ (have) a million dollars, I would buy a big house.",
                            type: "fill-in-blank",
                            correctAnswer: "had",
                            explanation: "Second Conditional for unreal/hypothetical present/future situations: If + Past Simple, would + Base Verb."
                        },
                        {
                            question: "If she ______ (be) here, she would help us.",
                            type: "fill-in-blank",
                            correctAnswer: "were", // 'Were' is often used for all subjects in formal/unreal conditionals. 'was' is sometimes used informally with I/he/she/it.
                            explanation: "Second Conditional: use 'were' for all subjects in the 'if' clause, especially in formal contexts, for unreal situations."
                        },

                // Third Conditional (Unreal Past)
                        {
                            question: "If he ______ (not miss) the bus, he would have arrived on time.",
                            type: "fill-in-blank",
                            correctAnswer: "had not missed",
                            explanation: "Third Conditional for unreal situations in the past: If + Past Perfect, would have + Past Participle."
                        },
                        {
                            question: "Which option completes the Third Conditional: 'If they had known, they ______ (come) to the party.'",
                            type: "multiple-choice",
                            options: [
                                { text: "would come", correct: false },
                                { text: "would have come", correct: true, explanation: "Correct: 'would have come' is the result clause for an unreal past situation." },
                                { text: "will come", correct: false }
                            ]
                        },

                // Mixed Conditionals (Type 3 + Type 2)
                    {
                        question: "If she ______ (study) harder yesterday, she would be happier now.",
                        type: "fill-in-blank",
                        correctAnswer: "had studied",
                        explanation: "Mixed Conditional (Past condition, Present result): If + Past Perfect, would + Base Verb. 'Had studied' indicates the past condition."
                    },

                // Omitting 'if' / Inversion (First Conditional - 'Should')
                    {
                        question: "______ (you need) any help, please let me know. (Omitting 'if')",
                        type: "fill-in-blank",
                        correctAnswer: "Should you need",
                        explanation: "Inversion for First Conditional: 'If you need' can become 'Should you need' (more formal)."
                    },
                    {
                        question: "Which sentence uses inversion for a First Conditional?",
                        type: "multiple-choice",
                        options: [
                            { text: "If he arrives early, he will wait.", correct: false },
                            { text: "Should he arrive early, he will wait.", correct: true, explanation: "Correct: 'Should he arrive' is an inversion of 'If he arrives'." },
                            { text: "Had he arrived early, he would wait.", correct: false }
                        ]
                    },

                // Omitting 'if' / Inversion (Second Conditional - 'Were')
                    {
                        question: "______ (I be) you, I would take that opportunity. (Omitting 'if')",
                        type: "fill-in-blank",
                        correctAnswer: "Were I",
                        explanation: "Inversion for Second Conditional: 'If I were' can become 'Were I' (very common and formal)."
                    },
                    {
                        question: "Which is the correct inversion of 'If I were rich...'?",
                        type: "multiple-choice",
                        options: [
                            { text: "Was I rich...", correct: false },
                            { text: "Were I rich...", correct: true, explanation: "Correct: 'Were I' is the standard inversion for the Second Conditional with 'be'." },
                            { text: "Had I rich...", correct: false }
                        ]
                    },

                // Omitting 'if' / Inversion (Third Conditional - 'Had')
                    {
                        question: "______ (they known) about the problem, they would have acted differently. (Omitting 'if')",
                        type: "fill-in-blank",
                        correctAnswer: "Had they known",
                        explanation: "Inversion for Third Conditional: 'If they had known' can become 'Had they known'."
                    },
                    {
                        question: "Which is the correct inversion of 'If she had studied harder...'?",
                        type: "multiple-choice",
                        options: [
                            { text: "Did she study harder...", correct: false },
                            { text: "Had she studied harder...", correct: true, explanation: "Correct: 'Had she studied' is the standard inversion for the Third Conditional." },
                            { text: "Would she study harder...", correct: false }
                        ]
                    },

                // Other complex structures (for variety)
                        {
                            question: "Despite ______ (feel) tired, she continued working.",
                            type: "fill-in-blank",
                            correctAnswer: "feeling",
                            explanation: "'Despite' is followed by a gerund (-ing form) or a noun phrase."
                        },
                        {
                            question: "Not only ______ (he talented) but he is also very hardworking.",
                            type: "fill-in-blank",
                            correctAnswer: "is he talented",
                            explanation: "When 'Not only' starts a sentence, it requires inversion (auxiliary verb before subject) in the first clause."
                        },
            // 1. Present Simple Passive
                        {
                            question: "The letter ______ (write) by the secretary every day.",
                            type: "fill-in-blank",
                            correctAnswer: "is written",
                            explanation: "Present Simple Passive: object + am/is/are + Past Participle. 'The letter' is singular, so 'is written'."
                        },
                        {
                            question: "These cars ______ (manufacture) in Japan.",
                            type: "fill-in-blank",
                            correctAnswer: "are manufactured",
                            explanation: "Present Simple Passive: 'These cars' are plural, so 'are manufactured'."
                        },
                        {
                            question: "Which sentence is in the Present Simple Passive?",
                            type: "multiple-choice",
                            options: [
                                { text: "They build houses.", correct: false },
                                { text: "Houses are built by them.", correct: true, explanation: "Correct: Present Simple Passive structure (are + Past Participle)." },
                                { text: "Houses were built.", correct: false }
                            ]
                        },

            // 2. Present Continuous Passive
                        {
                            question: "The new bridge ______ (build) right now.",
                            type: "fill-in-blank",
                            correctAnswer: "is being built",
                            explanation: "Present Continuous Passive: object + am/is/are + being + Past Participle. 'The new bridge' is singular."
                        },
                        {
                            question: "Lessons ______ (teach) in the classroom at the moment.",
                            type: "fill-in-blank",
                            correctAnswer: "are being taught",
                            explanation: "Present Continuous Passive: 'Lessons' are plural, so 'are being taught'."
                        },

            // 3. Present Perfect Passive
                        {
                            question: "The project ______ (complete) just now.",
                            type: "fill-in-blank",
                            correctAnswer: "has been completed",
                            explanation: "Present Perfect Passive: object + have/has + been + Past Participle. 'The project' is singular."
                        },
                        {
                            question: "Many emails ______ (send) since morning.",
                            type: "fill-in-blank",
                            correctAnswer: "have been sent",
                            explanation: "Present Perfect Passive: 'Many emails' are plural, so 'have been sent'."
                        },

            // 4. Past Simple Passive
                        {
                            question: "The window ______ (break) last night.",
                            type: "fill-in-blank",
                            correctAnswer: "was broken",
                            explanation: "Past Simple Passive: object + was/were + Past Participle. 'The window' is singular."
                        },
                        {
                            question: "These questions ______ (answer) correctly by the students.",
                            type: "fill-in-blank",
                            correctAnswer: "were answered",
                            explanation: "Past Simple Passive: 'These questions' are plural, so 'were answered'."
                        },

            // 5. Past Continuous Passive
                        {
                            question: "The report ______ (write) when I called him.",
                            type: "fill-in-blank",
                            correctAnswer: "was being written",
                            explanation: "Past Continuous Passive: object + was/were + being + Past Participle. 'The report' is singular."
                        },
                        {
                            question: "They couldn't use the room because it ______ (paint).",
                            type: "fill-in-blank",
                            correctAnswer: "was being painted",
                            explanation: "Past Continuous Passive: The action was in progress in the past."
                        },

            // 6. Past Perfect Passive
                        {
                            question: "The car ______ (repair) before it was sold.",
                            type: "fill-in-blank",
                            correctAnswer: "had been repaired",
                            explanation: "Past Perfect Passive: object + had + been + Past Participle. Used for an action completed before another past action."
                        },
                        {
                            question: "By the time we arrived, all the food ______ (eat).",
                            type: "fill-in-blank",
                            correctAnswer: "had been eaten",
                            explanation: "Past Perfect Passive: The action of eating was completed before our arrival."
                        },

            // 7. Future Simple Passive (using 'will')
                            {
                                question: "The new rules ______ (announce) tomorrow.",
                                type: "fill-in-blank",
                                correctAnswer: "will be announced",
                                explanation: "Future Simple Passive (will): object + will + be + Past Participle."
                            },
                            {
                                question: "A solution ______ (find) soon.",
                                type: "fill-in-blank",
                                correctAnswer: "will be found",
                                explanation: "Future Simple Passive (will): 'A solution' is singular, 'will be found'."
                            },

            // 8. Future Simple Passive (using 'be going to')
                        {
                            question: "The house ______ (decorate) next month.",
                            type: "fill-in-blank",
                            correctAnswer: "is going to be decorated",
                            explanation: "Future Simple Passive (be going to): object + am/is/are + going to be + Past Participle."
                        },
                        {
                            question: "The exam questions ______ (change) next year.",
                            type: "fill-in-blank",
                            correctAnswer: "are going to be changed",
                            explanation: "Future Simple Passive (be going to): 'The exam questions' are plural."
                        },

            // 9. Future Perfect Passive
                        {
                            question: "By next year, the new library ______ (build).",
                            type: "fill-in-blank",
                            correctAnswer: "will have been built",
                            explanation: "Future Perfect Passive: object + will + have + been + Past Participle. Used for an action that will be completed before a future point."
                        },
                        {
                            question: "All the tickets ______ (sell) by the time the concert starts.",
                            type: "fill-in-blank",
                            correctAnswer: "will have been sold",
                            explanation: "Future Perfect Passive: The selling will be complete before the concert begins."
                        },

            // Less common passive tenses (Present Perfect Continuous Passive, Past Perfect Continuous Passive, Future Continuous Passive, Future Perfect Continuous Passive)
            // These are very rare and often avoided due to their awkwardness. I'll include one example for completeness for the first two.
                        {
                            question: "The problem ______ (discuss) for hours by the committee.",
                            type: "fill-in-blank",
                            correctAnswer: "has been being discussed",
                            explanation: "Present Perfect Continuous Passive (less common): object + have/has + been + being + Past Participle. Emphasizes duration leading to now."
                        },
                        {
                            question: "He was tired because his car ______ (fix) all morning.",
                            type: "fill-in-blank",
                            correctAnswer: "had been being fixed",
                            explanation: "Past Perfect Continuous Passive (less common): object + had + been + being + Past Participle. Emphasizes duration up to a past point."
                        }
                    
            // Future Continuous Passive ("will be being done") and Future Perfect Continuous Passive ("will have been being done") are almost never used.
            // Including them would likely cause confusion rather than clarity for learners.
        ]
    },   
                // ... (Your other game modes like shadowing, qna, if they exist in gameData) ...
                
            shadowing: {
                "Speak like a pro Sentences": [
                    { sentence: "The position property controls how and where an element is placed in the document layout.", khmer: "" },
                    { sentence: "static	Default; normal flow of the document (no positioning).", khmer: "" },
                    { sentence: "relative	Positioned relative to itself (can shift using top, left, etc.).", khmer: "" },
                    { sentence: "absolute	Positioned relative to the nearest positioned ancestor or html tag.", khmer: "" },
                    { sentence: "fixed	Stays fixed to the viewport (screen), doesn’t scroll.", khmer: "" },
                    { sentence: "sticky	Behaves like relative until it reaches a scroll point, then sticks", khmer: "" },
                    { sentence: "How are you today?", khmer: "អ្នកសុខសប្បាយរបស់ថ្ងៃនេះដែរឬទេ?" },
                    { sentence: "I love learning English. It's so rewarding!", khmer: "ខ្ញុំស្រលាញ់ការសិក្សាភាសាអង់គ្លេស។ វាពិតជាមានប្រយោជន៍ណាស់!" },
                    { sentence: "This is my favorite book. I highly recommend it.", khmer: "នេះជាសៀវភៅដែលខ្ញុំចូលចិត្តបំផុត។ ខ្ញុំសូមណែនាំវា។" },
                    { sentence: "Could you please tell me how to get to the nearest bus station?", khmer: "សូមប្រាប់ខ្ញុំពីរបៀបទៅចំណតឡានក្រុងដែលនៅជិតបំផុតបានទេ?" },
                    { sentence: "Practice makes perfect, so keep going!", khmer: "ការអនុវត្តធ្វើឱ្យល្អឥតខ្ចោះ ដូច្នេះបន្តទៅមុខទៀត!" },
                    { sentence: "How are you doing today?", khmer: "តើអ្នកសុខសប្បាយជាទេថ្ងៃនេះ?" },
                    { sentence: "Practicing helps me feel more confident.", khmer: "ការអនុវត្តជួយឱ្យខ្ញុំមានទំនុកចិត្តកាន់តែខ្លាំង។" },
                    { sentence: "I celebrate my small successes.", khmer: "ខ្ញុំអបអរសាទរជោគជ័យតូចៗរបស់ខ្ញុំ។" },
                    { sentence: "I learn from my experiences.", khmer: "ខ្ញុំរៀនពីបទពិសោធន៍របស់ខ្ញុំ។" },
                    { sentence: "I focus on my strengths.", khmer: "ខ្ញុំផ្តោតលើចំណុចខ្លាំងរបស់ខ្ញុំ។" },
                    { sentence: "I encourage myself to try new things.", khmer: "ខ្ញុំលើកទឹកចិត្តខ្លួនឯងឱ្យសាកល្បងអ្វីថ្មីៗ។" },
                    { sentence: "I’d like a cup of coffee, please.", khmer: "ខ្ញុំចង់បានកាហ្វេមួយពែង។" },
                    { sentence: "Can you help me with this problem?", khmer: "តើអ្នកអាចជួយខ្ញុំដោះស្រាយបញ្ហានេះបានទេ?" },
                    { sentence: "I believe in myself.", khmer: "ខ្ញុំជឿជាក់លើខ្លួនឯង។" },
                    { sentence: "I feel confident when I speak English.", khmer: "ខ្ញុំមានទំនុកចិត្តនៅពេលខ្ញុំនិយាយភាសាអង់គ្លេស។" },
                    { sentence: "I am becoming more confident over time.", khmer: "ខ្ញុំកាន់តែមានទំនុកចិត្តតាមពេលវេលា។" },
                    { sentence: "I am learning new things every day.", khmer: "ខ្ញុំកំពុងរៀនរឿងថ្មីៗជារៀងរាល់ថ្ងៃ។" },
                    { sentence: "I can achieve my goals.", khmer: "ខ្ញុំអាចសម្រេចគោលដៅរបស់ខ្ញុំ។" },
                    { sentence: "I feel confident sharing my ideas.", khmer: "ខ្ញុំមានទំនុកចិត្តក្នុងការចែករំលែកគំនិតរបស់ខ្ញុំ។" },
                    { sentence: "I am not afraid to make mistakes.", khmer: "ខ្ញុំមិនខ្លាចធ្វើខុសទេ។" },
                    { sentence: "I trust my own judgment.", khmer: "ខ្ញុំជឿជាក់លើការវិនិច្ឆ័យរបស់ខ្ញុំ។" },
                    { sentence: "I can handle new challenges.", khmer: "ខ្ញុំអាចដោះស្រាយបញ្ហាប្រឈមថ្មីៗបាន។" },
                    { sentence: "I am confident in my ability to learn.", khmer: "ខ្ញុំមានទំនុកចិត្តលើសមត្ថភាពរៀនរបស់ខ្ញុំ។" },
                    { sentence: "What's your favorite color?", khmer: "តើពណ៌អ្វីដែលអ្នកចូលចិត្តជាងគេ?" },
                    { sentence: "Where are you from?", khmer: "តើអ្នកមកពីណា?" },
                    { sentence: "What time is it?", khmer: "ម៉ោងប៉ុន្មានហើយ?" },
                    { sentence: "I'm looking forward to it.", khmer: "ខ្ញុំទន្ទឹងរង់ចាំវា។" },
                    { sentence: "That sounds great!", khmer: "ស្តាប់ទៅអស្ចារ្យណាស់!" },
                    { sentence: "Could you repeat that, please?", khmer: "សូមជួយនិយាយឡើងវិញបានទេ?" },
                    { sentence: "I don't understand.", khmer: "ខ្ញុំមិនយល់ទេ។" },
                    { sentence: "Excuse me, where is the restroom?", khmer: "សូមទោស បន្ទប់ទឹកនៅឯណា?" },
                    { sentence: "Have a good day!", khmer: "សូមឱ្យមានថ្ងៃល្អ!" },
                    { sentence: "Nice to meet you.", khmer: "រីករាយដែលបានជួបអ្នក។" },
                    { sentence: "How much does it cost?", khmer: "ថ្លៃប៉ុន្មានដែរ?" },
                    { sentence: "Can I help you?", khmer: "តើខ្ញុំអាចជួយអ្វីបានទេ?" },
                    { sentence: "I'm just Browse, thank you.", khmer: "ខ្ញុំគ្រាន់តែមើលទេ អរគុណ។" },
                    { sentence: "The weather is lovely today.", khmer: "អាកាសធាតុល្អណាស់ថ្ងៃនេះ។" },
                    { sentence: "I'm really enjoying this.", khmer: "ខ្ញុំពិតជារីករាយនឹងរឿងនេះណាស់។" },
                    { sentence: "What do you do for a living?", khmer: "តើអ្នកប្រកបរបរអ្វី?" },
                    { sentence: "It was a pleasure talking to you.", khmer: "រីករាយដែលបាននិយាយជាមួយអ្នក។" },
                    { sentence: "See you later!", khmer: "ជួបគ្នាពេលក្រោយ!" },
                    { sentence: "Don't worry about it.", khmer: "កុំបារម្ភអី។" },
                    { sentence: "It's a beautiful day for a walk.", khmer: "វាជាថ្ងៃល្អសម្រាប់ការដើរលេង។" },
                    { sentence: "I need to practice my English more.", khmer: "ខ្ញុំត្រូវអនុវត្តភាសាអង់គ្លេសរបស់ខ្ញុំបន្ថែមទៀត។" },
                    { sentence: "Learning a new language is challenging but fun.", khmer: "ការរៀនភាសាថ្មីគឺពិបាកតែសប្បាយ។" },
                    { sentence: "I'm trying my best.", khmer: "ខ្ញុំកំពុងព្យាយាមអស់ពីសមត្ថភាព។" },
                    { sentence: "Every day is a new opportunity to learn.", khmer: "រាល់ថ្ងៃគឺជាឱកាសថ្មីដើម្បីរៀន។" },
                    { sentence: "What are your plans for the weekend?", khmer: "តើអ្នកមានគម្រោងអ្វីសម្រាប់ចុងសប្តាហ៍នេះ?" },
                    { sentence: "I'm glad to hear that.", khmer: "ខ្ញុំរីករាយដែលបានលឺបែបនេះ។" },
                    { sentence: "Can you speak a bit slower, please?", khmer: "តើអ្នកអាចនិយាយយឺតបន្តិចបានទេ?" },
                    { sentence: "I'm working on my pronunciation.", khmer: "ខ្ញុំកំពុងកែលម្អការបញ្ចេញសំឡេងរបស់ខ្ញុំ។" },
                    { sentence: "Keep up the good work!", khmer: "បន្តការងារល្អរបស់អ្នក!" },
                    { sentence: "Thank you for your patience.", khmer: "អរគុណសម្រាប់ការអត់ធ្មត់របស់អ្នក។" },
                    { sentence: "I appreciate your help.", khmer: "ខ្ញុំសូមកោតសរសើរចំពោះជំនួយរបស់អ្នក។" },
                    { sentence: "What's on your mind?", khmer: "តើអ្នកកំពុងគិតអ្វី?" },
                    { sentence: "I'm feeling good today.", khmer: "ខ្ញុំមានអារម្មណ៍ល្អថ្ងៃនេះ។" },
                    { sentence: "It's important to be consistent.", khmer: "វាសំខាន់ណាស់ក្នុងការជាប់លាប់។" },
                    { sentence: "How was your day?", khmer: "ថ្ងៃរបស់អ្នកយ៉ាងម៉េចដែរ?" },
                    { sentence: "I'm making progress.", khmer: "ខ្ញុំកំពុងរីកចម្រើន។" },
                    { sentence: "Don't give up!", khmer: "កុំបោះបង់!" },
                    { sentence: "Let's try that again.", khmer: "តោះសាកម្ដងទៀត។" },
                    { sentence: "What's the weather like?", khmer: "អាកាសធាតុយ៉ាងម៉េចដែរ?" },
                    { sentence: "I'm getting better little by little.", khmer: "ខ្ញុំកាន់តែប្រសើរឡើងបន្តិចម្តងៗ។" },
                    { sentence: "It's all part of the learning process.", khmer: "វាជាផ្នែកមួយនៃដំណើរការរៀនសូត្រ។" },
                    { sentence: "I'm open to feedback.", khmer: "ខ្ញុំបើកចំហរទទួលមតិកែលម្អ។" },
                    { sentence: "I'm getting better little by little.", khmer: "ខ្ញុំកាន់តែប្រសើរឡើងបន្តិចម្តងៗ។" },
                    { sentence: "It's all part of the learning process.", khmer: "វាជាផ្នែកមួយនៃដំណើរការរៀនសូត្រ។" },
                    { sentence: "I'm open to feedback.", khmer: "ខ្ញុំបើកចំហរទទួលមតិកែលម្អ។" },
                        { sentence: "What time do you wake up? <br> ➡️ I wake up at 7 AM.", khmer: "អ្នកភ្ញាក់ពីគេងម៉ោងប៉ុន្មាន? <br> ➡️ ខ្ញុំភ្ញាក់ពីគេងម៉ោង ៧ ព្រឹក។" },
                    { sentence: "Do you eat breakfast? <br> ➡️ Yes, I eat breakfast every day.", khmer: "តើអ្នកញ៉ាំអាហារពេលព្រឹកទេ? <br> ➡️ បាទ/ចាស៎ ខ្ញុំញ៉ាំអាហារពេលព្រឹកជារៀងរាល់ថ្ងៃ។" },
                    { sentence: "How do you go to work? <br> ➡️ I take the bus to work.", khmer: "តើអ្នកទៅធ្វើការដោយរបៀបណា? <br> ➡️ ខ្ញុំជិះឡានក្រុងទៅធ្វើការ។" },
                    { sentence: "What do you do for lunch? <br> ➡️ I usually bring lunch from home.", khmer: "តើអ្នកធ្វើអ្វីសម្រាប់អាហារថ្ងៃត្រង់? <br> ➡️ ខ្ញុំ​ជាធម្មតា​យក​អាហារថ្ងៃត្រង់ពីផ្ទះ។" },
                    { sentence: "Isn't it a (iziniduh) lovely morning?", khmer: "ព្រឹកនេះមិនស្រស់ស្អាតទេឬ?" },
                    { sentence: "Isn't it a (iziniduh) beautiful day?", khmer: "ថ្ងៃនេះមិនមែនជាថ្ងៃដ៏ស្រស់ស្អាតទេឬ?" },
                    { sentence: "Wasn't it a (wuziniduh) heart attack?", khmer: "វាមិនមែនជាការគាំងបេះដូងទេឬ?" },
                    { sentence: "What does he (waduzee) want?", khmer: "តើគាត់ចង់បានអ្វី?" },
                    { sentence: "What does he (waduzee) know?", khmer: "តើគាត់ដឹងអ្វី?" },
                    { sentence: "What are (wader) their names?", khmer: "តើពួកគេមានឈ្មោះអ្វីខ្លះ?" },
                    { sentence: "I'm not feeling well.", khmer: "ខ្ញុំមិនស្រួលខ្លួនទេ។" },
                    { sentence: "I feel sick.", khmer: "ខ្ញុំមានអារម្មណ៍ឈឺ។" },
                    { sentence: "I don't feel good.", khmer: "ខ្ញុំមានអារម្មណ៍មិនល្អ។" },
                    { sentence: "I think I'm coming down with something.", khmer: "ខ្ញុំគិតថាខ្ញុំកំពុងឈឺអ្វីមួយហើយ។" },
                    { sentence: "I'm feeling under the weather, and I think that I will go home and rest.", khmer: "ខ្ញុំមិនស្រួលខ្លួន ហើយខ្ញុំគិតថាខ្ញុំនឹងទៅផ្ទះសម្រាក។" },
                    { sentence: "I'm not myself today.", khmer: "ថ្ងៃនេះខ្ញុំមានអារម្មមិនស្រួលខ្លួនទាំងផ្លូវកាយ​ទាំង​ផ្លូវចិត្ត។" },
                        { sentence: "As far as I'm concerned ", khmer: "តាមដែលខ្ញុំយល់ឃើញ។" },
                    { sentence: "In all honesty", khmer: "ដោយស្មោះត្រង់។" },
                    { sentence: "I'm not gonna lie", khmer: "ខ្ញុំមិននឹងបោកប្រាស់ទេ។" },
                    { sentence: "In my opinion ", khmer: "តាមគំនិតរបស់ខ្ញុំ។" },
                    { sentence: "If you ask me.", khmer: "ប្រសិនបើអ្នកសួរខ្ញុំ។" },
                    { sentence: "When you think about it.", khmer: "នៅពេលអ្នកគិតអំពីវា។" },
                        { sentence: "I can't follow you.", khmer: "ខ្ញុំស្លាប់អ្នកអត់ទាន់់ទេ៕" },
                    { sentence: "oh, I love that briefcase, but I can't afford it.", khmer: "ប្រសិនបើអ្នកសួរខ្ញុំ។" },
                    { sentence: "I can't afford it.", khmer: "ខ្ញុំមិនមានលទ្ធភាពទិញទេ។" },
                        { sentence: "I can't wait to have one. ", khmer: "ខ្ញុំពិតជាចង់..." },
                    { sentence: "I can't wait to see this", khmer: "ខ្ញុំពិតជាចង់ឃើញវា។" },
                    { sentence: "I can't wait to tell you.", khmer: "ខ្ញុំពិតជាចង់..." },
                    { sentence: "I can't wait to read it.", khmer: "ខ្ញុំពិតជាចង់..." },
                    { sentence: "I can't wait to get home.", khmer: "ខ្ញុំពិតជាចង់..." },
                    { sentence: "I can't wait to meet you.", khmer: "ខ្ញុំពិតជាចង់..​​" },
                        { sentence: "He's so annoying.", khmer: "គាត់និយាយច្រើន​គួរឲ្យរំខានច្រើន។" },
                    { sentence: "He always complains about everything Such a pain!", khmer: "" },
                    { sentence: "You are such a pain the ass.", khmer: "អ្នកគួរឲ្យធុញ គួរឲ្យរំខាន់" },
                    { sentence: "You are so irritating.", khmer: "អ្នកគួរឲ្យធុញ គួរឲ្យរំខាន់ណាស់(សំលេងធ្ងន់)" },
                   
                        
                                ],
                "Shadowing Speak ": [
                    
                    {
                       sentence: `I believe in myself.<br>
                       You know, I'm really starting to believe in myself more these days.  It's a good feeling! 
                        <br>
                        Actually, when I'm practicing, I can genuinely say, 'I feel confident when I speak English.'<br> It's getting easier. And it's not just about English; I feel like I'm learning new things every day, no matter what.<br> Honestly, I think I'm becoming more confident over time. It's a gradual process, but I can feel it. And with that confidence, I really do feel like I can achieve my goals, big or small. <br>I've noticed I feel confident sharing my ideas now, even if they're not perfect. That's a big step for me. And the best part? I am not afraid to make mistakes. I mean, mistakes are how you learn, right? 
                        <br>
                        I'm really confident in my ability to learn anything I put my mind to. And when new things come up, I think, 'Yeah, I can handle new challenges.' I'm getting better at just trusting my own judgment. That's important. 
                        <br>
                        What really helps is that practicing helps me feel more confident. Every little bit makes a difference. And I'm trying to remember to celebrate my small successes – like when I understand something new or speak clearly. 
                        <br>
                        I'm trying to really learn from my experiences, good or bad. And instead of dwelling on what's hard, I'm focusing on my strengths. That makes me feel powerful. Most importantly, I keep trying to encourage myself to try new things. You just never know what you can do until you try!",
                        
                        khmer: "អ្នកដឹងទេ ខ្ញុំពិតជាចាប់ផ្តើមជឿជាក់លើខ្លួនឯងកាន់តែខ្លាំងនាពេលបច្ចុប្បន្ននេះ។ វាជាអារម្មណ៍ល្អ! តាមពិត នៅពេលខ្ញុំអនុវត្ត ខ្ញុំអាចនិយាយដោយស្មោះត្រង់ថា 'ខ្ញុំមានទំនុកចិត្តនៅពេលខ្ញុំនិយាយភាសាអង់គ្លេស។' វាចាប់ផ្តើមងាយស្រួលជាងមុន។ ហើយវាមិនមែនត្រឹមតែភាសាអង់គ្លេសទេ ខ្ញុំមានអារម្មណ៍ថាខ្ញុំកំពុងរៀនរឿងថ្មីៗជារៀងរាល់ថ្ងៃ មិនថាមានរឿងអ្វីកើតឡើងនោះទេ។
                         និយាយដោយស្មោះត្រង់ ខ្ញុំគិតថាខ្ញុំកាន់តែមានទំនុកចិត្តតាមពេលវេលា។ វាជាដំណើរការបន្តិចម្តងៗ ប៉ុន្តែខ្ញុំអាចមានអារម្មណ៍បាន។ ហើយជាមួយនឹងទំនុកចិត្តនោះ ខ្ញុំពិតជាមានអារម្មណ៍ថាខ្ញុំអាចសម្រេចគោលដៅរបស់ខ្ញុំ មិនថាធំឬតូចនោះទេ។ ខ្ញុំបានកត់សម្គាល់ថាខ្ញុំមានទំនុកចិត្តក្នុងការចែករំលែកគំនិតរបស់ខ្ញុំឥឡូវនេះ ទោះបីជាវាមិនល្អឥតខ្ចោះក៏ដោយ។ នោះជាជំហានដ៏ធំមួយសម្រាប់ខ្ញុំ។ ហើយអ្វីដែលល្អបំផុតគឺ?
                          ខ្ញុំមិនខ្លាចធ្វើខុសទេ។ ខ្ញុំគិតថា ការធ្វើខុសគឺជាវិធីដែលអ្នករៀនមែនទេ? ខ្ញុំមានទំនុកចិត្តយ៉ាងខ្លាំងលើសមត្ថភាពរបស់ខ្ញុំក្នុងការរៀនអ្វីដែលខ្ញុំបានគិត។ ហើយនៅពេលមានរឿងថ្មីៗកើតឡើង ខ្ញុំគិតថា 'បាទ ខ្ញុំអាចដោះស្រាយបញ្ហាប្រឈមថ្មីៗបាន។' 
                          ខ្ញុំកាន់តែប្រសើរឡើងក្នុងការជឿជាក់លើការវិនិច្ឆ័យផ្ទាល់ខ្លួនរបស់ខ្ញុំ។ នោះជាការសំខាន់។ អ្វីដែលពិតជាជួយគឺការអនុវត្តន៍ជួយឱ្យខ្ញុំមានអារម្មណ៍ជឿជាក់កាន់តែខ្លាំង។ រាល់ការខិតខំតូចៗសុទ្ធតែមានន័យ។ ហើយខ្ញុំកំពុងព្យាយាមចងចាំដើម្បីអបអរសាទរភាពជោគជ័យតូចៗរបស់ខ្ញុំ – ដូចជាពេលខ្ញុំយល់អ្វីមួយថ្មី ឬនិយាយបានច្បាស់លាស់។ ខ្ញុំកំពុងព្យាយាមរៀនពីបទពិសោធន៍របស់ខ្ញុំ មិនថាល្អឬអាក្រក់នោះទេ។ ហើយជំនួសឱ្យការគិតច្រើនលើអ្វីដែលពិបាក ខ្ញុំកំពុងផ្តោតលើចំណុចខ្លាំងរបស់ខ្ញុំ។ នោះធ្វើឱ្យខ្ញុំមានអារម្មណ៍ថាមានថាមពល។ អ្វីដែលសំខាន់បំផុត ខ្ញុំបន្តព្យាយាមលើកទឹកចិត្តខ្លួនឯងឱ្យសាកល្បងអ្វីថ្មីៗ។ អ្នកមិនដែលដឹងថាអ្នកអាចធ្វើអ្វីបានទេ រហូតដល់អ្នកសាកល្បង!
                       
                        <audio controls>
                            <source src="audio/You know, .mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                            </audio>
                        `
                    },
                    {
                        sentence: `Why do you want to study English?<br>
                        Oh, that's a great question! Well, there are a few main reasons, actually.
                        <br>
                        First off, I really want to improve my career opportunities. English is such a global language, and knowing it well just opens up so many more doors, especially in many industries today. I feel like it's a really important skill for getting ahead.
                        <br>
                        Then there's the travel aspect. I absolutely love the idea of being able to travel more confidently. Imagine going to a new country and being able to communicate easily with people, ask for directions, order food – it would make the whole experience so much richer and less stressful. I really want to be able to explore the world and connect with people from different backgrounds.
                        <br>
                        And, of course, a big part of it is simply for personal growth. Learning English is a huge challenge, but it's also incredibly rewarding. It helps me to think in new ways, and it gives me access to so many more books, movies, and online resources that are in English. It just feels like it's expanding my world, you know?
                        <br>
                        So, yeah, for my career, for travel, and for just growing as a person, those are my main motivations for studying English.
                        <br>
                        <audio controls>
                            <source src="audio/Oh, that's.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                            </audio>
                        `
                       
                    },
                    {
                        sentence: `communication skills
                        You know, I think communication skills are incredibly important in life, really. It's not just about speaking a language, but how we speak and how we listen.
                        <br>
                        For me, good communication helps a lot with building stronger relationships. Whether it's with friends, family, or colleagues, when you can express yourself clearly and understand others, it just makes everything smoother. You feel more connected, right?
                        <br>
                        Also, I've noticed it's super helpful for solving problems. If you can talk openly about an issue and really listen to different ideas, it's much easier to find a solution that works for everyone. Bad communication can cause so many misunderstandings!
                        <br>
                        And in the workplace, it's absolutely essential. Being able to explain your ideas clearly or give good instructions is key. It helps avoid mistakes and makes teamwork much better. People can understand their roles and what needs to be done.
                        <br>
                        I think a big part of good communication is listening actively. It's not just waiting for your turn to speak, but really paying attention to what the other person is saying, and even their body language. That way, you truly understand their message.
                        <br>
                        So, for me, improving my communication skills, especially in English, is about being more effective in my daily life, having better relationships, and being more successful in whatever I do. It's a skill everyone needs, I believe.
                        <br>
                        <audio controls>
                            <source src="audio/You know,  (1).mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                            </audio>
                        `
                    },
                    {
                       sentence: `My Hobbies and Free Time <br>
                       <br>
                        Oh, that's a good question! Well, like most people, I have a few things I really enjoy doing when I'm not busy.
                        <br>
                        First off, I absolutely love reading. I try to make time for it every day, even if it's just for 20 minutes. I mostly enjoy fiction novels because they let me escape into different worlds and stories. It's my way of relaxing and learning new vocabulary at the same time, actually!
                        <br>
                        Besides reading, I've really gotten into taking walks, especially in the evenings. It's a simple activity, but it helps me clear my head and just enjoy being outside. Sometimes I listen to podcasts while I walk, which is a nice way to learn something new or just relax.
                        <br>
                        And, of course, because I'm studying English, a lot of my 'free time' is actually spent on that! I mean, I don't see it as work. I love watching English movies or TV shows without subtitles when I can. It's a fun way to practice my listening. I also enjoy listening to English music and trying to understand the lyrics.
                        <br>
                        So, yeah, reading, walking, and immersing myself in English media – those are pretty much my go-to hobbies and how I spend my free time. They help me relax and also keep me learning, which is perfect!
                        <audio controls>
                            <source src="audio/That's a r.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                            </audio>
                        
                        `
                    },
                         
                    {
                        sentence: `How can I improve my English speaking? <br>
                       That's a really important question for me right now, actually. I'm always thinking about how I can improve my English speaking. Since I'm at an A2 level and want to reach B1, I know I need to be strategic.
                        <br>
                        One of the main things I focus on is speaking as much as possible. Even if it's just to myself, or repeating sentences like we're doing now, any speaking practice helps. I try not to be afraid of making mistakes, because that's how you learn, right?
                        <br>
                        Another big one for me is listening a lot. I try to listen to English podcasts, watch TV shows, and even listen to music. The more I hear native speakers, the better I understand the rhythm and pronunciation. I try to mimic their pronunciation when I hear new words or phrases.
                        <br>
                        I also think learning new vocabulary in context is really useful. Instead of just memorizing single words, I try to learn phrases or sentences. That way, I know how to use them naturally in a conversation.
                        <br>
                        And, of course, shadowing is a technique I use a lot. It's really helping me to get the intonation and speed right. I try to record myself sometimes, too, which helps me hear what I need to improve.
                        <br>
                        Finally, I believe consistency is key. Even if it's just a little bit every day, showing up and practicing regularly makes a huge difference. I try to make English a part of my daily routine.
                        <br>
                        So, to sum it up, it's about speaking, listening, learning vocabulary in phrases, using techniques like shadowing, and being consistent every single day.
                        <audio controls>
                            <source src="audio/That's a r.mp3" type="audio/mpeg">
                            Your browser does not support the audio element.
                            </audio>
                        `
                    },

                
                ],
                "Idioms": [
                    { sentence: "It's raining cats and dogs.", khmer: "ភ្លៀងខ្លាំងណាស់។", explanation: "Meaning: Raining very heavily." },
                    { sentence: "Break a leg!", khmer: "សូមសំណាងល្អ!", explanation: "Meaning: Good luck! (Used especially in theater)." },
                        { sentence: "I wasn't born yesterday.", khmer: "ខ្ញុំមិនមែនក្មេងអាយុ៣ឆ្នាំទេ។", explanation: "" },
                    { sentence: "That's more like it.", khmer: "បែបហ្នឹងទើបប្រសើរ​", explanation: "Meaning: " },
                        { sentence: "I enjoy your company.", khmer: "ខ្ញុំចូលចិត្តការកំដររបស់អ្នក។", explanation: "Meaning: " },
                    { sentence: "For here or to go", khmer: "ញ្ញាំនៅទីនេះ​ ឬក៏វិចខ្ចប់។", explanation: "Meaning: " },
                          { sentence: "Don't take any chances.", khmer: "កុំប្រថុយគ្រោះថ្នាក់។", explanation: "Meaning: " },
                    { sentence: "For here or to go", khmer: "ញ្ញាំនៅទីនេះ​ ឬក៏វិចខ្ចប់។", explanation: "Meaning: " },
                ]
            },
            qna: [
                {
                    question: "What is the capital city of Cambodia?",
                    options: ["Siem Reap", "Battambang", "Phnom Penh", "Sihanoukville"],
                    correctAnswer: "Phnom Penh",
                    explanation: "Phnom Penh is the bustling capital and largest city of Cambodia."
                },
                {
                    question: "Which of these is a famous ancient temple complex in Cambodia?",
                    options: ["Borobudur", "Angkor Wat", "Shwedagon Pagoda", "Wat Arun"],
                    correctAnswer: "Angkor Wat",
                    explanation: "Angkor Wat is a UNESCO World Heritage site and Cambodia's most famous landmark."
                },
                {
                    question: "What is the main language spoken in Cambodia?",
                    options: ["Thai", "Vietnamese", "Khmer", "Lao"],
                    correctAnswer: "Khmer",
                    explanation: "Khmer is the official language of Cambodia and is spoken by the majority of the population."
                },
                    
                // Grammar - Multiple Choice
                {
                    question: "Choose the correct sentence: 'She _____ to the market yesterday.'",
                    options: ["go", "goes", "went", "gone"],
                    correctAnswer: "went",
                    explanation: "The past tense of 'go' is 'went'. The action happened yesterday."
                },
                {
                    question: "Identify the correct pronoun: 'The book belongs to _____.'",
                    options: ["I", "he", "she", "me"],
                    correctAnswer: "me",
                    explanation: "'Me' is the objective pronoun, used as the object of the preposition 'to'."
                },
                {
                    question: "Which word correctly completes the sentence? 'The cat is _____ the table.'",
                    options: ["in", "on", "at", "into"],
                    correctAnswer: "on",
                    explanation: "'On' is used to indicate that something is positioned on a surface."
                },
                {
                    question: "Select the grammatically correct question: '_____ is your favorite color?'",
                    options: ["What", "Which", "Who", "Where"],
                    correctAnswer: "What",
                    explanation: "'What' is used to ask for general information or a description of something."
                },
                {
                    question: "Choose the correct form: 'He has _____ a lot of progress.'",
                    options: ["make", "makes", "made", "making"],
                    correctAnswer: "made",
                    explanation: "After 'has' (present perfect tense), the past participle form of the verb is used. The past participle of 'make' is 'made'."
                },
        
                // Yes/No Questions
                {
                    question: "Is the Cambodian New Year celebrated in April?",
                    options: ["Yes", "No"],
                    correctAnswer: "Yes",
                    explanation: "Yes, the Cambodian New Year (Choul Chnam Thmey) typically falls in April."
                },
                {
                    question: "Is Cambodia a landlocked country?",
                    options: ["Yes", "No"],
                    correctAnswer: "No",
                    explanation: "No, Cambodia has a coastline along the Gulf of Thailand."
                },
                {
                    question: "Are there elephants used for tourism at Angkor Wat today?",
                    options: ["Yes", "No"],
                    correctAnswer: "No",
                    explanation: "No, elephant rides at Angkor Wat ended in late 2019 due to conservation efforts."
                },
                {
                    question: "Is the Mekong River an important river in Cambodia?",
                    options: ["Yes", "No"],
                    correctAnswer: "Yes",
                    explanation: "Yes, the Mekong River is crucial for Cambodia's agriculture, transportation, and culture."
                },
                {
                    question: "Are most Cambodian houses built from concrete?",
                    options: ["Yes", "No"],
                    correctAnswer: "No",
                    explanation: "While concrete is used, many traditional Cambodian houses, especially in rural areas, are still built on stilts from wood or bamboo."
                }
            ]
        };

        // Game State Management
        const gameState = {
          mode: null,
          currentIndex: 0,
          score: 0,
          currentPool: [],
          currentRule: null, // For grammar rules
          currentLevel: null, // For shadowing levels
          recognition: null, // Web Speech API SpeechRecognition object
          audioRecorder: null, // MediaRecorder object
          audioChunks: [],
          synth: window.speechSynthesis, // SpeechSynthesisUtterance for text-to-speech
          voices: [],
          timerInterval: null, // To hold the timer interval
          timeLeft: 15, // Initial time for vocabulary questions
          quizLength: 0 // New: To store the selected quiz length
      };


        // DOM Elements
        const elements = {
            modeSelection: document.getElementById("modeSelection"),
            gameArea: document.getElementById("gameArea"),
            homeLink: document.getElementById("homeLink"),
            aboutLink: document.getElementById("aboutLink"),
            contactLink: document.getElementById("contactLink"),
            resourcesLink: document.getElementById("resourcesLink")
        };
        // Core Game Functions (existing - no change needed here for this update)
        function goHome() {
          resetGameState();
          elements.modeSelection.style.display = "block";
          elements.gameArea.innerHTML = "";
          document.querySelector('h1').textContent = "Master English: Your Interactive Learning Journey";
      }
        // Event Listeners (using delegated events for mode selection for efficiency)
        elements.homeLink.addEventListener("click", goHome);
        elements.aboutLink.addEventListener("click", () => showInfoModal("About Us", "This is an interactive English learning game designed to help you improve your language skills through various challenges: Vocabulary, Grammar, Shadowing, and Q&A."));
        const profileImage = document.createElement("img");
        profileImage.src = "image/AnnaRa.png"; // Replace with the actual path to your image
        profileImage.alt = "Profile Image";
        profileImage.style.width = "50px"; // Adjust size as needed
        profileImage.style.height = "50px";
        profileImage.style.borderRadius = "50%"; // Make it circular
        profileImage.style.marginRight = "10px"; // Add some spacing
        profileImage.style.cursor = "pointer"; // Optional: Add pointer cursor for interactivity
        profileImage.addEventListener("click", () => {
            showInfoModal("Profile", "MY name is Sovanna Ra.");
        });
        elements.navContainer = document.querySelector(".nav-container");
        elements.navContainer.insertBefore(profileImage, elements.navContainer.firstChild);
        elements.contactLink.addEventListener("click", () => showInfoModal("Contact", "For support or feedback, please email us at: <a href='mailto:rasovanna785@gmail.com'>rasovanna785@gmail.com</a>"));
        elements.resourcesLink.addEventListener("click", () => showInfoModal("Resources", "Check out these helpful resources:<br><ul><li><a href='https://dictionary.cambridge.org/' target='_blank'>Cambridge Dictionary</a></li><li><a href='https://www.bbc.co.uk/learningenglish/' target='_blank'>BBC Learning English</a></li><li><a href='https://www.duolingo.com/' target='_blank'>Duolingo</a></li></ul>"));

        // Use event delegation for mode selection buttons
        elements.modeSelection.addEventListener('click', (event) => {
            if (event.target.classList.contains('sub-menu-btn')) {
                const mode = event.target.dataset.mode;
                if (mode) {
                    selectMode(mode);
                }
            }
        });

        // Utility Functions
        function showInfoModal(title, content) {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>${title}</h2>
                    <div class="question-box" style="text-align: left;">
                        <p>${content}</p>
                    </div>
                    <button class="btn btn-primary" onclick="goHome()">Back to Home</button>
                </div>
            `;
            elements.modeSelection.style.display = "none";
        }

        function shuffleArray(array) {
            return [...array].sort(() => 0.5 - Math.random());
        }

        function createButton(text, onClick, className = "btn btn-primary") {
            const button = document.createElement("button");
            button.className = className;
            button.textContent = text;
            button.addEventListener("click", onClick); // Use addEventListener
            return button;
        }

        function speakText(text, lang = 'en-US') {
            if (!gameState.synth) return;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang;
            const englishVoices = gameState.voices.filter(voice => voice.lang === 'en-US');
            if (englishVoices.length > 0) {
                utterance.voice = englishVoices[0]; // Pick the first English voice
            }
            gameState.synth.speak(utterance);
        }

        function playAudio(path) {
            const audio = new Audio(path);
            audio.play().catch(e => console.error("Error playing audio:", e));
        }

        // Core Game Functions
        function goHome() {
            resetGameState();
            elements.modeSelection.style.display = "block";
            elements.gameArea.innerHTML = "";
            document.querySelector('h1').textContent = "Master English: Your Interactive Learning Journey";
        }
//reset game state
          function resetGameState() {
            if (gameState.recognition && gameState.recognition.recognizing) {
                gameState.recognition.stop();
            }
            if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
                gameState.audioRecorder.stop();
            }
            if (gameState.synth && gameState.synth.speaking) {
                gameState.synth.cancel();
            }
            if (gameState.timerInterval) {
                clearInterval(gameState.timerInterval);
                gameState.timerInterval = null;
            }
            
            gameState.mode = null;
            gameState.currentIndex = 0;
            gameState.score = 0;
            gameState.currentPool = [];
            gameState.currentRule = null;
            gameState.currentLevel = null;
            gameState.recognition = null; // Resetting to null
            gameState.audioRecorder = null; // Resetting to null
            gameState.audioChunks = [];
            gameState.timeLeft = 15; // Reset time for next game
            gameState.quizLength = 0; // New: Reset quiz length
          }

          function selectMode(mode) {
            resetGameState();
            gameState.mode = mode;
            elements.modeSelection.style.display = "none";
            elements.gameArea.innerHTML = "";

            switch (mode) {
                case 'vocab':
                    document.querySelector('h1').textContent = "📚 Vocabulary Challenge";
                    showVocabStartScreen(); // This will now lead to quiz length selection
                    break;
                case 'grammar':
                    document.querySelector('h1').textContent = "📝 Grammar Guru";
                    showGrammarMainSelection();
                    break;
                case 'shadowing':
                    document.querySelector('h1').textContent = "🗣️ Shadowing Practice";
                    showShadowingLevelSelection();
                    break;
                case 'qna':
                    document.querySelector('h1').textContent = "❓ Q&A Game";
                    startQNAQuiz();
                    break;
            }
          }

           // --- Vocabulary Game Functions ---
         function showVocabStartScreen() {
        elements.gameArea.innerHTML = `
                       <div class="container">
                           <h2>Vocabulary Challenge</h2>
                           <p class="text-center">Learn new words and test your knowledge!</p>
                           <h3 class="text-center">Select Quiz Length</h3>
                           <div class="sub-menu-buttons">
                             <button class="btn btn-primary" style="background-color: #4CAF50; color: white;" onclick="startVocabQuiz(5)">🔹 5 Words (Beginner)</button>
                             <button class="btn btn-primary" style="background-color: #4CAF50; color: white;" onclick="startVocabQuiz(10)">🔹 10 Words (Beginner)</button>
                             <button class="btn btn-primary" style="background-color: #4CAF50; color: white;" onclick="startVocabQuiz(15)">🔹 15 Words (Beginner)</button>
                             <button class="btn btn-primary" style="background-color: #FF9800; color: white;" onclick="startVocabQuiz(30)">😊 30 Words (Intermediate)</button>
                             <button class="btn btn-primary" style="background-color: #FF9800; color: white;" onclick="startVocabQuiz(40)">🔷 40 Words (Intermediate)</button>
                             <button class="btn btn-primary" style="background-color: #2196F3; color: white;" onclick="startVocabQuiz1(${gameData.vocab1.length})">👉 Fruit  ${gameData.vocab1.length}  Words</button>
                             <button class="btn btn-primary" style="background-color: #2196F3; color: white;" onclick="startVocabQuiz2(${gameData.vocab2.length})">🟠Vegetable </button>
                             <button class="btn btn-primary" style="background-color: #2196F3; color: white;" onclick="startVocabQuiz3(${gameData.vocab3.length})">🟠Hair</button>
                             <button class="btn btn-primary" style="background-color: #2196F3; color: white;" onclick="startVocabQuiz4(${gameData.vocab4.length})">🟠Colors </button>
                             <button class="btn btn-primary" style="background-color: #2196F3; color: white;" onclick="startVocabQuiz5(${gameData.vocab5.length})">🟠Clothes</button>
                             <button class="btn btn-primary" style="background-color: #2196F3; color: white;" onclick="startVocabQuiz6(${gameData.vocab6.length})">🟠Furniture </button>
                             <button class="btn btn-primary" style="background-color: #2196F3; color: white;" onclick="startVocabQuiz7(${gameData.vocab7.length})">🟠Symbols </button>
                             

                             <button class="btn btn-primary" style="background-color: #F44336; color: white;" onclick="startVocabQuiz(${gameData.vocab.length})">🔺 All ${gameData.vocab.length} Words (Advanced)</button>
                           </div>
                           <div class="text-center" style="margin-top: 1rem;">
                               <button class="btn btn-secondary" style="background-color: #9E9E9E; color: white;" onclick="goHome()">Back to Main Menu</button>
                           </div>
                       </div>
                   `;
       }
 
    
function startVocabQuiz(length) {
          gameState.quizLength = length; // Store the selected quiz length
          // Shuffle the entire vocabulary data and then take only the required length
          gameState.currentPool = shuffleArray(gameData.vocab).slice(0, gameState.quizLength);
          
         
          gameState.currentIndex = 0;
          gameState.score = 0;
          displayVocabQuestion();
      }
      function startVocabQuiz1(length) {
          gameState.quizLength = length; // Store the selected quiz length
          // Shuffle the entire vocabulary data and then take only the required length
          
          gameState.currentPool = shuffleArray(gameData.vocab1).slice(0, gameState.quizLength);
         
         
          gameState.currentIndex = 0;
          gameState.score = 0;
          displayVocabQuestion();
      }
      function startVocabQuiz2(length) {
          gameState.quizLength = length; // Store the selected quiz length
          // Shuffle the entire vocabulary data and then take only the required length
          
          gameState.currentPool = shuffleArray(gameData.vocab2).slice(0, gameState.quizLength);
         
         
          gameState.currentIndex = 0;
          gameState.score = 0;
          displayVocabQuestion();
      }
      function startVocabQuiz3(length) {
          gameState.quizLength = length; // Store the selected quiz length
          // Shuffle the entire vocabulary data and then take only the required length
          
          gameState.currentPool = shuffleArray(gameData.vocab3).slice(0, gameState.quizLength);
          
         
          gameState.currentIndex = 0;
          gameState.score = 0;
          displayVocabQuestion();
      }
      function startVocabQuiz4(length) {
          gameState.quizLength = length; // Store the selected quiz length
          // Shuffle the entire vocabulary data and then take only the required length
          
          gameState.currentPool = shuffleArray(gameData.vocab4).slice(0, gameState.quizLength);
          
          gameState.currentIndex = 0;
          gameState.score = 0;
          displayVocabQuestion();
      }
      function startVocabQuiz5(length) {
          gameState.quizLength = length; // Store the selected quiz length
          // Shuffle the entire vocabulary data and then take only the required length
          
          gameState.currentPool = shuffleArray(gameData.vocab5).slice(0, gameState.quizLength);
         
         
          gameState.currentIndex = 0;
          gameState.score = 0;
          displayVocabQuestion();
      }
      function startVocabQuiz6(length) {
          gameState.quizLength = length; // Store the selected quiz length
          // Shuffle the entire vocabulary data and then take only the required length
          
          gameState.currentPool = shuffleArray(gameData.vocab6).slice(0, gameState.quizLength);
         
          gameState.currentIndex = 0;
          gameState.score = 0;
          displayVocabQuestion();
      }
function startVocabQuiz7(length) {
          gameState.quizLength = length; // Store the selected quiz length
          // Shuffle the entire vocabulary data and then take only the required length
          
          gameState.currentPool = shuffleArray(gameData.vocab7).slice(0, gameState.quizLength);
         
          gameState.currentIndex = 0;
          gameState.score = 0;
          displayVocabQuestion();
      }

      function displayVocabQuestion() {
          // New: Clear any existing timer when a new question is displayed
          if (gameState.timerInterval) {
              clearInterval(gameState.timerInterval);
          }

          if (gameState.currentIndex >= gameState.quizLength) { // Use quizLength here
              showVocabResults();
              return;
          }

          const currentWord = gameState.currentPool[gameState.currentIndex];
          const allMeanings = shuffleArray(gameData.vocab.map(item => item.khmer)); // Get all meanings
          const correctMeaning = currentWord.khmer;
          let options = [];

          // Ensure the correct meaning is always one of the options
          options.push(correctMeaning);
          // Add unique incorrect meanings until we have 4 options
          while (options.length < 4) {
              const randomMeaning = allMeanings[Math.floor(Math.random() * allMeanings.length)];
              if (!options.includes(randomMeaning)) {
                  options.push(randomMeaning);
              }
          }
          options = shuffleArray(options); // Shuffle options

          elements.gameArea.innerHTML = `
              <div class="container">
                  <h2>Vocabulary Quiz (Question ${gameState.currentIndex + 1}/${gameState.quizLength})</h2>
                  <p class="text-center">Time Left: <span id="timer" style="font-size: 1.5rem; font-weight: bold; color: var(--error-color);"> ${gameState.timeLeft} </span> seconds</p>
                  <div class="question-box">
                      <p>What does <strong>"${currentWord.word}"</strong> mean?</p>
                      <p class="info-text">Khmer: ${currentWord.meaning}</p>
                      ${currentWord.audio ? `<button class="btn btn-primary" id="playVocabAudio">🔊 Play Audio</button>` : ''}
                      <div id="vocabChoices" class="sub-menu-buttons" style="margin-top: 1rem;"></div>
                      <p id="vocabFeedback" class="feedback"></p>
                  </div>
                  <div class="text-center">
                      <button class="btn btn-primary" id="nextVocabBtn" style="display: none;">Next Question</button>
                      <button class="btn btn-secondary" onclick="goHome()">Quit Quiz</button>
                  </div>
              </div>
          `;

          if (currentWord.audio) {
              document.getElementById('playVocabAudio').addEventListener('click', () => playAudio(currentWord.audio));
          }

          const choicesDiv = document.getElementById("vocabChoices");
          options.forEach(option => {
              const btn = createButton(option, () => checkVocabAnswer(option, correctMeaning, btn, currentWord), "btn btn-block");
              choicesDiv.appendChild(btn);
          });

          // New: Start the timer for this question
          gameState.timeLeft = 15; // Reset time for each question
          document.getElementById("timer").textContent = gameState.timeLeft; // Display initial time
          startTimer(currentWord); // Start the timer, pass currentWord for timeout scenario
      }

      function startTimer(currentWord) {
          gameState.timerInterval = setInterval(() => {
              gameState.timeLeft--;
              const timerDisplay = document.getElementById("timer");
              if (timerDisplay) { // Check if element exists before updating
                  timerDisplay.textContent = gameState.timeLeft;
              }
              
              if (gameState.timeLeft <= 0) {
                  clearInterval(gameState.timerInterval);
                  gameState.timerInterval = null; // Clear interval reference

                  const feedbackElement = document.getElementById("vocabFeedback");
                  const nextButton = document.getElementById("nextVocabBtn");
                  const allButtons = document.querySelectorAll("#vocabChoices .btn");

                  feedbackElement.textContent = `⏰ Time's up! The correct answer was: "${currentWord.meaning}"`;
                  feedbackElement.className = "feedback feedback-error"; // Use error class for time up

                  allButtons.forEach(btn => btn.disabled = true); // Disable all buttons
                  nextButton.style.display = "inline-block"; // Show next button
                  nextButton.onclick = nextVocabQuestion; // Ensure next button proceeds
              }
          }, 1000);
      }

      function checkVocabAnswer(selectedMeaning, correctMeaning, clickedButton, currentWord) {
          // New: Stop the timer immediately when an answer is selected
          if (gameState.timerInterval) {
              clearInterval(gameState.timerInterval);
              gameState.timerInterval = null;
          }

          const feedbackElement = document.getElementById("vocabFeedback");
          const nextButton = document.getElementById("nextVocabBtn");
          const allButtons = document.querySelectorAll("#vocabChoices .btn");

          allButtons.forEach(btn => {
              btn.disabled = true; // Disable all buttons after selection
              if (btn.textContent === correctMeaning) {
                  btn.classList.add("btn-correct");
              } else {
                  btn.classList.add("btn-incorrect");
              }
          });

          if (selectedMeaning === correctMeaning) {
              feedbackElement.textContent = "Correct!";
              feedbackElement.className = "feedback feedback-success";
              gameState.score++;
          } else {
              feedbackElement.textContent = `Incorrect. The correct meaning was: "${correctMeaning}"`;
              feedbackElement.className = "feedback feedback-error";
          }
          nextButton.style.display = "inline-block";
          nextButton.onclick = nextVocabQuestion;
      }

      function nextVocabQuestion() {
          gameState.currentIndex++;
          displayVocabQuestion();
      }

      function showVocabResults() {
          // New: Clear any remaining timer when results are shown
          if (gameState.timerInterval) {
              clearInterval(gameState.timerInterval);
              gameState.timerInterval = null;
          }
          elements.gameArea.innerHTML = `
              <div class="container">
                  <h2>Quiz Complete!</h2>
                  <p class="feedback feedback-info">You scored ${gameState.score} out of ${gameState.quizLength}!</p>
                  <div class="text-center">
                      <button class="btn btn-primary" onclick="showVocabStartScreen()">Play Again</button>
                      <button class="btn btn-secondary" onclick="goHome()">Back to Main Menu</button>
                  </div>
              </div>
          `;
      }

        function checkVocabAnswer(selectedMeaning, correctMeaning, clickedButton, currentWord) {
            // New: Stop the timer immediately when an answer is selected
            if (gameState.timerInterval) {
                clearInterval(gameState.timerInterval);
                gameState.timerInterval = null;
            }

            const feedbackElement = document.getElementById("vocabFeedback");
            const nextButton = document.getElementById("nextVocabBtn");
            const allButtons = document.querySelectorAll("#vocabChoices .btn");

            allButtons.forEach(btn => {
                btn.disabled = true; // Disable all buttons after selection
                if (btn.textContent === correctMeaning) {
                    btn.classList.add("btn-correct");
                } else {
                    btn.classList.add("btn-incorrect");
                }
            });

            if (selectedMeaning === correctMeaning) {
                feedbackElement.textContent = "Correct!";
                feedbackElement.className = "feedback feedback-success";
                gameState.score++;
            } else {
                feedbackElement.textContent = `Incorrect. The correct meaning was: "${correctMeaning}"`;
                feedbackElement.className = "feedback feedback-error";
            }
            nextButton.style.display = "inline-block";
            nextButton.onclick = nextVocabQuestion;
        }

        function nextVocabQuestion() {
            gameState.currentIndex++;
            displayVocabQuestion();
        }

        function showVocabResults() {
            // New: Clear any remaining timer when results are shown
            if (gameState.timerInterval) {
                clearInterval(gameState.timerInterval);
                gameState.timerInterval = null;
            }
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Quiz Complete!</h2>
                    <p class="feedback feedback-info">You scored ${gameState.score} out of ${gameState.currentPool.length}!</p>
                    <div class="text-center">
                        <button class="btn btn-primary" onclick="startVocabQuiz()">Play Again</button>
                        <button class="btn btn-secondary" onclick="goHome()">Back to Main Menu</button>
                    </div>
                </div>
            `;
        }

        // --- Grammar Game Functions ---
        function showGrammarMainSelection() {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Grammar Guru</h2>
                    <p class="text-center">Choose a grammar focus:</p>
                    <div class="sub-menu-buttons">
                        <button class="btn btn-primary sub-menu-btn" id="tenseSelectionBtn">🕒 Tenses</button>
                        <button class="btn btn-primary sub-menu-btn" id="structureQuizBtn">🏗️ Structure Quiz</button>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-secondary" onclick="goHome()">Back to Main Menu</button>
                    </div>
                </div>
            `;
            document.getElementById('tenseSelectionBtn').addEventListener('click', showTenseSelection);
            document.getElementById('structureQuizBtn').addEventListener('click', startStructureQuiz);
        }

        function showTenseSelection() {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Grammar Guru - Select a Tense</h2>
                    <p class="text-center">Choose a tense to learn and practice:</p>
                    <div id="grammarRuleSelectionArea" class="sub-menu-buttons"></div>
                    <div class="text-center">
                        <button class="btn btn-secondary" onclick="showGrammarMainSelection()">Back to Grammar Menu</button>
                    </div>
                </div>
            `;

            const selectionArea = document.getElementById("grammarRuleSelectionArea");
            Object.keys(gameData.grammar.tenses).forEach(rule => {
                selectionArea.appendChild(createButton(rule, () => startGrammarQuizForRule(rule), "btn btn-primary sub-menu-btn"));
            });
        }

        function startGrammarQuizForRule(ruleName) {
            gameState.currentRule = ruleName;
            const ruleData = gameData.grammar.tenses[ruleName];
            gameState.currentPool = shuffleArray(ruleData.quizQuestions);
            gameState.currentIndex = 0;
            gameState.score = 0;
            displayGrammarLearningAndQuiz(ruleData);
        }

        function displayGrammarLearningAndQuiz(ruleData) {
            const currentQuiz = gameState.currentPool[gameState.currentIndex];

            let quizContent = '';
            if (currentQuiz) {
                if (currentQuiz.type === "multiple-choice") {
                    quizContent = `
                        <p>${currentQuiz.question}</p>
                        <div id="grammarChoices" class="sub-menu-buttons" style="margin-top: 1rem;"></div>
                    `;
                } else if (currentQuiz.type === "fill-in-blank") {
                    quizContent = `
                        <p>${currentQuiz.question.replace('______', '<input type="text" id="fillInBlankInput" class="fill-in-blank-input" placeholder="Your answer">')}</p>
                        <button class="btn btn-primary" id="checkFillInBlank">Check Answer</button>
                    `;
                }
            } else {
                showGrammarResults(); // Quiz finished
                return;
            }

            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>${gameState.currentRule}</h2>
                    <div class="question-box">
                        <h3>Description:</h3>
                        <p>${ruleData.description}</p>
                        <h3>Structure:</h3>
                        <p class="example-sentence">${ruleData.structure}</p>
                        <h3>Examples:</h3>
                        ${ruleData.examples.map(ex => `
                            <p class="example-sentence ${ex.type === 'correct' ? 'feedback-success' : 'feedback-error'}">
                                ${ex.sentence} ${ex.correct ? `(Correct: ${ex.correct})` : ''}
                                <br><small>${ex.explanation}</small>
                            </p>
                        `).join('')}
                        <hr style="margin: 1.5rem 0;">
                        <h3>Practice Quiz (Question ${gameState.currentIndex + 1}/${gameState.currentPool.length})</h3>
                        ${quizContent}
                        <p id="grammarFeedback" class="feedback"></p>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary" id="nextGrammarBtn" style="display: none;">Next Question</button>
                        <button class="btn btn-secondary" onclick="showTenseSelection()">Back to Tenses</button>
                    </div>
                </div>
            `;

            const nextButton = document.getElementById('nextGrammarBtn');
            nextButton.addEventListener('click', nextGrammarQuestion);

            if (currentQuiz) {
                if (currentQuiz.type === "multiple-choice") {
                    const choicesDiv = document.getElementById("grammarChoices");
                    const options = shuffleArray(currentQuiz.options);
                    options.forEach(option => {
                        const btn = createButton(option.text, () => checkGrammarMCQAnswer(option, currentQuiz, btn), "btn btn-block");
                        choicesDiv.appendChild(btn);
                    });
                } else if (currentQuiz.type === "fill-in-blank") {
                    document.getElementById('checkFillInBlank').addEventListener('click', () => {
                        const input = document.getElementById('fillInBlankInput');
                        checkGrammarFillInBlankAnswer(input.value, currentQuiz.correctAnswer, currentQuiz.explanation);
                    });
                }
            }
        }

        function checkGrammarMCQAnswer(selectedOption, currentQuiz, clickedButton) {
            const feedbackElement = document.getElementById("grammarFeedback");
            const nextButton = document.getElementById("nextGrammarBtn");
            const allButtons = document.querySelectorAll("#grammarChoices .btn");

            allButtons.forEach(btn => {
                btn.disabled = true;
                if (btn.textContent === currentQuiz.options.find(opt => opt.correct).text) {
                    btn.classList.add("btn-correct");
                } else {
                    btn.classList.add("btn-incorrect");
                }
            });

            if (selectedOption.correct) {
                feedbackElement.textContent = "Correct! " + (selectedOption.explanation || "");
                feedbackElement.className = "feedback feedback-success";
                gameState.score++;
            } else {
                const correctOption = currentQuiz.options.find(opt => opt.correct);
                feedbackElement.textContent = `Incorrect. The correct answer was: "${correctOption.text}". ${correctOption.explanation || ""}`;
                feedbackElement.className = "feedback feedback-error";
            }
            nextButton.style.display = "inline-block";
        }

        function checkGrammarFillInBlankAnswer(userAnswer, correctAnswer, explanation) {
            const feedbackElement = document.getElementById("grammarFeedback");
            const nextButton = document.getElementById("nextGrammarBtn");
            const inputField = document.getElementById('fillInBlankInput');
            const checkButton = document.getElementById('checkFillInBlank');

            inputField.disabled = true;
            checkButton.disabled = true;

            if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                feedbackElement.textContent = "Correct! " + (explanation || "");
                feedbackElement.className = "feedback feedback-success";
                gameState.score++;
                inputField.classList.add('btn-correct');
            } else {
                feedbackElement.textContent = `Incorrect. The correct answer was: "${correctAnswer}". ${explanation || ""}`;
                feedbackElement.className = "feedback feedback-error";
                inputField.classList.add('btn-incorrect');
            }
            nextButton.style.display = "inline-block";
        }


        function nextGrammarQuestion() {
            gameState.currentIndex++;
            displayGrammarLearningAndQuiz(gameData.grammar.tenses[gameState.currentRule]);
        }

        function showGrammarResults() {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Grammar Quiz Complete!</h2>
                    <p class="feedback feedback-info">You scored ${gameState.score} out of ${gameState.currentPool.length} for ${gameState.currentRule}!</p>
                    <div class="text-center">
                        <button class="btn btn-primary" onclick="startGrammarQuizForRule(gameState.currentRule)">Play Again</button>
                        <button class="btn btn-secondary" onclick="showTenseSelection()">Choose Another Tense</button>
                        <button class="btn btn-secondary" onclick="goHome()">Back to Main Menu</button>
                    </div>
                </div>
            `;
        }

        function startStructureQuiz() {
             gameState.currentPool = shuffleArray(gameData.grammar.structureQuiz);
             gameState.currentIndex = 0;
             gameState.score = 0;
             displayGrammarStructureQuestion();
        }

        function displayGrammarStructureQuestion() {
            if (gameState.currentIndex >= gameState.currentPool.length) {
                showGrammarStructureResults();
                return;
            }

            const currentQuestion = gameState.currentPool[gameState.currentIndex];
///Grammar Structure Quiz 
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Grammar Structure Quiz (Question ${gameState.currentIndex + 1}/${gameState.currentPool.length})</h2>
                    <div class="question-box">
                        <p>${currentQuestion.question.replace('______', '<input type="text" id="fillInBlankInput" class="fill-in-blank-input" placeholder="Your answer">')}</p>
                        <button class="btn btn-primary" id="checkFillInBlank">Check Answer</button>
                        <p id="grammarFeedback" class="feedback"></p>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary" id="nextGrammarBtn" style="display: none;">Next Question</button>
                        <button class="btn btn-secondary" onclick="showGrammarMainSelection()">Quit Quiz</button>
                    </div>
                </div>
            `;

            document.getElementById('checkFillInBlank').addEventListener('click', () => {
                const input = document.getElementById('fillInBlankInput');
                checkGrammarFillInBlankAnswer(input.value, currentQuestion.correctAnswer, currentQuestion.explanation);
            });

            document.getElementById('nextGrammarBtn').addEventListener('click', nextGrammarStructureQuestion);
        }

        function nextGrammarStructureQuestion() {
            gameState.currentIndex++;
            displayGrammarStructureQuestion();
        }

        function showGrammarStructureResults() {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Structure Quiz Complete!</h2>
                    <p class="feedback feedback-info">You scored ${gameState.score} out of ${gameState.currentPool.length} in the Structure Quiz!</p>
                    <div class="text-center">
                        <button class="btn btn-primary" onclick="startStructureQuiz()">Play Again</button>
                        <button class="btn btn-secondary" onclick="showGrammarMainSelection()">Back to Grammar Menu</button>
                        <button class="btn btn-secondary" onclick="goHome()">Back to Main Menu</button>
                    </div>
                </div>
            `;
        }


        // --- Shadowing Game Functions ---
        function showShadowingLevelSelection() {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Shadowing Practice</h2>
                    <p class="text-center">Choose a level of sentences to practice shadowing:</p>
                    <div id="shadowingLevelSelection" class="sub-menu-buttons"></div>
                    <div class="text-center">
                        <button class="btn btn-secondary" onclick="goHome()">Back to Main Menu</button>
                    </div>
                </div>
            `;

            const levelSelectionArea = document.getElementById("shadowingLevelSelection");
            Object.keys(gameData.shadowing).forEach(level => {
                levelSelectionArea.appendChild(createButton(level, () => startShadowingPractice(level), "btn btn-primary sub-menu-btn"));
            });
        }

        function startShadowingPractice(levelName) {
            gameState.currentLevel = levelName;
            gameState.currentPool = shuffleArray(gameData.shadowing[levelName]);
            gameState.currentIndex = 0;
            displayShadowingSentence();
        }

        function displayShadowingSentence() {
            if (gameState.currentIndex >= gameState.currentPool.length) {
                showShadowingResults();
                return;
            }

            const currentItem = gameState.currentPool[gameState.currentIndex];

            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Shadowing Practice - ${gameState.currentLevel} (Sentence ${gameState.currentIndex + 1}/${gameState.currentPool.length})</h2>
                    <div class="question-box">
                        <h3>Listen and Repeat:</h3>
                        <p class="example-sentence" style="font-size: 1.1rem; font-weight: 600;">"${currentItem.sentence}"</p>
                        <p class="info-text">Khmer: ${currentItem.khmer}</p>
                        ${currentItem.explanation ? `<p class="explanation-box">${currentItem.explanation}</p>` : ''}
                        <button class="btn btn-success" id="playSentence">🔊 Listen</button>
                        <button class="btn btn-primary" id="startRecording">🎤 Record Yourself</button>
                        <audio id="recordedAudio" controls style="display: none;"></audio>
                        <p id="speechFeedback" class="feedback"></p>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary" id="nextShadowingBtn">Next Sentence</button>
                        <button class="btn btn-secondary" onclick="showShadowingLevelSelection()">Quit Practice</button>
                    </div>
                </div>
            `;

            document.getElementById('playSentence').addEventListener('click', () => speakText(currentItem.sentence));
            document.getElementById('startRecording').addEventListener('click', startRecording);
            document.getElementById('nextShadowingBtn').addEventListener('click', nextShadowingSentence);

            // Initialize speech recognition if not already
            if (!gameState.recognition) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                if (SpeechRecognition) {
                    gameState.recognition = new SpeechRecognition();
                    gameState.recognition.interimResults = false;
                    gameState.recognition.lang = 'en-US';
                    gameState.recognition.continuous = false; // Only get one result per recording

                    gameState.recognition.onresult = (event) => {
                        const speechResult = event.results[0][0].transcript;
                        const feedbackElem = document.getElementById('speechFeedback');
                        const originalText = currentItem.sentence;

                        // Basic comparison (can be improved with fuzzy matching libraries)
                        if (speechResult.toLowerCase().includes(originalText.toLowerCase().slice(0, originalText.length * 0.7))) { // Simple check for partial match
                             feedbackElem.textContent = `You said: "${speechResult}". Good job, very close!`;
                             feedbackElem.className = 'feedback feedback-success';
                        } else {
                            feedbackElem.textContent = `You said: "${speechResult}". Try again! (Expected: "${originalText}")`;
                            feedbackElem.className = 'feedback feedback-error';
                        }
                    };

                    gameState.recognition.onerror = (event) => {
                        console.error('Speech recognition error:', event.error);
                        document.getElementById('speechFeedback').textContent = `Speech recognition error: ${event.error}. Please try again.`;
                        document.getElementById('speechFeedback').className = 'feedback feedback-error';
                    };

                    gameState.recognition.onend = () => {
                        const recordBtn = document.getElementById('startRecording');
                        if (recordBtn) recordBtn.textContent = '🎤 Record Yourself';
                        console.log('Speech recognition ended.');
                    };
                } else {
                    document.getElementById('startRecording').disabled = true;
                    document.getElementById('startRecording').textContent = 'Recording not supported';
                    console.warn("Speech recognition not supported in this browser");
                }
            }

            // Initialize MediaRecorder if not already
            if (!gameState.audioRecorder) {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then(stream => {
                        gameState.audioRecorder = new MediaRecorder(stream);
                        gameState.audioRecorder.ondataavailable = (event) => {
                            gameState.audioChunks.push(event.data);
                        };
                        gameState.audioRecorder.onstop = () => {
                            const audioBlob = new Blob(gameState.audioChunks, { type: 'audio/wav' });
                            const audioUrl = URL.createObjectURL(audioBlob);
                            const recordedAudioElement = document.getElementById('recordedAudio');
                            if (recordedAudioElement) {
                                recordedAudioElement.src = audioUrl;
                                recordedAudioElement.style.display = 'block';
                            }
                            gameState.audioChunks = []; // Clear for next recording
                        };
                    })
                    .catch(err => {
                        console.error('Error accessing microphone:', err);
                        const recordBtn = document.getElementById('startRecording');
                        if (recordBtn) {
                            recordBtn.disabled = true;
                            recordBtn.textContent = 'Mic access denied';
                        }
                    });
            }
        }

        function startRecording() {
            const recordBtn = document.getElementById('startRecording');
            const feedbackElem = document.getElementById('speechFeedback');
            const recordedAudioElement = document.getElementById('recordedAudio');

            if (recordedAudioElement) recordedAudioElement.style.display = 'none';
            feedbackElem.textContent = '';
            feedbackElem.className = 'feedback';

            if (gameState.recognition) {
                try {
                    gameState.recognition.start();
                    recordBtn.textContent = '🔴 Recording... Speak now!';
                    feedbackElem.textContent = 'Listening...';
                    feedbackElem.className = 'feedback feedback-info';
                } catch (e) {
                    console.error("Speech recognition start error:", e);
                    feedbackElem.textContent = "Could not start recording. Please try again or check microphone permissions.";
                    feedbackElem.className = 'feedback feedback-error';
                }
            }
            if (gameState.audioRecorder) {
                gameState.audioChunks = [];
                gameState.audioRecorder.start();
                setTimeout(() => { // Stop recording after a few seconds
                    if (gameState.audioRecorder && gameState.audioRecorder.state === 'recording') {
                        gameState.audioRecorder.stop();
                        recordBtn.textContent = '🎤 Record Yourself';
                    }
                }, 5000); // Record for 5 seconds
            }
        }

        function nextShadowingSentence() {
            gameState.currentIndex++;
            displayShadowingSentence();
        }

        function showShadowingResults() {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Shadowing Practice Complete!</h2>
                    <p class="feedback feedback-info">You've completed all sentences in this level.</p>
                    <div class="text-center">
                        <button class="btn btn-primary" onclick="startShadowingPractice(gameState.currentLevel)">Practice Again</button>
                        <button class="btn btn-secondary" onclick="showShadowingLevelSelection()">Choose Another Level</button>
                        <button class="btn btn-secondary" onclick="goHome()">Back to Main Menu</button>
                    </div>
                </div>
            `;
        }

        // --- Q&A Game Functions ---
        function startQNAQuiz() {
            gameState.currentPool = shuffleArray(gameData.qna);
            gameState.currentIndex = 0;
            gameState.score = 0;
            displayQNAQuestion();
        }

        function displayQNAQuestion() {
            if (gameState.currentIndex >= gameState.currentPool.length) {
                showQNAResults();
                return;
            }

            const currentQuestion = gameState.currentPool[gameState.currentIndex];
            const options = shuffleArray(currentQuestion.options);

            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Q&A Game (Question ${gameState.currentIndex + 1}/${gameState.currentPool.length})</h2>
                    <div class="question-box">
                        <p><strong>${currentQuestion.question}</strong></p>
                        <div id="qnaChoices" class="sub-menu-buttons" style="margin-top: 1rem;"></div>
                        <p id="qnaFeedback" class="feedback"></p>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary" id="nextQNABtn" style="display: none;">Next Question</button>
                        <button class="btn btn-secondary" onclick="goHome()">Quit Game</button>
                    </div>
                </div>
            `;

            const choicesDiv = document.getElementById("qnaChoices");
            options.forEach(option => {
                const btn = createButton(option, () => checkQNAAnswer(option, currentQuestion.correctAnswer, currentQuestion.explanation, btn), "btn btn-block");
                choicesDiv.appendChild(btn);
            });
        }

        function checkQNAAnswer(selectedAnswer, correctAnswer, explanation, clickedButton) {
            const feedbackElement = document.getElementById("qnaFeedback");
            const nextButton = document.getElementById("nextQNABtn");
            const allButtons = document.querySelectorAll("#qnaChoices .btn");

            allButtons.forEach(btn => {
                btn.disabled = true; // Disable all buttons after selection
                if (btn.textContent === correctAnswer) {
                    btn.classList.add("btn-correct");
                } else {
                    btn.classList.add("btn-incorrect");
                }
            });

            if (selectedAnswer === correctAnswer) {
                feedbackElement.textContent = "Correct! " + (explanation || "");
                feedbackElement.className = "feedback feedback-success";
                gameState.score++;
            } else {
                feedbackElement.textContent = `Incorrect. The correct answer was: "${correctAnswer}". ${explanation || ""}`;
                feedbackElement.className = "feedback feedback-error";
            }
            nextButton.style.display = "inline-block";
            nextButton.addEventListener('click', nextQNAQuestion); // Attach listener here
        }

        function nextQNAQuestion() {
            gameState.currentIndex++;
            displayQNAQuestion();
        }

        function showQNAResults() {
            elements.gameArea.innerHTML = `
                <div class="container">
                    <h2>Q&A Game Complete!</h2>
                    <p class="feedback feedback-info">You scored ${gameState.score} out of ${gameState.currentPool.length}!</p>
                    <div class="text-center">
                        <button class="btn btn-primary" onclick="startQNAQuiz()">Play Again</button>
                        <button class="btn btn-secondary" onclick="goHome()">Back to Main Menu</button>
                    </div>
                </div>
            `;
        }

        // Initialize the app
        document.addEventListener('DOMContentLoaded', () => {
            // Preload voices for text-to-speech
            gameState.synth.onvoiceschanged = () => {
                gameState.voices = gameState.synth.getVoices();
                console.log("SpeechSynthesis voices loaded.");
            };

            // Check for Web Speech API Speech Recognition support
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                console.warn("Speech recognition not supported in this browser. Shadowing recording will be limited.");
                // Potentially disable shadowing mode button here or show a warning
            }
            
            // Check for MediaRecorder support
            if (!navigator.mediaDevices || !window.MediaRecorder) {
                console.warn("Audio recording not fully supported in this browser. Shadowing recording will be limited.");
                // Potentially disable shadowing mode button here or show a warning
            }
        });





  
