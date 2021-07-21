function mainContent(){
  return {
    mobileMenu: false, //
    menuAsider: false,
    display: '4',
    modalOpen:false,
    modalUrl:'',
    modalText:'',
    init(){

    },
    mobileMenuClick(){
      this.menuAsider = !this.menuAsider;
    },
    asideMenuClick(index){
      this.display = index;
      this.menuAsider = false;
    },
    modalPopUp(url, text){
      this.modalUrl = 'image/' + url;
      this.modalText = text;
      this.modalOpen = true;
    }
  }
}

function typingWord() {
  return {
    i: 0,
    words: ["熱愛籃球運動 維持體能", "喜歡程式設計 邏輯思考", "喜歡打遊戲 增加腦力激盪", "休閒旅遊 放鬆心情 增進人際關係"],
    seletedWord: "",
    string: "",
    init() {
      this.selectWord();
    },
    selectWord() {
      if(this.i >= this.words.length) this.i = 0;
      this.seletedWord = this.words[this.i++];
      this.run(this.seletedWord);
    },
    run(word) {
      let index = 0;
      let startInterval = setInterval(() => {
        this.string = this.seletedWord.substr(0, index++);
        if (index > this.seletedWord.length) {
          clearInterval(startInterval);
          setTimeout(() => {
            this.back();
          }, 2000);
        }
      }, 150);
    },
    back() {
      let index = this.string.length;
      let backInterval = setInterval(() => {
        this.string = this.string.substr(0, index);
        if (index == 0) {
          clearInterval(backInterval);
          setTimeout(() => {
            this.selectWord();
          }, 1000);
        }
        index--;
      }, 100);
    }
  };
}