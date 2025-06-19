
const vocabData = [
    { word: "Dynamic (adjective / noun) ", meaning: "Dynamic (adj) = សកម្ម, ចលនានៃការផ្លាស់ប្តូរ, ឬ មានថាមពលគ្រប់ពេល <br>Dynamic (noun) = សភាពសកម្ម, លក្ខណៈសកម្ម", khmer: "👉 មានការផ្លាស់ប្តូរញឹកញាប់ / សកម្ម / សព្វវ័យ / មានថាមពល", audio: "Dynamic.mp3" },
    { word: "Energetic", meaning: "", khmer: "សកម្ម / ល្អិតល្អន់", audio: "Energetic.mp3" },
    { word: "Lively ", meaning: "", khmer: "សប្បាយរីករាយ / សកម្ម", audio: "Lively.mp3" },
    { word: "Changing", meaning: "", khmer: "កំពុងផ្លាស់ប្តូរ", audio: "Changing.mp3" },
    { word: "Honestly (adverb)", meaning: "Honestly = ដោយស្មោះត្រង់, ដោយមិនក្លែងក្លាយ, ដោយសេចក្តីสัตย์", khmer: "👉 ជាសេចក្តីสัตย์, ដោយមិនលាក់លៀម, ដោយមានភាពស្មោះត្រង់", audio: "Honestly.mp3" },
    { word: "Frankly (adverb) ", meaning: "", khmer: " ជាស្មោះត្រង់,បើនិយាយតាមពិត", audio: "Frankly.mp3" },
    { word: " Sincerely (adverb)  ", meaning: "", khmer: "ដោយស្មោះត្រង់ (ចិត្ត)", audio: "Sincerely.mp3" },
    { word: "Truthfully (adverb) ", meaning: "", khmer: "ដោយសេចក្តីពិត", audio: "Truthfully.mp3" },
    { word: "Budget (noun, verb)", meaning: "Budget (noun, verb) <br> 👉 (Noun) ប្រាក់ថវិកា <br>👉 To budget (v.) = រៀបចំថវិកា, គ្រប់គ្រងការចំណាយ", khmer: "ថវិកា, ប្រាក់ដែលបានរៀបចំសម្រាប់ការចំណាយ", audio: "Budget.mp3" },
    { word: "Expense (n.) ", meaning: "", khmer: "ការចំណាយ ", audio: ".mp3" },
    { word: "Financial plan (n.)  =  ", meaning: "", khmer: "ផែនការហិរញ្ញវត្ថុ ", audio: "Financial.mp3" },
    { word: "Cost (n., v.)", meaning: "", khmer: "តម្លៃ, ចំណាយ  ", audio: "Cost.mp3" },
    { word: "Income (n.) ", meaning: "", khmer: "ការចំណាយ ប្រាក់ចំណូល ", audio: "Income.mp3" },
    { word: "Possess (verb) ", meaning: "", khmer: "👉 កាន់កាប់ ឬ មាន (បញ្ចេញអត្ថន័យថាអ្នកគ្រប់គ្រង/មានអ្វីមួយ) , កាន់កាប់ជាប្រពន្ធភាព, ទ្រព្យសម្បត្តិ, ជំនាញ ឬអារម្មណ៍ ", audio: "Possess.mp3" },
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
];

vocabData.push(
    { word: "brilliant", meaning: "exceptionally clever or talented", khmer: "ឆ្លាត", audio: "brilliant.mp3" },
    { word: "friendly", meaning: "acting in a kind and pleasant way", khmer: "រួសរាយ", audio: "friendly.mp3" },
    { word: "honest", meaning: "truthful and sincere", khmer: "ស្មោះត្រង់", audio: "honest.mp3" },
    { word: "lazy", meaning: "unwilling to work or use energy", khmer: "ខ្ជិល", audio: "lazy.mp3" },
    { word: "polite", meaning: "having or showing good manners", khmer: "សុភាព", audio: "polite.mp3" },
    { word: "strong", meaning: "having great physical power or strength", khmer: "ខ្លាំង", audio: "strong.mp3" },
    { word: "weak", meaning: "lacking physical strength or energy", khmer: "ខ្សោយ", audio: "weak.mp3" },
    { word: "wise", meaning: "having or showing experience, knowledge, and good judgment", khmer: "ប្រាជ្ញា", audio: "wise.mp3" },
    { word: "young", meaning: "having lived or existed for only a short time", khmer: "ក្មេង", audio: "young.mp3" },
    { word: "old", meaning: "having lived for a long time", khmer: "ចាស់", audio: "old.mp3" }
);

// Phrasal verbs with corrected meaning and khmer fields
vocabData.push(
    { word: "give up", meaning: "to stop trying or surrender", khmer: "បោះបង់", audio: "give_up.mp3" },
    { word: "look after", meaning: "to take care of someone or something", khmer: "មើលថែ", audio: "look_after.mp3" },
    { word: "pick up", meaning: "to collect or lift something", khmer: "យកឡើង", audio: "pick_up.mp3" },
    { word: "turn off", meaning: "to stop the operation of something", khmer: "បិទ", audio: "turn_off.mp3" },
    { word: "turn on", meaning: "to start the operation of something", khmer: "បើក", audio: "turn_on.mp3" },
    { word: "put on", meaning: "to wear or apply something", khmer: "ដាក់លើ", audio: "put_on.mp3" },
    { word: "take off", meaning: "to remove something or to leave the ground (airplane)", khmer: "ដោះចេញ", audio: "take_off.mp3" },
    { word: "run out", meaning: "to use up all of something", khmer: "អស់", audio: "run_out.mp3" },
    { word: "find out", meaning: "to discover or learn something", khmer: "រកឃើញ", audio: "find_out.mp3" },
    { word: "get along", meaning: "to have a good relationship", khmer: "ស្របគ្នា", audio: "get_along.mp3" }
);

const grammarData = [
    { sentence: "The book is read by her every day.", rule: "Present Simple Passive", explanation: "Used to describe an action that is done to the subject regularly or as a habit.", khmer: "សៀវភៅត្រូវបានអានដោយនាងរាល់ថ្ងៃ។" },
    { sentence: "The homework was completed by the students.", rule: "Past Simple Passive", explanation: "Used to describe an action that was done to the subject in the past.", khmer: "ការងារផ្ទះត្រូវបានបញ្ចប់ដោយសិស្ស។" },
    { sentence: "The project will be finished by next week.", rule: "Future Simple Passive", explanation: "Used to describe an action that will be done to the subject in the future.", khmer: "គម្រោងនឹងត្រូវបានបញ្ចប់មុនសប្តាហ៍ក្រោយ។" },
    { sentence: "The cake is being baked by the chef.", rule: "Present Continuous Passive", explanation: "Used to describe an action that is currently being done to the subject.", khmer: "នំកំពុងត្រូវបានដុតដោយចុងភៅ។" },
    { sentence: "The house was being painted by the workers.", rule: "Past Continuous Passive", explanation: "Used to describe an action that was ongoing in the past and was done to the subject.", khmer: "ផ្ទះកំពុងត្រូវបានលាបពណ៌ដោយកម្មករ។" },
    { sentence: "The report will be being prepared by the team.", rule: "Future Continuous Passive", explanation: "Used to describe an action that will be ongoing in the future and will be done to the subject.", khmer: "របាយការណ៍នឹងត្រូវបានរៀបចំដោយក្រុម។" },
    { sentence: "The letter has been written by him.", rule: "Present Perfect Passive", explanation: "Used to describe an action that has been completed and was done to the subject.", khmer: "សំបុត្រត្រូវបានសរសេរដោយគាត់។" },
    { sentence: "The room had been cleaned by the maid before we arrived.", rule: "Past Perfect Passive", explanation: "Used to describe an action that had been completed in the past before another action.", khmer: "បន្ទប់ត្រូវបានសម្អាតដោយអ្នកបំរើមុនពេលយើងមកដល់។" },
    { sentence: "The work will have been finished by the time you return.", rule: "Future Perfect Passive", explanation: "Used to describe an action that will have been completed in the future before a specific time.", khmer: "ការងារនឹងត្រូវបានបញ្ចប់មុនពេលអ្នកត្រឡប់មកវិញ។" },
    { sentence: "The bridge has been being built for two years.", rule: "Present Perfect Continuous Passive", explanation: "Used to describe an action that started in the past, is still ongoing, and is being done to the subject.", khmer: "ស្ពានត្រូវបានសាងសង់រយៈពេលពីរឆ្នាំ។" },
    { sentence: "The road had been being repaired for months before it was completed.", rule: "Past Perfect Continuous Passive", explanation: "Used to describe an action that was ongoing in the past and was being done to the subject before another action.", khmer: "ផ្លូវត្រូវបានជួសជុលរយៈពេលជាច្រើនខែមុនពេលវាបញ្ចប់។" },
    { sentence: "The building will have been being constructed for a year by next month.", rule: "Future Perfect Continuous Passive", explanation: "Used to describe an action that will have been ongoing in the future and will be done to the subject.", khmer: "អគារនឹងត្រូវបានសាងសង់រយៈពេលមួយឆ្នាំដល់ខែក្រោយ។" }, // Comma added here
    { sentence: "She has lived here for five years.", rule: "Present Perfect Tense", explanation: "Used to express an action that began in the past and continues into the present, often with 'for' or 'since'.", khmer: "នាងបានរស់នៅទីនេះរយៈពេលប្រាំឆ្នាំ" },
    { sentence: "They were playing soccer when it started to rain.", rule: "Past Continuous Tense", explanation: "Used to describe an ongoing action in the past that was interrupted by another action.", khmer: "ពួកគេកំពុងលេងបាល់ទាត់។" },
    { sentence: "I will go to the market tomorrow morning.", rule: "Simple Future Tense", explanation: "Used for actions that will happen in the future, often with 'will' or 'be going to'.", khmer: "ខ្ញុំនឹងទៅផ្សារថ្ងៃស្អែក។" },
    { sentence: "He eats an apple every day.", rule: "Simple Present Tense", explanation: "Used for habits, routines, facts, and general truths.", khmer: "គាត់ញ៉ាំផ្លែប៉ោមរាល់ថ្ងៃ។" },
    { sentence: "We visited Angkor Wat last year.", rule: "Simple Past Tense", explanation: "Used for completed actions in the past.", khmer: "យើងបានទៅលេងអង្គរវត្តកាលពីឆ្នាំមុន។" },
    { sentence: "She is reading a book right now.", rule: "Present Continuous Tense", explanation: "Used to describe actions happening at the moment of speaking.", khmer: "នាងកំពុងអានសៀវភៅឥឡូវនេះ។" },
    { sentence: "He had already left when I arrived.", rule: "Past Perfect Tense", explanation: "Used to describe an action that was completed before another action in the past.", khmer: "គាត់បានចេញទៅហើយនៅពេលខ្ញុំមកដល់។" },
    { sentence: "We will have finished the project by next week.", rule: "Future Perfect Tense", explanation: "Used to describe an action that will be completed before a specific point in the future.", khmer: "យើងនឹងបានបញ្ចប់គម្រោងនេះមុនសប្តាហ៍ក្រោយ។" },
    { sentence: "She has been studying English for three hours.", rule: "Present Perfect Continuous Tense", explanation: "Used to describe an action that started in the past and is still continuing, emphasizing the duration.", khmer: "នាងបានសិក្សាភាសាអង់គ្លេសរយៈពេលបីម៉ោង។" },
    { sentence: "They had been waiting for an hour when the bus finally arrived.", rule: "Past Perfect Continuous Tense", explanation: "Used to describe an action that was ongoing in the past before another action occurred.", khmer: "ពួកគេបានរង់ចាំរយៈពេលមួយម៉ោងនៅពេលឡានក្រុងមកដល់។" },
    { sentence: "By next year, I will have been working here for five years.", rule: "Future Perfect Continuous Tense", explanation: "Used to describe an action that will be ongoing up to a specific point in the future.", khmer: "ដល់ឆ្នាំក្រោយ ខ្ញុំនឹងបានធ្វើការនៅទីនេះរយៈពេលប្រាំឆ្នាំ។" },
    { sentence: "I am eating lunch right now.", rule: "Present Continuous Tense", explanation: "Used to describe actions happening at the moment of speaking.", khmer: "ខ្ញុំកំពុងញ៉ាំអាហារថ្ងៃត្រង់ឥឡូវនេះ។" },
    { sentence: "She was watching TV when the phone rang.", rule: "Past Continuous Tense", explanation: "Used to describe an ongoing action in the past that was interrupted by another action.", khmer: "នាងកំពុងមើលទូរទស្សន៍នៅពេលទូរស័ព្ទរោទ៍។" },
    { sentence: "I will be traveling to Japan next month.", rule: "Future Continuous Tense", explanation: "Used to describe an action that will be ongoing at a specific point in the future.", khmer: "ខ្ញុំនឹងកំពុងធ្វើដំណើរទៅប្រទេសជប៉ុនខែក្រោយ។" },
    { sentence: "He had been working on the project for hours before it was completed.", rule: "Past Perfect Continuous Tense", explanation: "Used to describe an action that was ongoing in the past before another action occurred.", khmer: "គាត់បានធ្វើការលើគម្រោងនេះរយៈពេលជាច្រើនម៉ោងមុនពេលវាបញ្ចប់។" },
    { sentence: "By the time she arrives, we will have been waiting for two hours.", rule: "Future Perfect Continuous Tense", explanation: "Used to describe an action that will be ongoing up to a specific point in the future.", khmer: "ដល់ពេលនាងមកដល់ យើងនឹងបានរង់ចាំរយៈពេលពីរម៉ោង។" },
    { sentence: "I am going to visit my grandparents this weekend.", rule: "Be Going To (Future Intent)", explanation: "Used to describe planned or intended actions in the future.", khmer: "ខ្ញុំចង់ទៅលេងជីតាអូនរបស់ខ្ញុំនៅចុងសប្តាហ៍នេះ។" },
    { sentence: "Such a tall building that we could see it from far away.", rule: "Such a/an + adjective + noun + that + result", explanation: "Used to say that something is so intense or extreme that it causes something else to happen <br>អ្វីមួយមាន លក្ខណៈខ្លាំងណាស់ ឬខ្លាំងបំផុត ដល់ថ្នាក់ដែលបង្កឲ្យមានលទ្ធផលណាមួយ។ <br>➡️ បញ្ជាក់ពីកម្រិតខ្លាំងណាស់របស់អ្វីមួយ ដែលធ្វើឲ្យមានលទ្ធផលចេញមក។", khmer: "អាគារខ្ពស់ខ្លាំងណាស់ ដល់ថ្នាក់ដែលយើងអាចមើលឃើញវាពីចម្ងាយ។" },
    { sentence: "Such an interesting book that I couldn't stop reading.", rule: "Such a/an + adjective + noun + that + result", explanation: "Used to say that something is so intense or extreme that it causes something else to happen<br>អ្វីមួយមាន លក្ខណៈខ្លាំងណាស់ ឬខ្លាំងបំផុត ដល់ថ្នាក់ដែលបង្កឲ្យមានលទ្ធផលណាមួយ។ <br>➡️ បញ្ជាក់ពីកម្រិតខ្លាំងណាស់របស់អ្វីមួយ ដែលធ្វើឲ្យមានលទ្ធផលចេញមក។", khmer: "សៀវភៅគួរឱ្យចាប់អារម្មណ៍ខ្លាំងណាស់ ដល់ថ្នាក់ដែលខ្ញុំមិនអាចបញ្ឈប់ការអានបានឡើយ" },
    { sentence: "If it rains, we will stay indoors.", rule: "First Conditional", explanation: "Used to describe a possible future situation and its result. The 'if' clause is in the present tense, and the main clause is in the future tense.", khmer: "ប្រសិនបើភ្លៀង យើងនឹងស្នាក់នៅក្នុងផ្ទះ។" },
    { sentence: "If I were you, I would take the job.", rule: "Second Conditional", explanation: "Used to describe an unreal or hypothetical situation in the present or future. The 'if' clause uses the past tense, and the main clause uses 'would' + base verb.", khmer: "ប្រសិនបើខ្ញុំជាអ្នក ខ្ញុំនឹងទទួលការងារនោះ។" },
    { sentence: "If she had studied harder, she would have passed the exam.", rule: "Third Conditional", explanation: "Used to describe an unreal or hypothetical situation in the past. The 'if' clause uses the past perfect tense, and the main clause uses 'would have' + past participle.", khmer: "ប្រសិនបើនាងបានសិក្សាខ្លាំងជាងនេះ នាងនឹងបានជាប់ការប្រឡង។" },
    { sentence: "Had she studied harder, she would have passed the exam.", rule: "Omitting 'if' in Third Conditional", explanation: "In Third Conditional sentences, 'if' can be omitted by inverting the subject and auxiliary verb in the 'if' clause.", khmer: "ប្រសិនបើនាងបានសិក្សាខ្លាំងជាងនេះ នាងនឹងបានជាប់ការប្រឡង។" },
    { sentence: "Were I you, I would take the job.", rule: "Omitting 'if' in Second Conditional", explanation: "In Second Conditional sentences, 'if' can be omitted by inverting the subject and auxiliary verb in the 'if' clause.", khmer: "ប្រសិនបើខ្ញុំជាអ្នក ខ្ញុំនឹងទទួលការងារនោះ។" },
    { sentence: "Should it rain, we will stay indoors.", rule: "Omitting 'if' in First Conditional", explanation: "In First Conditional sentences, 'if' can be omitted by inverting the subject and auxiliary verb in the 'if' clause.", khmer: "ប្រសិនបើភ្លៀង យើងនឹងស្នាក់នៅក្នុងផ្ទះ។" },
    { sentence: "No sooner had she arrived than it started to rain.", rule: "No sooner + had + subject + past participle + than + past simple", explanation: "As soon as one thing happened, another thing happened immediately after", khmer: "➡️ បន្ទាប់ពីនាងមកដល់ មេឃបានចាប់ផ្ដើមភ្លៀងភ្លាមៗ។" },
    { sentence: "No sooner had I sat down than the phone rang", rule: "No sooner + had + subject + past participle + than + past simple", explanation: "As soon as one thing happened, another thing happened immediately after", khmer: "➡️ ខ្ញុំទើបតែអង្គុយ ទូរស័ព្ទក៏ដង្ហោះភ្លាមៗ" },
    { sentence: "No sooner had they finished dinner than the lights went out.", rule: "No sooner + had + subject + past participle + than + past simple", explanation: "As soon as one thing happened, another thing happened immediately after", khmer: "➡️ ពួកគេទើបបញ្ចប់អាហារពេលល្ងាចភ្លាម ភ្លើងក៏ចាប់ផ្ដើមផ្គាច់។" },
    { sentence: "As soon as he finished his work, he went home.", rule: "As soon as + subject + verb, subject + verb", explanation: "Right after something happens, another thing happens.", khmer: "➡️ភ្លាមៗបន្ទាប់ពីគាត់បញ្ចប់ការងារ គាត់បានទៅផ្ទះ។" },
    { sentence: "I had just finished eating when the phone rang.", rule: "Subject + had just + past participle + when + subject + past simple", explanation: "You had just completed an action, and another one suddenly happened.<br>ខ្ញុំទើបតែ... បន្ទាប់មក... ឬ ទើបតែធ្វើអ្វីមួយ ពេលដែលអ្វីមួយកើតឡើងភ្លាមៗ។", khmer: "➡️ខ្ញុំទើបតែបញ្ចប់បាយ ភ្លាមទូរស័ព្ទក៏ដណ្ដើមដង។" },
    { sentence: "She had just arrived home when it started to rain.", rule: "Subject + had just + past participle + when + subject + past simple", explanation: "You had just completed an action, and another one suddenly happened.<br>ខ្ញុំទើបតែ... បន្ទាប់មក... ឬ ទើបតែធ្វើអ្វីមួយ ពេលដែលអ្វីមួយកើតឡើងភ្លាមៗ។", khmer: "➡️នាងទើបតែដល់ផ្ទះ មេឃក៏ចាប់ផ្តើមភ្លៀង។" },
    { sentence: "She talks as if she knows everything.",rule:"As if / As though",explanation:"Used to describe something that seems true or possible. <br>✅ 1. With Present or Past Simple (Real or Possible situations) <br>Subject + verb + as if / as though + subject + past simple", khmer:"➡️ នាងនិយាយដូចជានាងដឹងអស់ទាំងអស់។"},
    { sentence: "He looks as though he is tired.",rule:"As if / As though",explanation:"Used to describe something that seems true or possible. <br>✅ 1. With Present or Past Simple (Real or Possible situations) <br>Subject + verb + as if / as though + subject + past simple", khmer:"➡️ គាត់មើលទៅដូចជាគាត់នឿយហត់។"},
    { sentence: "She acted as if she had seen a ghost.",rule:"As if / As though",explanation:"✅ 2. With Past Perfect (Unreal or Impossible Situations)<br>Used for imaginary or untrue comparisons — mostly used with past perfect or sometimes past simple with a different meaning.<br>Subject + verb + as if / as though + subject + had + past participle", khmer:"➡️ នាងមានអារម្មណ៍ដូចជានាងបានឃើញខ្មោច។"},
    { sentence: "He speaks as though he had never made a mistake.",rule:"As if / As though",explanation:"✅ 2. With Past Perfect (Unreal or Impossible Situations)<br>Used for imaginary or untrue comparisons — mostly used with past perfect or sometimes past simple with a different meaning.<br>Subject + verb + as if / as though + subject + had + past participle", khmer:"➡️ គាត់និយាយដូចជាគាត់មិនធ្លាប់ធ្វើបាបអ្វីទេ។"},
    { sentence: "He behaves as if he were the boss.",rule:"As if / As though",explanation:"✅ 3. With “Were” – Unreal Present (Subjunctive Mood).<br>Subject + verb + as if / as though + subject + were...", khmer:"➡️  គាត់ប្រព្រឹត្តិខ្លួនដូចជាគាត់ជាមេធ្វើការ។(But he's not the boss)"},
    { sentence: "She treats me as though I were a child.",rule:"As if / As though",explanation:"✅ 3. With “Were” – Unreal Present (Subjunctive Mood).<br>Subject + verb + as if / as though + subject + were...", khmer:"➡️  នាងព្យាបាលខ្ញុំដូចជាខ្ញុំជាកុមារ។(But I’m not a child)"},
    // Removed empty entries
];

const grammarRules = [
    // Conditional
    "First Conditional",
    "Second Conditional",
    "Third Conditional",
    "Omitting 'if' in First Conditional",
    "Omitting 'if' in Second Conditional",
    "Omitting 'if' in Third Conditional",
    // As if / As though
    "As if / As though",
    // Just when
    "Subject + had just + past participle + when + subject + past simple",
    // As soon as
    "As soon as + subject + verb, subject + verb",
    // No sooner had
    "No sooner + had + subject + past participle + than + past simple",
    // Such
    "Such a/an + adjective + noun + that + result",
    // Passive Tenses (from grammarData)
    "Present Simple Passive",
    "Past Simple Passive",
    "Future Simple Passive",
    "Present Continuous Passive",
    "Past Continuous Passive",
    "Future Continuous Passive",
    "Present Perfect Passive",
    "Past Perfect Passive",
    "Future Perfect Passive",
    "Present Perfect Continuous Passive",
    "Past Perfect Continuous Passive",
    "Future Perfect Continuous Passive",
    // Active Tenses (from grammarData)
    "Present Perfect Tense",
    "Past Continuous Tense",
    "Simple Present Tense",
    "Simple Past Tense",
    "Simple Future Tense",
    "Present Continuous Tense",
    "Past Perfect Tense",
    "Future Perfect Tense",
    "Present Perfect Continuous Tense",
    "Past Perfect Continuous Tense",
    "Future Perfect Continuous Tense",
    "Future Continuous Tense", // Duplicated from passive list, if intentional, fine.
    "Be Going To (Future Intent)",
];

const shadowingData = [
    { sentence: "She is a dynamic leader who inspires her team.", khmer: "👉 នាងជាអ្នកដឹកនាំសកម្ម ដែលបញ្ចុះបញ្ចូលក្រុមរបស់នាង។" },
    { sentence: "The market is very dynamic these days.", khmer: "👉 ទីផ្សារមានការផ្លាស់ប្តូរញឹកញាប់ណាស់ថ្ងៃនេះ។" },
    { sentence: "They studied the dynamics of human behavior. (noun)", khmer: "They studied the dynamics of human behavior. (noun)" },
    { sentence: "Honestly, I didn’t expect that answer.", khmer: "👉 ដោយស្មោះត្រង់ ខ្ញុំមិនបានរំពឹងថានឹងមានចម្លើយនោះទេ។" },
    { sentence: "She spoke honestly about her feelings.", khmer: "👉 នាងបាននិយាយដោយស្មោះត្រង់អំពីអារម្មណ៍របស់នាង។" },
    { sentence: "Do you honestly think that will work?", khmer: "👉 តើអ្នកគិតដោយស្មោះត្រង់ថាអ្វីនោះនឹងដំណើរការទេ?" },
    { sentence: "(Noun) We need to stick to our budget this month.  ", khmer: "👉 ខែនេះយើងត្រូវគោរពតាមថវិការបស់យើង។" },
    { sentence: "(Verb) She carefully budgeted her money for the trip.", khmer: "👉 នាងបានរៀបចំថវិការបស់នាងយ៉ាងប្រុងប្រយ័ត្នសម្រាប់ការធ្វើដំណើរ។" },
    { sentence: "She possesses great talent in music.", khmer: "👉 នាងមានទេពកោសល្យខ្លាំងក្នុងវិស័យតន្រ្តី។" },
    { sentence: "He possessed a large amount of land in the countryside.", khmer: "👉 គាត់បានកាន់កាប់ដីធ្លីច្រើននៅជនបទ។" },
    { sentence: " You must possess a valid license to drive.", khmer: "👉 អ្នកត្រូវមានប័ណ្ណបើកបរដែលមានសុពលភាព ដើម្បីបើកបរ។" },
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

    
    // Long paragraph entry
    {
        sentence: `You know, I'm really starting to believe in myself more these days. It's a good feeling!
Actually, when I'm practicing, I can genuinely say, 'I feel confident when I speak English.'
It's getting easier. And it's not just about English; I feel like I'm learning new things every day, no matter what.
Honestly, I think I'm becoming more confident over time. It's a gradual process, but I can feel it. And with that confidence, I really do feel like I can achieve my goals, big or small.
I've noticed I feel confident sharing my ideas now, even if they're not perfect. That's a big step for me. And the best part? I am not afraid to make mistakes. I mean, mistakes are how you learn, right?
I'm really confident in my ability to learn anything I put my mind to. And when new things come up, I think, 'Yeah, I can handle new challenges.' I'm getting better at just trusting my own judgment. That's important.
What really helps is that practicing helps me feel more confident. Every little bit makes a difference. And I'm trying to remember to celebrate my small successes – like when I understand something new or speak clearly.
I'm trying to really learn from my experiences, good or bad. And instead of dwelling on what's hard, I'm focusing on my strengths. That makes me feel powerful. Most importantly, I keep trying to encourage myself to try new things. You just never know what you can do until you try!`,
        khmer: "អ្នកដឹងទេ ខ្ញុំពិតជាចាប់ផ្តើមជឿជាក់លើខ្លួនឯងកាន់តែខ្លាំងនាពេលបច្ចុប្បន្ននេះ។ វាជាអារម្មណ៍ល្អ! តាមពិត នៅពេលខ្ញុំអនុវត្ត ខ្ញុំអាចនិយាយដោយស្មោះត្រង់ថា 'ខ្ញុំមានទំនុកចិត្តនៅពេលខ្ញុំនិយាយភាសាអង់គ្លេស។' វាចាប់ផ្តើមងាយស្រួលជាងមុន។ ហើយវាមិនមែនត្រឹមតែភាសាអង់គ្លេសទេ ខ្ញុំមានអារម្មណ៍ថាខ្ញុំកំពុងរៀនរឿងថ្មីៗជារៀងរាល់ថ្ងៃ មិនថាមានរឿងអ្វីកើតឡើងនោះទេ។ និយាយដោយស្មោះត្រង់ ខ្ញុំគិតថាខ្ញុំកាន់តែមានទំនុកចិត្តតាមពេលវេលា។ វាជាដំណើរការបន្តិចម្តងៗ ប៉ុន្តែខ្ញុំអាចមានអារម្មណ៍បាន។ ហើយជាមួយនឹងទំនុកចិត្តនោះ ខ្ញុំពិតជាមានអារម្មណ៍ថាខ្ញុំអាចសម្រេចគោលដៅរបស់ខ្ញុំ មិនថាធំឬតូចនោះទេ។ ខ្ញុំបានកត់សម្គាល់ថាខ្ញុំមានទំនុកចិត្តក្នុងការចែករំលែកគំនិតរបស់ខ្ញុំឥឡូវនេះ ទោះបីជាវាមិនល្អឥតខ្ចោះក៏ដោយ។ នោះជាជំហានដ៏ធំមួយសម្រាប់ខ្ញុំ។ ហើយអ្វីដែលល្អបំផុតគឺ? ខ្ញុំមិនខ្លាចធ្វើខុសទេ។ ខ្ញុំគិតថា ការធ្វើខុសគឺជាវិធីដែលអ្នករៀនមែនទេ? ខ្ញុំមានទំនុកចិត្តយ៉ាងខ្លាំងលើសមត្ថភាពរបស់ខ្ញុំក្នុងការរៀនអ្វីដែលខ្ញុំបានគិត។ ហើយនៅពេលមានរឿងថ្មីៗកើតឡើង ខ្ញុំគិតថា 'បាទ ខ្ញុំអាចដោះស្រាយបញ្ហាប្រឈមថ្មីៗបាន។' ខ្ញុំកាន់តែប្រសើរឡើងក្នុងការជឿជាក់លើការវិនិច្ឆ័យផ្ទាល់ខ្លួនរបស់ខ្ញុំ។ នោះជាការសំខាន់។ អ្វីដែលពិតជាជួយគឺការអនុវត្តន៍ជួយឱ្យខ្ញុំមានអារម្មណ៍ជឿជាក់កាន់តែខ្លាំង។ រាល់ការខិតខំតូចៗសុទ្ធតែមានន័យ។ ហើយខ្ញុំកំពុងព្យាយាមចងចាំដើម្បីអបអរសាទរភាពជោគជ័យតូចៗរបស់ខ្ញុំ – ដូចជាពេលខ្ញុំយល់អ្វីមួយថ្មី ឬនិយាយបានច្បាស់លាស់។ ខ្ញុំកំពុងព្យាយាមរៀនពីបទពិសោធន៍របស់ខ្ញុំ មិនថាល្អឬអាក្រក់នោះទេ។ ហើយជំនួសឱ្យការគិតច្រើនលើអ្វីដែលពិបាក ខ្ញុំកំពុងផ្តោតលើចំណុចខ្លាំងរបស់ខ្ញុំ។ នោះធ្វើឱ្យខ្ញុំមានអារម្មណ៍ថាមានថាមពល។ អ្វីដែលសំខាន់បំផុត ខ្ញុំបន្តព្យាយាមលើកទឹកចិត្តខ្លួនឯងឱ្យសាកល្បងអ្វីថ្មីៗ។ អ្នកគ្រាន់តែមិនដែលដឹងថាអ្នកអាចធ្វើអ្វីបានទេ រហូតដល់អ្នកសាកល្បង!"
    },
    {
        sentence: `Why do you want to study English? <br>
        Oh, that's a great question! Well, there are a few main reasons, actually.
        <br>
        First off, I really want to improve my career opportunities. English is such a global language, and knowing it well just opens up so many more doors, especially in many industries today. I feel like it's a really important skill for getting ahead.
    <br>
        Then there's the travel aspect. I absolutely love the idea of being able to travel more confidently. Imagine going to a new country and being able to communicate easily with people, ask for directions, order food – it would make the whole experience so much richer and less stressful. I really want to be able to explore the world and connect with people from different backgrounds.
  <br>
        And, of course, a big part of it is simply for personal growth. Learning English is a huge challenge, but it's also incredibly rewarding. It helps me to think in new ways, and it gives me access to so many more books, movies, and online resources that are in English. It just feels like it's expanding my world, you know?
  <br>
        So, yeah, for my career, for travel, and for just growing as a person, those are my main motivations for studying English.
       
        `
       
    },
    {
        sentence: `communication skills  <br>
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
        
        `
    },
    {
        sentence: `My Hobbies and Free Time  <br>
      <br>    Oh, that's a good question! Well, like most people, I have a few things I really enjoy doing when I'm not busy.
        <br>  First off, I absolutely love reading. I try to make time for it every day, even if it's just for 20 minutes. I mostly enjoy fiction novels because they let me escape into different worlds and stories. It's my way of relaxing and learning new vocabulary at the same time, actually!
  <br>
        Besides reading, I've really gotten into taking walks, especially in the evenings. It's a simple activity, but it helps me clear my head and just enjoy being outside. Sometimes I listen to podcasts while I walk, which is a nice way to learn something new or just relax.
  <br>
        And, of course, because I'm studying English, a lot of my 'free time' is actually spent on that! I mean, I don't see it as work. I love watching English movies or TV shows without subtitles when I can. It's a fun way to practice my listening. I also enjoy listening to English music and trying to understand the lyrics.
  <br>
        So, yeah, reading, walking, and immersing myself in English media – those are pretty much my go-to hobbies and how I spend my free time. They help me relax and also keep me learning, which is perfect!
        
        `
    }
];

  

      const reading = [
        {
            sentence: `Position property defines how an element ____________.
                It ______________ used for an element, which determines how _____ and where it appears on the page.`,
            rule: "is positioned in the document layout, controls the type of positioning method, it interacts with other elements",
            explanation: "The 'position' property is fundamental for controlling the placement of an element within the document flow.",
            khmer: "លក្ខណៈសម្បត្តិ 'position' កំណត់ថាធាតុមួយ ___________. វា ____________ ត្រូវបានប្រើសម្រាប់ធាតុមួយ ដែលកំណត់ថា _______ និងកន្លែងណាដែលវាលេចឡើងនៅលើទំព័រ។"
        },
        {
            sentence: `
                For 'position: relative;', the element stays ____, but you can use ___ to move it relative to its__.
            `,
            rule: "__in the normal flow__, __top, right , bottom, and left__, __ normal position",
            explanation: "Relative positioning allows you to shift an element from its original spot without affecting the layout of other elements.",
            khmer: "Relative: ធាតុនៅតែ ____, ប៉ុន្តែអ្នកអាចប្រើ ___ ដើម្បីផ្លាស់ទីវាទាក់ទងទៅនឹង __របស់វា។ កំណត់យកទីតាំងរបស់ខ្លួនឯងជាគោល។"
        },
        {
            sentence: `
                For 'position: absolute;', the element is ___and positioned relative to the nearest ___ (an ancestor with a position other than static).
            `,
            rule: "_removed from the nomal flow __,_positioned relative_ ,ancestor",
            explanation: "Absolute positioning takes an element out of the document flow and places it based on its closest positioned parent.",
            khmer: "Absolute: ធាតុត្រូវបាន ___ និងកំណត់ទីតាំងទាក់ទងទៅនឹងទីតាំងដែលនៅជិតបំផុត __ (ដូនតាដែលមានទីតាំងក្រៅពី static)។ កំណត់យកទឺតាំង​ដែល​ជិតបំផុត​ទៅនឹង Ancestor (parent which got position relative) មិនខ្វល់ថានៅលើ ឫក្រោម element ដទៃ។"
        },
        {
            sentence: `
                'position: static;' is the ___ value for all HTML elements. Elements with this position are rendered in their ______ document flow, and 'top', 'bottom', 'left', and 'right' properties have ___ effect.
            `,
            rule: "default, normal, no",
            explanation: "Static is the standard positioning behavior; elements are placed according to the browser's default layout rules.",
            khmer: "Static (លំនាំដើម): 'position: static;' គឺជាតម្លៃ ___ សម្រាប់ធាតុ HTML ទាំងអស់។ ធាតុដែលមានទីតាំងនេះត្រូវបានបង្ហាញនៅក្នុងលំហូរឯកសារ _______ របស់ពួកគេ ហើយលក្ខណៈសម្បត្តិ 'top', 'bottom', 'left', និង 'right' មានឥទ្ធិពល ___ ។"
        },
        {
            sentence: `
                For 'position: fixed;', the element is removed from the normal document flow and positioned relative to the _____. It remains in the same visible position even when the user ____ the page.
            `,
            rule: "viewport, scrolls",
            explanation: "Fixed positioning keeps an element locked to the browser window, useful for persistent headers or footers.",
            khmer: "Fixed: (កំណត់ទីតាំងថេរ) សម្រាប់ 'position: fixed;' ធាតុត្រូវបានដកចេញពីលំហូរឯកសារធម្មតា ហើយកំណត់ទីតាំងទាក់ទងទៅនឹង _____។ វាស្ថិតនៅក្នុងទីតាំងដែលអាចមើលឃើញដដែល ទោះបីជាអ្នកប្រើប្រាស់ ____ ទំព័រនេះក៏ដោយ។"
        },
        {
            sentence: `
                'position: sticky;' behaves like 'relative' until it reaches a certain ______, at which point it becomes 'fixed' relative to the viewport. It requires at least one of 'top', 'bottom', 'left', or 'right' to be specified to define the ____ point.
            `,
            rule: "scroll threshold, sticking",
            explanation: "Sticky positioning is great for elements that scroll with the page for a while and then 'stick' at a certain point, like section headers.",
            khmer: "Sticky: (កំណត់ទីតាំងជាប់) 'position: sticky;' ធ្វើដូច 'relative' រហូតដល់វាឈានដល់ ______ ជាក់លាក់មួយ នៅពេលនោះវាប្រែក្លាយជា 'fixed' ទាក់ទងទៅនឹង viewport ។ វាទាមទារយ៉ាងហោចណាស់មួយក្នុងចំណោម 'top', 'bottom', 'left', ឬ 'right' ដើម្បីបញ្ជាក់ដើម្បីកំណត់ចំណុច ____ ។"
        },
    ];
    const blankRules = [
        "is positioned in the document layout, controls the type of positioning method, it interacts with other elements",
        "__in the normal flow__, __top, right , bottom, and left__, __ normal position",
        "_removed from the nomal flow __,_positioned relative_ ,ancestor",
        "default, normal, no",
        "viewport, scrolls",
        "scroll threshold, sticking"
    ];
    let mode = "vocab";
    let currentGrammar = null;
    let recognition; // For SpeechRecognition
    let audioRecorder; // For MediaRecorder

    // --- Mode Selection ---
    function selectMode(m) {
      mode = m;
      const gameArea = document.getElementById("gameArea");
      gameArea.innerHTML = ''; // Clear previous content

      if (mode === 'vocab') {
        showStartScreen();
      } else if (mode === 'grammar') {
        showGrammarQuiz();
      } else if (mode === 'shadowing') {
        showShadowing();
      } else if (mode === 'reading'){
        showReading();
      }
    }

    // --- Grammar Quiz ---
    function showGrammarQuiz() {
      const area = document.getElementById("gameArea");
      currentGrammar = grammarData[Math.floor(Math.random() * grammarData.length)];

      // Generate options including the correct one and some random wrong ones
      let shuffledRules = grammarRules.filter(rule => rule !== currentGrammar.rule);
      shuffledRules =  blankRules.filter(rule => rule !== currentGrammar.rule);
      shuffledRules = shuffledRules.sort(() => 0.5 - Math.random()).slice(0, 3); // Get 3 random wrong rules
      const options = [currentGrammar.rule, ...shuffledRules].sort(() => 0.5 - Math.random());

      area.innerHTML = `
        <h2>📝 Grammar Guru</h2>
        <div class="question-box">
          <p>Identify the tense/rule used in the sentence:</p>
          <p><strong>"${currentGrammar.sentence}"</strong></p>
          <p class="info-text"><em>Translation: ${currentGrammar.khmer}</em></p>
        </div>
        <div id="grammarChoicesArea"></div>
        <p id="grammarFeedback"></p>
        <div id="grammarExplanation" class="explanation-box" style="display:none;"></div>
        <button onclick="showGrammarQuiz()">Next Question</button>
      `;

      const choicesArea = document.getElementById("grammarChoicesArea");
      options.forEach(rule => {
        const btn = document.createElement("button");
        btn.textContent = rule;
        btn.onclick = () => checkGrammarAnswer(btn, rule);
        choicesArea.appendChild(btn);
      });
    }

    function checkGrammarAnswer(button, selected) {
      const feedback = document.getElementById("grammarFeedback");
      const explanationDiv = document.getElementById("grammarExplanation");

      // Disable all buttons to prevent multiple clicks
      document.querySelectorAll("#grammarChoicesArea button").forEach(btn => btn.disabled = true);

      if (selected === currentGrammar.rule) {
        feedback.textContent = "✅ Correct! Well done!";
        feedback.style.color = "green";
        button.classList.add('correct');
      } else {
        feedback.textContent = `❌ Incorrect. The correct answer is: "${currentGrammar.rule}"`;
        feedback.style.color = "red";
        button.classList.add('incorrect');
        // Highlight the correct answer
        Array.from(document.querySelectorAll("#grammarChoicesArea button")).find(btn => btn.textContent === currentGrammar.rule).classList.add('correct');
      }
      explanationDiv.innerHTML = `<strong>Explanation:</strong> ${currentGrammar.explanation}`;
      explanationDiv.style.display = 'block';
    }
//Reading Game 
function showReading() {
    const area = document.getElementById("gameArea");
    currentGrammar = reading[Math.floor(Math.random() * reading.length)];

    // Generate options including the correct one and some random wrong ones
    
    shuffledRules =  blankRules.filter(rule => rule !== currentGrammar.rule);
    shuffledRules = shuffledRules.sort(() => 0.5 - Math.random()).slice(0, 3); // Get 3 random wrong rules
    const options = [currentGrammar.rule, ...shuffledRules].sort(() => 0.5 - Math.random());

    area.innerHTML = `
      <h2>📝 Reading </h2>
      <div class="question-box">
        <p>Identify the tense/rule used in the sentence:</p>
        <p><strong>"${currentGrammar.sentence}"</strong></p>
        <p class="info-text"><em>Translation: ${currentGrammar.khmer}</em></p>
      </div>
      <div id="grammarChoicesArea"></div>
      <p id="grammarFeedback"></p>
      <div id="grammarExplanation" class="explanation-box" style="display:none;"></div>
      <button onclick="showReading()">Next Question</button>
    `;

    const choicesArea = document.getElementById("grammarChoicesArea");
    options.forEach(rule => {
      const btn = document.createElement("button");
      btn.textContent = rule;
      btn.onclick = () => checkGrammarAnswer(btn, rule);
      choicesArea.appendChild(btn);
    });
  }

  function checkGrammarAnswer(button, selected) {
    const feedback = document.getElementById("grammarFeedback");
    const explanationDiv = document.getElementById("grammarExplanation");

    // Disable all buttons to prevent multiple clicks
    document.querySelectorAll("#grammarChoicesArea button").forEach(btn => btn.disabled = true);

    if (selected === currentGrammar.rule) {
      feedback.textContent = "✅ Correct! Well done!";
      feedback.style.color = "green";
      button.classList.add('correct');
    } else {
      feedback.textContent = `❌ Incorrect. The correct answer is: "${currentGrammar.rule}"`;
      feedback.style.color = "red";
      button.classList.add('incorrect');
      // Highlight the correct answer
      Array.from(document.querySelectorAll("#grammarChoicesArea button")).find(btn => btn.textContent === currentGrammar.rule).classList.add('correct');
    }
    explanationDiv.innerHTML = `<strong>Explanation:</strong> ${currentGrammar.explanation}`;
    explanationDiv.style.display = 'block';
  }

    // --- Shadowing Practice ---
    function showShadowing() {
      const area = document.getElementById("gameArea");
      const random = shadowingData[Math.floor(Math.random() * shadowingData.length)];
      area.innerHTML = `
        <h2>🗣️ Shadowing Practice</h2>
        <div class="question-box">
          <p>Listen and repeat the sentence aloud, trying to match the pronunciation and intonation.</p>
          <p><strong>"${random.sentence}"</strong></p>
          <p class="info-text"><em>Translation: ${random.khmer}</em></p>
        </div>
        <button onclick="playSentence('${random.sentence}')">🔈 Listen to Sentence</button>
        <button id="recordBtn" onclick="toggleRecording()">🎙️ Start Recording</button>
        <p id="recordingStatus"></p>
        <audio id="userAudio" controls style="display:none;"></audio>
        <button onclick="showShadowing()">Next Sentence</button>
      `;
      // Check for browser support for recording
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        document.getElementById("recordBtn").disabled = true;
        document.getElementById("recordingStatus").textContent = "Your browser does not support audio recording.";
      }
    }

    function playSentence(text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }

    let mediaRecorder;
    let audioChunks = [];
    let isRecording = false;

    async function toggleRecording() {
      const recordBtn = document.getElementById("recordBtn");
      const recordingStatus = document.getElementById("recordingStatus");
      const userAudio = document.getElementById("userAudio");

      if (!isRecording) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          mediaRecorder = new MediaRecorder(stream);
          audioChunks = [];

          mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
          };

          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            userAudio.src = audioUrl;
            userAudio.style.display = 'block';
            recordingStatus.textContent = "Recording complete. Listen to your voice:";
            recordBtn.textContent = "🎙️ Start Recording";
            isRecording = false;
          };

          mediaRecorder.start();
          isRecording = true;
          recordBtn.textContent = "⏹️ Stop Recording";
          recordingStatus.textContent = "Recording... Say the sentence!";
          userAudio.style.display = 'none'; // Hide previous recording
        } catch (err) {
          console.error("Error accessing microphone:", err);
          recordingStatus.textContent = "Error accessing microphone. Please allow access.";
        }
      } else {
        mediaRecorder.stop();
        // Stop all tracks in the stream to release the microphone
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
      }
    }


    // --- Vocabulary Quiz ---
    let currentVocab = null;
    let score = 0;
    let totalQuestionsAnswered = 0; // Renamed 'total' for clarity
    let quizLength = 0;
    let currentIndex = 0;
    let quizPool = [];
    let timerInterval = null;
    let timeLeft = 15; // Increased timer for more thinking time

    function showStartScreen() {
      const area = document.getElementById("gameArea");
      area.innerHTML = `
        <div id="startScreen">
          <h2>📚 Vocabulary Challenge</h2>
          <h3>Select Quiz Length</h3>
          <button onclick="startQuiz(5)">🔹 5 Words (Beginner)</button>
          <button onclick="startQuiz(10)">🔸 10 Words (Intermediate)</button>
          <button onclick="startQuiz(vocabData.length)">🔺 All ${vocabData.length} Words (Advanced)</button>
        </div>
        <div id="quizScreen" style="display:none;">
          <p id="vocabQuestion" class="question-box"></p>
          <button onclick="playWordAudio()">🎧 Listen to English Word</button>
          <div id="choicesArea"></div>
          <p id="feedbackText"></p>
          <div id="progressBarContainer">
            <div id="progressBar"></div>
          </div>
          <p>⏳ Time left: <span id="timer"></span> seconds</p>
          <button id="nextVocabBtn" onclick="getVocabQuestion()" style="display:none;">Next Word</button>
          <p id="scoreText">Score: 0/${quizLength}</p>
        </div>`;
      resetQuiz();
    }

    function resetQuiz() {
      score = 0;
      totalQuestionsAnswered = 0;
      currentIndex = 0;
      updateScore();
      clearInterval(timerInterval);
      document.getElementById("progressBar").style.width = "0%";
      document.getElementById("feedbackText").textContent = "";
      document.getElementById("vocabQuestion").innerHTML = "";
      document.getElementById("choicesArea").innerHTML = "";
      document.getElementById("nextVocabBtn").style.display = "none";
    }

    function startQuiz(length) {
      quizLength = length;
      quizPool = [...vocabData].sort(() => 0.5 - Math.random()).slice(0, length); // Use a copy to avoid modifying original
      document.getElementById("startScreen").style.display = "none";
      document.getElementById("quizScreen").style.display = "block";
      updateScore(); // Update the max score in scoreText
      getVocabQuestion();
    }

    function getVocabQuestion() {
      clearInterval(timerInterval);
      timeLeft = 15; // Reset timer for each question
      document.getElementById("timer").textContent = timeLeft;
      document.getElementById("feedbackText").textContent = ""; // Clear previous feedback
      document.getElementById("nextVocabBtn").style.display = "none"; // Hide next button

      if (currentIndex >= quizLength) {
        document.getElementById("vocabQuestion").innerHTML = `🎉 Quiz Complete! Your final score is <strong style="color:var(--primary-color);">${score}/${quizLength}</strong>.`;
        document.getElementById("choicesArea").innerHTML = `
          <button onclick="selectMode('vocab')">Start New Quiz</button>
          <button onclick="selectMode('grammar')">Try Grammar Quiz</button>
        `;
        document.getElementById("timer").textContent = "";
        document.getElementById("progressBar").style.width = "100%";
        return;
      }

      currentVocab = quizPool[currentIndex];
      const allOthers = vocabData.filter(v => v.word !== currentVocab.word);
      const wrongChoices = allOthers.sort(() => 0.5 - Math.random()).slice(0, 2); // Get 2 wrong options
      const options = [currentVocab, ...wrongChoices].sort(() => 0.5 - Math.random());

      document.getElementById("vocabQuestion").innerHTML =
        `What is the Khmer translation of "<strong>${currentVocab.word}</strong>"?`;

      const choicesArea = document.getElementById("choicesArea");
      choicesArea.innerHTML = "";
      options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.khmer;
        btn.onclick = () => checkAnswer(btn, opt.khmer);
        choicesArea.appendChild(btn);
      });

      // Enable all buttons
      document.querySelectorAll("#choicesArea button").forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
      });

      updateProgress();
      startTimer();
    }

    function checkAnswer(button, selectedKhmer) {
      clearInterval(timerInterval); // Stop the timer
      totalQuestionsAnswered++;

      // Disable all buttons to prevent multiple clicks
      document.querySelectorAll("#choicesArea button").forEach(btn => btn.disabled = true);

      if (selectedKhmer === currentVocab.khmer) {
        score++;
        document.getElementById("feedbackText").textContent = "✅ Correct! Good job!";
        document.getElementById("feedbackText").style.color = "green";
        button.classList.add('correct');
      } else {
        document.getElementById("feedbackText").textContent =
          `❌ Incorrect. The correct answer was: "${currentVocab.khmer}" (${currentVocab.word})`;
        document.getElementById("feedbackText").style.color = "red";
        button.classList.add('incorrect');
        // Highlight the correct answer
        Array.from(document.querySelectorAll("#choicesArea button")).find(btn => btn.textContent === currentVocab.khmer).classList.add('correct');
      }
      updateScore();
      currentIndex++;
      document.getElementById("nextVocabBtn").style.display = "block"; // Show next button after answer
    }

    function updateScore() {
      document.getElementById("scoreText").textContent = `Score: ${score}/${quizLength}`;
    }

    function updateProgress() {
      const progress = Math.round((currentIndex / quizLength) * 100);
      document.getElementById("progressBar").style.width = `${progress}%`;
      document.getElementById("progressBar").textContent = `${progress}%`;
    }

    function startTimer() {
      timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          document.getElementById("feedbackText").textContent =
            `⏰ Time's up! The correct answer was: "${currentVocab.khmer}" (${currentVocab.word})`;
          document.getElementById("feedbackText").style.color = "orange";
          totalQuestionsAnswered++;
          updateScore();
          currentIndex++;
          document.getElementById("nextVocabBtn").style.display = "block"; // Show next button
          // Disable all buttons as time is up
          document.querySelectorAll("#choicesArea button").forEach(btn => btn.disabled = true);
        }
      }, 1000);
    }

    function playWordAudio() {
      if (currentVocab) {
        const utterance = new SpeechSynthesisUtterance(currentVocab.word);
        utterance.lang = 'en-US';
        speechSynthesis.speak(utterance);
      }
    }

    // Initialize with Vocabulary Quiz
    selectMode('vocab');
 
