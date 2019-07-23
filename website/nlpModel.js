console.log('start');
// var tags = jsonResp.description.tags;
// var description = jsonResp.description.captions[0].text;
// var confidence = jsonResp.description.captions[0].confidence;

const animal_list = ['aardvark', 'alligator', 'crocodile', 'alpaca', 'ant', 'antelope', 'ape', 'armadillo', 'ass', 'donkey', 'burro', 'baboon', 'badger', 'bat', 'bear', 'beaver', 'bee', 'beetle', 'buffalo', 'butterfly', 'camel', 'carabao', 'water buffalo', 'caribou', 'cat', 'cattle', 'cheetah', 'chimpanzee', 'chinchilla', 'cicada', 'clam', 'cockroach', 'cod', 'coyote', 'crab', 'cricket', 'crow', 'raven', 'deer', 'dinosaur', 'dog', 'dolphin', 'porpoise', 'duck', 'eagle', 'echidna', 'eel', 'elephant', 'elk', 'ferret', 'fish', 'fly', 'fox', 'frog', 'toad', 'gerbil', 'giraffe', 'gnat', 'gnu', 'wildebeest', 'goat', 'goldfish', 'goose', 'gorilla', 'grasshopper', 'guinea pig', 'hamster', 'hare', 'hedgehog', 'herring', 'hippopotamus', 'hornet', 'horse', 'hound', 'hyena', 'impala', 'insect', 'jackal', 'jellyfish', 'kangaroo', 'wallaby', 'koala', 'leopard', 'lion', 'lizard', 'llama', 'locust', 'louse', 'macaw', 'mallard', 'mammoth', 'manatee', 'marten', 'mink', 'minnow', 'mole', 'monkey', 'moose', 'mosquito', 'mouse', 'rat', 'mule', 'muskrat', 'otter', 'ox', 'oyster', 'panda', 'pig', 'hog', 'swine', 'wild pig', 'platypus', 'porcupine', 'prairie dog', 'pug', 'rabbit', 'raccoon', 'reindeer', 'rhinoceros', 'salmon', 'sardine', 'scorpion', 'seal', 'sea lion', 'serval', 'shark', 'sheep', 'skunk', 'snail', 'snake', 'spider', 'squirrel', 'swan', 'termite', 'tiger', 'trout', 'turtle', 'tortoise', 'walrus', 'wasp', 'weasel', 'whale', 'wolf', 'wombat', 'woodchuck', 'worm', 'yak', 'yellowjacket', 'zebra']
const gender_list = ['girl', 'boy', 'lady', 'gentleman', 'man', 'woman']

function animal_count(des) {
    let animal_count = 0;
    var wanted_animal = "____";
    const length = animal_list.length;
    console.log(length);
    for (var i=0; i < animal_list.length; i++){
        //console.log(animal_list[i], des, i);
        console.log(i);
        console.log(des);
        //console.log(des.length);
        if (des.includes(animal_list[i])) {
            animal_count++;
            console.log("hit");
            var wanted_animal = animal_list[i];
        }
    }
    console.log("final_count:", animal_count)
    console.log(wanted_animal);
    return [animal_count, wanted_animal]
}


function animal_check(count, animal, des, tag_list){
    new_des = des;
    if (count == 0) {
        var new_des = des;
    }
    else if (count > 1) {
        var new_des = des;
    }
    else if (count == 1) {
        console.log('count hit')
        if (tag_list.includes("mammal")){
            console.log('mammal hit')
            var new_des = des.replace(animal, "mammal");
            console.log(new_des)
        }
        else if (tag_list.includes("animal")){
            var new_des = des.replace(animal, "animal");
        }
    }
    return ["okay", new_des]
}


function total_gender_count(des){
    let gender_count = 0
    for (var i=0; i < gender_list.length; i++) {
        if (des.includes(gender_list[i])){
            gender_count++
        }
    }
    return gender_count  
}

function gender_check(animal_bool_des){
    var new_description = animal_bool_des[1]
    for (var i=0; i < gender_list.length; i++){
        if (new_description.includes(gender_list[i])){
            gender_count+=1
            var new_description = new_description.replace(gender, "person")
        }
    }
    var new_des = new_description  
    return new_des     
}         

function final_caption(final_tags, final_description, final_confidence){
    console.log(final_tags);
    console.log(final_confidence);
    console.log(final_description);
    if (final_confidence < 0.70){
        console.log("hittttt", final_description)
        var animal_number = animal_count(final_description)[0]
        var wanted_animal = animal_count(final_description)[1]
        console.log("animal", animal_number[0])
        var animal_des = animal_check(animal_number, wanted_animal, final_description, final_tags) 
        var ans = gender_check(animal_des)
        print(ans)
        console.log(ans)
        return ans
    }
    else{
        console.log(final_description)
        return final_description
    }
}
