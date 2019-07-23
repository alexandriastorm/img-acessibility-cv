function nlpModel() {
    let animal_list = ['aardvark', 'alligator', 'crocodile', 'alpaca', 'ant', 'antelope', 'ape', 'armadillo', 'ass', 'donkey', 'burro', 'baboon', 'badger', 'bat', 'bear', 'beaver', 'bee', 'beetle', 'buffalo', 'butterfly', 'camel', 'carabao', 'water buffalo', 'caribou', 'cat', 'cattle', 'cheetah', 'chimpanzee', 'chinchilla', 'cicada', 'clam', 'cockroach', 'cod', 'coyote', 'crab', 'cricket', 'crow', 'raven', 'deer', 'dinosaur', 'dog', 'dolphin', 'porpoise', 'duck', 'eagle', 'echidna', 'eel', 'elephant', 'elk', 'ferret', 'fish', 'fly', 'fox', 'frog', 'toad', 'gerbil', 'giraffe', 'gnat', 'gnu', 'wildebeest', 'goat', 'goldfish', 'goose', 'gorilla', 'grasshopper', 'guinea pig', 'hamster', 'hare', 'hedgehog', 'herring', 'hippopotamus', 'hornet', 'horse', 'hound', 'hyena', 'impala', 'insect', 'jackal', 'jellyfish', 'kangaroo', 'wallaby', 'koala', 'leopard', 'lion', 'lizard', 'llama', 'locust', 'louse', 'macaw', 'mallard', 'mammoth', 'manatee', 'marten', 'mink', 'minnow', 'mole', 'monkey', 'moose', 'mosquito', 'mouse', 'rat', 'mule', 'muskrat', 'otter', 'ox', 'oyster', 'panda', 'pig', 'hog', 'swine', 'wild pig', 'platypus', 'porcupine', 'prairie dog', 'pug', 'rabbit', 'raccoon', 'reindeer', 'rhinoceros', 'salmon', 'sardine', 'scorpion', 'seal', 'sea lion', 'serval', 'shark', 'sheep', 'skunk', 'snail', 'snake', 'spider', 'squirrel', 'swan', 'termite', 'tiger', 'trout', 'turtle', 'tortoise', 'walrus', 'wasp', 'weasel', 'whale', 'wolf', 'wombat', 'woodchuck', 'worm', 'yak', 'yellowjacket', 'zebra']
    let gender_list = ['girl', 'boy', 'lady', 'gentleman', 'man', 'woman']
}

function animal_count() {
    let animal_count = 0
    wanted_animal = "____"
    for (animal in animal_list){
        if (animal in description) {
            animal_count+=1
            wanted_animal = animal
        }
    }
    return animal_count, wanted_animal
}


tags = ["animal","mammal","cat","sitting","indoor","orange","blue","bed","looking","small","brown","white","laying","snow","close","yellow"]
description = "a close up of a cat"
confidence = 0.4211720594208484


function animal_check(count, animal){
    if (count == 1) {
        new_des = description
}
    if (count > 1) {
        new_des = description
    }
    else if (count == 1) {
        if ("mammal" in tags){
            new_des = description.replace(animal, "mammal")
        }
        else if ("animal" in tags){
            new_des = description.replace(animal, "animal")
        }
    }
    return True, new_des
}


function total_gender_count(){
    gender_count = 0
    for (gender in gender_list) {
        if (gender in description){
            gender_count+=1
        }
    }
    return gender_count  
}

function gender_check(count, animal_bool_des){
    word = animal_bool_des[1]
    if (count == 0){
        new_des = word
    }
    else{
        new_description = animal_bool_des[1]
        for (gender in gender_list){
            gender_count = 0
            if (gender in new_description){
                gender_count+=1
            }
            new_description = new_description.replace(gender, "person", gender_count)
        }
        new_des = new_description
    return new_des  
    }      
}         

function main(){
    if (confidence < 0.6){
        animal_number = animal_count()[0]
        animal_des = animal_check(animal_number, animal_count()[1]) 
        gender_number = total_gender_count()
        ans = gender_check(gender_number, animal_des)
        print(ans)
        return ans
    }
    else{
        return description
    }
}
    
if (__name__ == "__main__"){
    main()
    print(True)
}


console.log(main())