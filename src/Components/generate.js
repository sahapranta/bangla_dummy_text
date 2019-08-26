const shuffled = "চলিত ভাষার সামগ্রিক উপস্থাপনই ঘটে মান কথ্য বাংলা ভাষা (ভাগীরথী) জনপদের রীতিকে আশ্রয় করে। যেহেতু চলিত গদ্যরীতি কথ্য ভাষার অনুসারী, সেহেতু রীতিতে ক্রিয়াপদ সর্বনামের রূপগুলি মৌখিক রূপের কাছাকাছি; আর বিশেষ করে ক্রিয়াপদের আকৃতি হয় সংকুচিত। চলিত ভাষা সর্বদাই নতুন নতুন ধ্বনিপরিবর্তনের নিয়মকে মেনে চলে; ফলে সাধু ভাষার চেয়ে চলিত ভাষায় শব্দের রূপান্তর অধিক পরিলক্ষিত হয়। চলিত ভাষার ওপর স্বরসঙ্গতি অভিশ্রুতির প্রভাব বিশেষভাবে লক্ষণীয়। সাধু ভাষা সাধারণত গুরুগম্ভীর প্রকৃতির, কিন্তু চলিত ভাষা অপেক্ষাকৃত লঘু আবার চলিত ভাষার একটা সাবলীল স্বচ্ছন্দ গতি আছে সাধু ভাষায় সুলভ নয়। দৈনন্দিন ব্যবহারিক ক্ষেত্র থেকে শুরু করে জীবনের সর্বস্তরে এখন চলিত ভাষা ব্যবহূত হচ্ছে। চলিত ভাষা বাংলা লেখ্য গদ্যরীতির দুটি রূপের একটি, অপরটি সাধু ভাষা। উনিশ শতকের তৃতীয় দশকে ভবানীচরণ বন্দ্যোপাধ্যায়ের হাতে রীতির প্রথম ব্যবহার হয়। তারপর প্যারীচাঁদ মিত্র কালীপ্রসন্ন সিংহের রচনায় এর ক্রমবিকাশ ঘটে প্রমথ চৌধুরীর সবুজপত্রকে কেন্দ্র করে ১৯১৪ সালের দিকে গদ্যরীতি সাহিত্যিক স্বীকৃতি পূর্ণ বিকাশ লাভ করে। আধুনিক যুগে চলিত ভাষার ক্রমবর্ধিষ্ণু প্রভাব, প্রসার প্রতিপত্তি ঘটেছে; সাধু ভাষার ব্যবহার কেবল ক্ষেত্রবিশেষে এখনও টিকে আছে।";
const words = shuffled.split(' ');

export const gen = (numParagraphs,numSentences, phrases )=>{
    var text = "";

      if(numParagraphs < 1){
        return text;
      }

     // build each paragraph based on user input
      for(var i = 0; i < numParagraphs; i++){        
        var paragraph = "";
        // build each sentence based on user input
        for(var j = 0; j < numSentences; j++){
          // sentence placeholder
          var sentence = "";
          // 10 - 15 words per sentence, randomly, then loop that many times, grabbing random word
          var numWords = Math.floor((Math.random()*6)+10);
          for(var k = 0; k < numWords; k++){
            var word = "";
            // get random index for words array
            var wordNum = Math.floor(Math.random()*words.length);            
            word = words[wordNum];

            // if its not the first word, put a space in front of it
            if (k !== 0){
              sentence += " ";
            }
            // add word to sentence placeholder and run word choosing loop again
            sentence += word;
          }
          // when word loop complete, punctuate sentence
          sentence += "।";
          // capitalized first letter of the sentence
         //  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);;

          // add the sentence and space after to the paragraph
          paragraph += sentence;
          paragraph += " ";
        }
        // when sentence loop complete, added p tags for formatting and insert into text placeholder
        paragraph = "<p>" + paragraph + "</p>\n";
        text += paragraph;
      }
      return text;
}