    
    // onChange = require('on-change');
    // import ws from 'ws';
    // import {makeHTTPDriver} from '@cycle/http';
    // import {require} from "requirejs";
    Maybe = require('folktale/maybe');
    // compose = require('folktale/core/lambda/compose');
    import {h,p,span,h1,h2,h3,pre,a,br,div,label,input,hr,makeDOMDriver} from '@cycle/dom';
    import Cycle from '@cycle/xstream-run';
    import code from './code.js';
    import {run} from './cycle-run.js';
    console.log("onChange is", onChange);

    //  socket = new WebSocket("ws://localhost:3055");
    socket = new WebSocket("ws://204.48.16.214:3055");
    // socket = new WebSocket("ws://142.93.205.167:3055");
    // socket = new WebSocket("ws://schalk.net:3055");
    // socket = new WebSocket("ws://schalk.site:3055");
    // ws = new WebSocket("ws://echo.websocket.org");


console.log('<$><$><$><$><$><$><$><$><$><$><$><$><$><$> require', require);



    function bNode(arr) {
      var x = styl(arr.length);
      var node = h('div#bNode', [
        h('button#0.num', {
          style: {
            display: x[0]
          }
        }, ' ' + arr[0] + ' '),
        h('button#1.num', {
          style: {
            display: x[1]
          }
        }, ' ' + arr[1] + ' '),
        h('button#2.num', {
          style: {
            display: x[2]
          }
        }, ' ' + arr[2] + ' '),
        h('button#3.num', {
          style: {
            display: x[3]
          }
        }, ' ' + arr[3] + ' ')
      ]);
      return node;
    }


    MonadState.prototype.dec = function () {
      this.s[1] -= 1;
      buttonNode = bNode(this.s[0][this.s[1]][4]);
      socket.send(`CG#$42,${pMgroup.x},${pMname.x},${
      this.s[0][this.s[1]][0]},${this.s[0][this.s[1]][1]}`)
      window[this.id] = this;
      return this;
    };

    MonadState.prototype.inc = function () {
      this.s[1] += 1
      buttonNode = bNode(this.s[0][this.s[1]][4]);
      socket.send(`CG#$42,${pMgroup.x},${pMname.x},${this.s[0][this.s[1]][0]},${this.s[0][this.s[1]][1]}`)
      window[this.id] = this;
      return this;
    };

    MonadState.prototype.run = function ([
      score = this.s[0][this.s[1]][0],
      goals = this.s[0][this.s[1]][1],
      operator = this.s[0][this.s[1]][2],
      picked = this.s[0][this.s[1]][3].slice(),
      display = this.s[0][this.s[1]][4].slice(),
      playerName = pMname.x,
      playerGroup = pMgroup.x
    ]) {
      pMscore.ret(score);
      pMgoals.ret(goals);
      pMgroup.ret(playerGroup);
      this.s[1] += 1;
      var newState = this.s.slice();
      newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display, playerName, playerGroup])
      this.s = newState;
      buttonNode = bNode(display);
      return window['gameMonad'] = new MonadState('gameMonad', newState);
    }

    function updateCalc(ar, op) {
      var result = calc(ar[0], op, ar[1]);
      ar
      if (result === 18 || result === 20) {
        score(result);
      } else {
        var a = gameMonad.fetch4().slice();
        a.push(result);
        gameMonad.run([, , 0, [], a, , ]);
      }
    };

    function process(a) { //Assembles the HTML for display.
      var arr = a;
      commentMonad.html = [];
      var n = -1;
      arr.map(a => {
        var x = a.split("<o>");
        if (x.length != 2) x = ['malfunction', '8888']
        x[1] = x[1].replace(/<<>>/g, ',');
        var show = showFunc(x[0], pMname.x);
        n += 1;
        commentMonad.html.push(h('div#' + n, [
          h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
          h('br'),
          h('textarea#commit', {
            props: {
              cols: 55,
              rows: 2
            },
            style: {
              display: show
            }
          }, x[1]),
          h('button#deleteB', {
            props: {
              innerHTML: 'delete'
            },
            style: {
              display: show,
              fontSize: 14
            }
          }),
          h('br'),
          h('span', '***************************************************************')
        ]))
      })
    }

    function pfactors(primes, n) {
      var ar = [];
      while (n != 1) {
        primes.map(p => {
          if (n / p === Math.floor(n / p)) {
            ar.push(p);
            n = n / p;
          };
        })
      }
      return ar;
    }

    MonadState3.prototype.init = function (str) { // All comments delivered on load.
      this.s[0] = str;
      this.s[1] = this.s[0].split("<@>");
      this.s[1] = this.s[1].filter(v => (v != ""));
      result444 = process(this.s[1]);
    }

    MonadState3.prototype.append = function (str) {
      this.s[0] = this.s[0] + str;
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      process(this.s[1]);
    }

    MonadState3.prototype.edit = function (num, txt) {
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      this.s[1].splice(num, 1, txt);
      this.s[0] = this.s[1].join("<@>");
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      console.log('this.s[1]', this.s[1]);
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      process(this.s[1]);
    };

    MonadState3.prototype.remove = function (num) {
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      console.log(this.s[1]);
      this.s[1] = this.s[1].filter(v => v !== '');
      console.log(this.s[1]);
      this.s[1].splice(num, 1);
      console.log(this.s[1]);
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      this.s[0] = this.s[1].join("<@>");
      process(this.s[1]);
    };

    MonadState3.prototype.init = function (str) { // All comments delivered on load.
      this.s[0] = str;
      this.s[1] = this.s[0].split("<@>");
      this.s[1] = this.s[1].filter(v => (v != ""));
      result444 = process(this.s[1]);
    }

    MonadState3.prototype.append = function (str) {
      this.s[0] = this.s[0] + str;
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      process(this.s[1]);
    }

    MonadState3.prototype.edit = function (num, txt) {
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      this.s[1].splice(num, 1, txt);
      this.s[0] = this.s[1].join("<@>");
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      console.log('this.s[1]', this.s[1]);
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      process(this.s[1]);
    };

    MonadState3.prototype.remove = function (num) {
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      console.log(this.s[1]);
      this.s[1] = this.s[1].filter(v => v !== '');
      console.log(this.s[1]);
      this.s[1].splice(num, 1);
      console.log(this.s[1]);
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      this.s[0] = this.s[1].join("<@>");
      process(this.s[1]);
    };

    it7 = () => mMZ52.bnd(string => {
      callOrder = callOrder > 24 ? 1 : callOrder + 1;
      if (callOrder === 1) start77 = Date.now();
      m42_.push(callOrder + "  ");
      m42_.push(string)
      m42_.push(h('br'));
      if (callOrder === 25) m42_.push('Elapsed time: ' + (Date.now() - start77) + " ms");
    });

    it7_b = () => mMZ53.bnd(string => {
      callOrder2 = callOrder2 > 24 ? 1 : callOrder2 + 1;
      if (callOrder2 === 1) start78 = Date.now();
      m43_.push(callOrder2 + "  ");
      m43_.push(string)
      m43_.push(h('br'));
      // console.log('In local main.js, >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> it7_b -- m43_ is', m43_);
      if (callOrder2 === 25) m43_.push('Elapsed time: ' + (Date.now() - start78) + " ms");
    });

    var funcP = () => {
      var fred = [];
      bind(1)(addP(2))(cubeC)(addC(3))(multP(2))(multC(3))
        (addC(30))(multP(1 / 5))(it4)(it6)(it7)().slice(1, 9)
        .map(v => v.then(q => {
          fred.push(q.x);
          freday = fred.join(' ')
          diffRender()
        }))
    }

    function websocketsDriver() {
      return xs.create({
        start: listener => {
          socket.onmessage = msg => listener.next(msg)
        },
        stop: () => {
          socket.close()
        }
      });
    };

    socket.onclose = function (event) {
      console.log('<><><> ALERT - socket is closing. <><><> ', event);
    };

    login();

    function login() {
      console.log('00000000000000000000000000000000 Entering login', socket.readyState);
      setTimeout(function () {
        if (socket.readyState === 1) {
          console.log('readyState is', socket.readyState);
          var v = Math.random().toString().substring(5);
          var v2 = v.toString().substring(2);
          var v2 = "password"
          playerName = v;
          playerGroup = "solo";
          pMname.ret(v);
          pMoldName.ret(v);
          pMgroup.ret('solo');
          gameMonad.run([0, 0, 0, [],
            [7, 7, 7, 7], v, "solo"
          ]);
          var combo = v + '<o>' + v2;
          socket.send('CC#$42' + combo);
          pMcombo.ret(combo);
          pMclicked.ret([]);
          socket.send(`GZ#$42,solo,${v}`);
        } else {
          login();
        }
      }, 1000)
    }

    function main(sources) {
      console.log('0^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ got to main()');

      const messages$ = sources.WS.map(e => {
        var v = e.data.split(',')
        var group = v[1]
        var sender = v[2];
        var extra = v[3];
        var extra2 = v[4];

        mMZ9.bnd(() => {
          console.log("sender is", sender);
          console.log("extra is", extra);
          console.log("The full message is", e);
          console.log("v is", v);
        });

        mMZ10.bnd(() => {
          if (sender === pMname.x) {
            gameMonad.run([v[7], v[8], 0, [],
              [v[3], v[4], v[5], v[6]]
            ]);
          } else gameMonad.run([, , , [],
            [v[3], v[4], v[5], v[6]]
          ]);
        });

        mMZ11.bnd(() => {
          console.log('The message arrived', messages$);
          var message = v.slice(3, v.length).join(', ');
          var str = v[2] + ': ' + message;
          messages.unshift(h('span', str), h('br'));
          console.log('The message was typeof ar', typeof str);
        });

        mMZ12.bnd(() => {
          mMgoals2.ret('The winner is ' + v[2]);
          setTimeout(function () {
            mMgoals2.ret('')
          }, 700);
        });

        mMZ13.bnd(() => {
          mMgoals2.ret('A player named ' + v[2] +
            ' is currently logged in. Page will refresh in 4 seconds.')
          refresh()
        });

        mMZ14.bnd(() => {
          var ar = e.data.split("<$>")[1];
          console.log("In mZ14.bnd - - ar is", ar);
          console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzztaskMonad', taskMonad);
          return taskMonad.init(ar);
        });

        mMZ15.bnd(() => {
          var ar = [];
          var arr = v[3].slice();
          var arr2 = arr.split("<$!$>");
          var arr3 = arr2.map(v => {
            console.log('In mMZ15.bnd ar, arr, arr2, and arr3 are', ar, arr, arr2, arr3),
              ar.push(v);
            ar.push(h('br'));
          });
          gameData = ar;
        });

        mMZ16.bnd(() => { // Prefix RR#$42
          var str = mMcommentStr.x;
          if (extra2 === "code1") {
            mMregister.ret('The registered name ' + extra + ' and the associated password were recognized. ');
            socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
          }
          if (extra2 === "code2") {
            mMregister.ret('The new name ' + extra + ' was registered.');
            socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
          }
          if (extra2 === "code3") {
            pMname.ret(sender);
            mMregister.ret('The password you entered is not the password that is registered for ' + tempName + '.');
            mMshowRegister.ret('inline');
          }
        });

        mMZ17.bnd(() => { // Prefix GZ#$42
          var newStr = extra.substring(0, extra.length - 3);
          newStr = newStr.replace(/<@><@>/g, "<@>");
          newStr = newStr.replace(/↵/g, '');
          if (newStr === "") return;
          commentMonad.init(newStr);
        });

        mMZ18.bnd(() => { // Prefix GN#$42  NEW COMMENT
          commentMonad.append(extra);
        });

        mMZ19.bnd(() => { // Prefix GE#$42  EDIT A COMMENT
          commentMonad.edit(extra, extra2);
          console.log('In mMZ19 to edit a comment. <><><><><><><> extra, extra2:', extra, extra2);
        });

        mMZ20.bnd(() => { // Prefix GD#$42  DELETE A COMMENT
          commentMonad.remove(parseInt(extra, 10));
        });
        // ******************************************************* TASKS
        mMZ21.bnd(() => { // add a new a task
          console.log('ooooooooooooooooooo New task from the server', extra);
          taskMonad.append(extra);
        });

        mMZ22.bnd(() => { // edit a task
          taskMonad.edit(v[3], v[4]);
        });

        mMZ23.bnd(() => {
          console.log('In mMZ23 -- v[3] is', v[3]);
          taskMonad.toggle(v[3]);
        });

        mMZ24.bnd(() => { //Delete a task
          taskMonad.delete(v[3]);
        });

        mMZ25.bnd(() => { // Receive tasks when group changes
          console.log('QQQQQQ  Bingo! extra is QQQQQQQWWWWWWWWWWQQQQQQQQ in mMZ25.bnd. ', extra);
          taskMonad.html = taskMonad.init(extra);
        });

        mMZ27.bnd(() => {
          console.log("mMZ27 v[3]", v[3]);
          mMZ38.release(v[3]);
        });

        mMZ28.bnd(() => {
          if (playerName === sender) mMZ40.release(v[3]);
          else console.log('message from sender to BC#$42')
        });

        mMZ29.bnd(() => {
          if (playerName === sender) mMZ41.release(v[3]);
          else console.log('message from sender to BD#$42')
        });

        mMZ30.bnd(() => {
          if (playerName === sender) mMZ42.release(v[3]);
          else console.log('message from sender to BE#$42')
        });


        ret(v[0])
          .bnd(next, 'CC#$42', mMZ9)
          .bnd(next, 'CA#$42', mMZ10) // Dice roll
          .bnd(next, 'CD#$42', mMZ11)
          .bnd(next, 'CE#$42', mMZ12)
          .bnd(next, 'EE#$42', mMZ13)
          .bnd(next, 'TD#$42', mMZ14)
          .bnd(next, 'NN#$42', mMZ15)
          .bnd(next, 'RR#$42', mMZ16)
          .bnd(next, 'GZ#$42', mMZ17) // Comments automatically arrive after the app loads
          .bnd(next, 'GN#$42', mMZ18)
          .bnd(next, 'GE#$42', mMZ19)
          .bnd(next, 'GD#$42', mMZ20)
          .bnd(next, 'TA#$42', mMZ21) // Automatic task list load on group change
          .bnd(next, 'TE#$42', mMZ22) // edit a task
          .bnd(next, 'TT#$42', mMZ23) // chechbox
          .bnd(next, 'TX#$42', mMZ24) // delete button
          .bnd(next, 'TI#$42', mMZ25) // group change
          .bnd(next, 'BB#$42', mMZ27) // works in conjunction with it4
          .bnd(next, 'BC#$42', mMZ28) // works in conjunction with it4
          .bnd(next, 'BD#$42', mMZ29) // works in conjunction with it4_b
          .bnd(next, 'BE#$42', mMZ30) // works in conjunction with it4_c
      });

      function next(x, y, instance, z) {
        if (x == y) {
          instance.release(z);
        }
        return ret(x);
      };

      var mBind$ = sources.DOM.select("#makeBind").events("click");

      var mBindAction$ = mBind$.map(() => bindTest());

      var itterResult = h('div', 'ready');
      var doubleResult = h('div', 'ready');

      var comment$ = sources.DOM.select('#comment').events('keydown');

      var commentAction$ = comment$.map(e => {
        if (e.keyCode == 13) {
          e.preventDefault();
          var comment = e.target.value.replace(/,/g, "<<>>");
          comment = pMname.x + "<o>" + comment
          socket.send(`GN#$42,${pMgroup.x},${pMname.x},<@>${comment}<@>`);
        }
      });

      var deleteClick2$ = sources.DOM
        .select('#deleteB').events('click');

      var deleteAction2$ = deleteClick2$.map(function (e) {
        var index = parseInt(e.target.parentElement.id, 10);
        var old = commentMonad.s[1].slice(index, index + 1)[0];
        socket.send(`GD#$42,${pMgroup.x},${pMname.x},${index},${old}`);
      });

      var editB$ = sources.DOM
        .select('textarea#commit').events('keydown');

      var editBAction$ = editB$.map(function (e) {
        if (e.keyCode == 13) {
          var index = parseInt(e.target.parentElement.id, 10);
          var w = e.target.value.split(",");
          var nu = pMname.x + "<o>" + w.join('<<>>');
          var old = commentMonad.s[1].slice(index, index + 1)[0];
          socket.send(`GE#$42,${pMgroup.x},${pMname.x},${index},${old},${nu}`);
        }
      })

      var abcde = 'inline';
      var fghij = 'inline';

      var registerPress$ = sources.DOM
        .select('input.register').events('keypress');

      var registerPressAction$ = registerPress$.map(e => {
        mMerror.ret('');
        var str = e.target.value;
        var count = (str.match(/,/g) || []).length;
        if (count === 0) nameMess = "Please enter a name, a comma, and a password";
        else if (count > 1) nameMess = "Commas are not allowed in names or passwords";
        else nameMess = '';
        var art = str.split(',');
        if (e.keyCode === 13) {
          mMerror.ret('');
          if (art.length != 2) {
            mMerror.ret(' There should be one and only one comma');
            return;
          } else {
            var name = art[0];
            pMname.ret(art[0]);
            tempName = name;
            var x = art.join('<o>');
            mMshowRegister.ret('none');
            playerName = name;
            console.log('pMname.x is', pMname.x);
            console.log(pMname.x === playerName);
            socket.send(`RR#$42,${pMgroup.x},${pMoldName.x},${x}`);
          }
          setTimeout(function () {
            socket.send(`CG#$42,${pMgroup.x},${name},${pMscore.x},${pMgoals.x}`);
          }, 700);
        }
      });

      var groupPress$ = sources.DOM
        .select('input#group').events('keypress');

      var groupPressAction$ = groupPress$.map(e => {
        if (e.keyCode === 13 && e.target.value) {
          var g = e.target.value.replace(/,/g, '');
          send("CO#$42", g);
          gameMonad.run([0, 0, 0, [],
            [0, 0, 0, 0], , g
          ]);
          socket.send(`TI#$42,${g},${pMname.x}`);
        }
      });

      var messagePress$ = sources.DOM
        .select('input.inputMessage').events('keydown');

      var messagePressAction$ = messagePress$.map(function (e) {
        if (e.keyCode === 13) {
          socket.send(`CD#$42,${pMgroup.x},${pMname.x},${e.target.value}`);
          e.target.value = '';
        }
      });

      var updatePlayers = function updatePlayers(data) {
        sMplayers.s.clear();
        var namesL = data.split("<br>");
        namesList = namesL.slice(1);
        updateScore(namesList);
        namesList.forEach(player => sMplayers.s.add(player.trim()));
      }

      function updateScore(v) {
        var g = [];
        for (let k of v) {
          g.push(h('div', '  ' + k));
        };
        return g
      };

      var m80Change$ = sources.DOM
        .select('#m80').events('change');

      var m80Action$ = m80Change$.map(() => {});

      //****************************************************************** START MATRIX
      var indexDS = 0;

      function rMatrixF(a) {
        var cw1 = Math.sqrt(a[0] * a[5] + a[1] * a[4]);
        var cw2 = Math.sqrt(a[2] * a[7] + a[3] * a[6]);
        var cw3 = Math.sqrt(a[8] * a[13] + a[9] * a[12]);
        var cw4 = Math.sqrt(a[10] * a[15] + a[14] * a[11]);
        var cw = Math.sqrt(cw1 * cw4 + cw2 * cw3);
        return cw
      }



      var rNumsDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

      var ArrDS = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      ];

      function makeRDS(arr) {
        var r = arr;
        return [
          h('button#mR0.mR', r[0]),
          h('button#mR1.mR', r[1]),
          h('button#mR2.mR', r[2]),
          h('button#mR3.mR', r[3]),
          h('button#mR4.mR', r[4]),
          h('button#mR5.mR', r[5]),
          h('button#mR6.mR', r[6]),
          h('button#mR7.mR', r[7]),
          h('button#mR8.mR', r[8]),
          h('button#mR9.mR', r[9]),
          h('button#mR10.mR', r[10]),
          h('button#mR11.mR', r[11]),
          h('button#mR12.mR', r[12]),
          h('button#mR13.mR', r[13]),
          h('button#mR14.mR', r[14]),
          h('button#mR15.mR', r[15])
        ];
      };

      var rDataDS = [
        h('button#mR0.mR', 0),
        h('button#mR1.mR', 1),
        h('button#mR2.mR', 2),
        h('button#mR3.mR', 3),
        h('button#mR4.mR', 4),
        h('button#mR5.mR', 5),
        h('button#mR6.mR', 6),
        h('button#mR7.mR', 7),
        h('button#mR8.mR', 8),
        h('button#mR9.mR', 9),
        h('button#mR10.mR', 10),
        h('button#mR11.mR', 11),
        h('button#mR12.mR', 12),
        h('button#mR13.mR', 13),
        h('button#mR14.mR', 14),
        h('button#mR15.mR', 15)
      ];

      function rExchange(j, k, rN = rNumsDS, AR = ArrDS, rD = rDataDS, i = mMindexDS) {
        console.log("In rExchange i is", i);
        var r = rN;
        var a = r[j];
        r[j] = r[k];
        r[k] = a;
        console.log(r);
        var g = r.slice();
        AR.splice(i.x, 0, g);
        console.log(AR)
        rD = makeRDS(r);
        return rD;
      }

      var horseDS = rDataDS;
      //****************************************************************** END MATRIX

      var rNuS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      var rGrid$ = rNuS => xs.of(rNuS);

      function gridDriver() {
        return xs.create({
          start: listener => {
            rGrid$ = ar => listener.next(ar)
          },
          stop: () => {}
        })
      };

      function rExDS([, rN = rNumsDS, AR = ArrDS, rD = rDataDS, i = mMindexDS]) {
        console.log("In rExchange i is", i);
        var j = ar[0];
        var k = ar[1];
        var r = rN;
        var a = r[j];
        r[j] = r[k];
        r[k] = a;
        console.log(r);
        var g = r.slice();
        AR.splice(i.x, 0, g);
        console.log(AR)
        rD = makeRDS(r);
        return rD;
      }


      function rClick() {
        document.getElementById('rNums').click()
      };

      var indexDS = 0;

      var m80$ = sources.DOM
        .select('#mR0').events('click')
        .map(e => {
          console.log("e is", e);
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m81$ = sources.DOM
        .select('button#mR1.mR').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m82$ = sources.DOM
        .select('#mR2.mR').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m83$ = sources.DOM
        .select('button#mR3').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m84$ = sources.DOM
        .select('button#mR4').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m85$ = sources.DOM
        .select('button#mR5').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m86$ = sources.DOM
        .select('button#mR6').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m87$ = sources.DOM
        .select('button#mR7').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m88$ = sources.DOM
        .select('button#mR8').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m89$ = sources.DOM
        .select('button#mR9').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m810$ = sources.DOM
        .select('button#mR10').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m811$ = sources.DOM
        .select('button#mR11').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m812$ = sources.DOM
        .select('button#mR12').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m813$ = sources.DOM
        .select('button#mR13').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m814$ = sources.DOM
        .select('button#mR14').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m815$ = sources.DOM
        .select('button#mR15').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      function rGridFunc(a = rADS, i = mMindexDS) {
        i.ret(i.x + 1);
        rExchange(a[0], a[1]);
        a = [];
      };

      var gridCh$ = sources.DOM
        .select('#gridInput').events('change');

      var backCl$ = sources.DOM
        .select('#gridBack').events('click')

      var bAction$ = backCl$.map(() => {
        if (mMindexDS.x > 0) {
          mMindexDS.ret(mMindexDS.x - 1);
          console.log("Blow me");
          rNumsDS = ArrDS[mMindexDS.x].slice();
        };
      });

      var forwardCl$ = sources.DOM
        .select('#gridForward').events('click')

      var fAction$ = forwardCl$.map(() => {
        if (mMindexDS.x + 1 < ArrDS.length) {
          mMindexDS.ret(mMindexDS.x + 1);
          rNumsDS = ArrDS[mMindexDS.x].slice();
        };
      });






      //*********************** ZULU ********************************* END MATRIX




      var rollClick$ = sources.DOM
        .select('#roll').events('click');

      var rollClickAction$ = rollClick$.map(() => {
        var a = gameMonad.fetch0() - 1;
        var b = gameMonad.fetch1();
        socket.send(`CA#$42,${pMgroup.x},${pMname.x},6,6,12,20,${a},${b}`);
      });

      var numClick$ = sources.DOM
        .select('.num').events('click');

      var numClickAction$ = numClick$.map(e => {
        if (gameMonad.fetch3().length < 2) {
          var a = gameMonad.fetch3();
          var b = gameMonad.fetch4();
          a.push(b.splice(e.target.id, 1)[0]);
          gameMonad.run([, , , a, b, , ]);
          if (a.length === 2 && gameMonad.fetch2() != 0) {
            updateCalc(a, gameMonad.fetch2())
          }
        }
      }).startWith([0, 0, 0, 0]);

      var opClick$ = sources.DOM
        .select('.op').events('click');

      var opClickAction$ = opClick$.map(e => {
        var s3 = gameMonad.fetch3();
        if (s3.length === 2) {
          updateCalc(s3, e.target.innerHTML);
        } else {
          gameMonad.run([, , e.target.innerHTML, , , , ]);
        }
      });

      var forwardClick$ = sources.DOM
        .select('#ahead.tao1').events('click')

      var backClick$ = sources.DOM
        .select('#back.tao100').events('click');

      var backAction$ = backClick$.map(() => {
        if (gameMonad.s[1] > 0) {
          gameMonad.dec();
        }
      });

      var forwardAction$ = forwardClick$.map(() => {
        if (gameMonad.s[1] < gameMonad.s[0].length - 1) {
          gameMonad.inc();
        }
      });

      // ******************************************************************** <><><><><><> -> End Demos
      var itterPress$ = sources.DOM
        .select('#itter').events('keypress');
      var itterADSction$ = itterPress$.map(e => {
        if (e.keyCode === 13) {
          itterResult = h('div', styleFunc(["#FFD700", , "16px", , , ]), bind(pInt(e.target.value))(v => v)(() => mMZ23.bnd(v => v * v * v))(() => 3)(x => mMZ23.release(3) + x)(q => q * q / ar[1])(terminate).join(', '));
        }
      });

      var doublePress$ = sources.DOM
        .select('#double').events('keypress');

      var doubleAction$ = doublePress$.map(e => {
        var dRes = "";
        if (e.keyCode === 13) {
          bind(3)
            (cubeP)(addP(3))(c => ar[1]
              .then(v => v - 75 + c * ar[0]))(terminate)
            .map(v => v.then ? v.then(s =>
              dRes = dRes + s + ', ') : dRes = dRes + v + ', ')
        }
      });

      // ******************************************************************** <><><><><><> -> End Demos

      var fib2 = function fib2(v) {
        if (v[2] > 1) {
          mMfib.ret([v[1], v[0] + v[1], v[2] - 1]);
        } else {
          mM19.ret(v[0]);
        }
      };

      var fibPress$ = sources.DOM
        .select('input#code').events('keydown');

      var fibPressAction$ = fibPress$.map(function (e) {
        if (e.target.value === '') {
          return;
        };
        if (e.keyCode === 13) {
          mM21.ret(e.target.value);
          fib2([0, 1, e.target.value]);
        }
      });

      var printingPress$ = sources.DOM
        .select('input#demo2').events('keydown');

      var demo2Action$ = printingPress$.map(function (e) {
        if (e.target.value === '') return;
        if (e.keyCode === 13) {
          Bind.bind1 = [];
          bind1(e.target.value)(cubeP)
            (() => idP(Bind.bind1[0] - Bind.bind1[1]))
            (v => addP(Bind.bind1[1])(v))
        };
      });


      // *******************************************n****************************** ENDOM iginal Fibonacci END

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START PRIME FIB
      var topPrime = 2;
      var fS = [2]
      var pFS = [2];



      const workerB$ = sources.WWB.map(m => {
        if (m.data[3] === 'color') {
          fill1Monad.ret(m.data[0]);
          fill2Monad.ret(m.data[1]);
          fill3Monad.ret(m.data[2]);
          mMprimeBlurb.ret(m.data[5]);
          mMfibBlurb.ret(m.data[4]);
          mMprimeFibBlurb.ret(m.data[6]);
        } else {
          fS = m.data[1].join(', ');
          pFS = m.data[2].join(', ');
          mMelapsed.ret(elapsed(m.data[3]))
          if (m.data[0].length > primeState2.length) {
            primeState2 = m.data[0];
            fibState = m.data[1];
            prFibState = m.data[2];
            var topP = primeState2.slice(-1);
            topPrime = topP.toString();
          }
        }
      });

      var fibKeyPress5$ = sources.DOM
        .select('input#fib92').events('keyup');

      var primeFib$ = fibKeyPress5$.map(num => {
        var n = num.target.value;
        var j = Math.sqrt(n);
        var k = primeState2.slice(-1)[0];
        if (k > j) {
          var t = Date.now();
          var fibs = fibState.slice(0, fibState.indexOf(fibState.find(e => e > n)));
          fS = fibs.join(', ');
          var prFibs = fibs.filter(n => prFibState.indexOf(n) !== -1);
          pFS = prFibs.join(', ');
          mMelapsed.ret(elapsed(t));
          diffRender();
        } else {
          workerB.postMessage([primeState2, fibState, prFibState, n]);
        }
      });

      var clearprimes$ = sources.DOM
        .select('#clearprimes').events('click')
        .map(() => mMres.ret([mMres.x[0], '', mMres.x[2], mMres.x[3]]));


      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  Begin Easy


      //******************************************************************* worker
      m42_RES = [];
      m43_RES = [];

      var clearClick$ = sources.DOM
        .select('button.clear_P').events('click')
        .map(e => {
          m42_RESULT = [];
          m42_RESULT2 = [];
        })

      var factors2Press$ = sources.DOM
        .select('button.factors_P').events('click');

      var factors2Action$ = factors2Press$.map(function (e) {
        var factors = [];
        mMfactors3.ret('');
        bind(65)(cubeC)(it4)(it6)(it7);
      });

      workerG$ = sources.WWG.map(m => {
        console.log("Message from workerG", m);
        m778_RESULT = result778(m.data);
        mMZ38.release(m.data);
        if (m.data) {
          console.log('GOOD m.data')
        } else {
          return "cow"
        }
        if (m.target) {
          console.log('GOOD m.target')
        } else {
          return "shit"
        }
        if (m.data[1]) {
          console.log('GOOD m.data[1]')
        } else {
          return 'donkey'
        }
        if (m.target.ar2) {
          console.log('GOOD m.data.ar2')
        } else {
          return 'dung'
        }

      });

      workerL$ = sources.WWL.map(m => {
        console.log("Message from workerL$ MMMMMMMMMMMMMMMMMMMMMMMMMM Here it is:", m);
        m779_RESULT = result779(m.data);
        console.log("Still in workerL$ -- m779_RESULT is", m779_RESULT);
        mMZ39.release(m.data);
        if (m.data) {
          console.log('GOOD m.data')
        } else {
          return "cow"
        }
        if (m.target) {
          console.log('GOOD m.target')
        } else {
          return "shit"
        }
        if (m.data[1]) {
          console.log('GOOD m.data[1]')
        } else {
          return 'donkey'
        }
        if (m.target.ar2) {
          console.log('GOOD m.data.ar2')
        } else {
          return 'dung'
        }

      });

      var clearClick7$ = sources.DOM
        .select('button.clear_Q').events('click')
        .map(() => {
          m42_ = [];
        })

      var factorsClick7$ = sources.DOM
        .select('button#factors_Q').events('click');

      var factorsAction7$ = factorsClick7$.map(e => {
        m42_ = [];
        Bind.bind0 = [];
        let ii = 0;
        while (ii < 25) {
          bind(145)(x => x ** 3)(it4)(it6)(it7);
          ii += 1;
        }
      });

      var clearClick8$ = sources.DOM
        .select('button.clear_R').events('click')
        .map(() => {
          m43_ = [];
        })

      var factorsClick8$ = sources.DOM
        .select('button#factors_R').events('click');

      var factorsAction8$ = factorsClick8$.map(e => {
        m43_ = [];
        console.log("Boo!");
        var i = 0;
        m43_ = [];
        var bi = mBnd();
        var bind = bi.run();
        while (i < 25) {
          bind(145)(x => x ** 3)(it4_b)(it6_b)(it7_b)();
          i += 1;
        }
      });



      var clearClick9$ = sources.DOM
        .select('button.clear_S').events('click')
        .map(() => {
          m44_ = [];
        })

      var factorsClick9$ = sources.DOM
        .select('button#factors_S').events('click');

      var factorsAction9$ = factorsClick9$.map(() => {
        m44_ = [];
        var i = 0;
        var bb = Bind("bb"); 
        while (i < 25) {
          bb(145)(x => x * x * x)(it4_c)(it6_c)(it7_c);
          console.log("bb is", bb);
          i += 1;
        }
      });

      workerH$ = sources.WWH.map(m => {
        mMZ52.release(m.data[1]);
        var w = m.data[0][m.data[0].length - 1];
        if (m.data[0].length > primeState.length) primeState = m.data[0];
      });

      var factors3Press$ = sources.DOM
        .select('input#factors').events('keypress');

      var factors3Action$ = factors3Press$.map(function (e) {
        if (e.keyCode === 13) {
          bind(e.target.value)(it8);
        }
      });


      workerL$ = sources.WWL.map(m => {
        mMZ53.release(m.data[1]);
        var w = m.data[0][m.data[0].length - 1];
        if (m.data[0].length > primeState.length) primeState = m.data[0];
      });

      workerM$ = sources.WWM.map(m => {
        mMZ53.release(m.data[1]);
        var w = m.data[0][m.data[0].length - 1];
        if (m.data[0].length > primeState.length) primeState = m.data[0];
      });

      var factors3Press$ = sources.DOM
        .select('input#factors').events('keypress');

      var factors3Action$ = factors3Press$.map(function (e) {
        if (e.keyCode === 13) {
          bind(e.target.value)(it8);
        }
      });

      mMZ40.bnd(v => {
        console.log("Now <E><E><E><E><E><E><E><Edward the Late>>>>>>>>>>posting to workerH -- v is", v);
        workerH.postMessage([primeState, v])
      });

      mMZ41.bnd(v => {
        console.log("Now <E><E><E><E><E><E><E><Edward the Late>>>>>>>>>>posting to workerL -- v is", v);
        workerL.postMessage([primeState, v])
      });

      const result778 = x => h('div', [
        m778_RESULT,
        h('br'),
        h('span', bigBlue, x[3]),
        h('span', bigGreen, x[0]),
        h('span', bigBlue, x[4]),
        h('span', bigRed, x[5]),
      ]);

      var m778_RESULT = h('div', '');

      const result779 = x => h('div', [
        m779_RESULT,
        h('br'),
        h('span', bigBlue, x[3]),
        h('span', bigGreen, x[0]),
        h('span', bigBlue, x[4]),
        h('span', bigRed, x[5]),
      ]);

      var m779_RESULT = h('div', '');


      var mMZ33Func = x => mMZ33
        .bnd(x => {
          mMt32 = new Monad(x, 'mMt32');
          mMt33.ret(x + ' cubed is ' + x * x * x)
          mMZ33Func(x + 1);
        });

      mMZ33Func(0);

      var testZ = sources.DOM
        .select('#testZ').events('click');

      var testZAction$ = testZ.map(function () {
        mMZ33.release(mMt32.x + 1);
      });

      var testQ = sources.DOM
        .select('#testQ').events('click');

      var testQAction$ = testQ.map(() => {
        mMZ33.release(0);
        diffRender();
      });

      var testW = sources.DOM
        .select('#testW').events('keypress');

      var testWAction$ = testW.map(function (e) {
        if (e.keyCode === 13) {
          mMZ33.release(parseInt(e.target.value, 10));
          diffRender();
        }
      });
      //*********************************** pingpong ***************  START


      var ping = n => ar => {
        var k = Math.floor(Math.random() * 5) + 1;
        if (ar[0] > 10 || ar[1] > 10) {
          diffRender();
          return;
        }
        setTimeout(() => {
          if (n <= k) {
            ppStyle = !ppStyle;
            incF$(n);
            ping(n + 1)(ar);
            diffRender();
          } else if (n % 2 === 0) {
            ar[0] += 1;
            m67_RESULT = h('pre', ppYR, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  `)
            ping(0)(ar);
            diffRender();
          } else {
            ar[1] += 1
            m67_RESULT = h('pre', ppY, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  `);
            ping(0)(ar);
            diffRender();
          }
        }, 500);
      }

      var pingD = a => b => c => h('div', [
        h('pre', a, ` ping        ---> `),
        h('pre', b, `                 <---        pong `),
        h('pre', `          -- SCORE: ping: ` + c[0] + ` pong: ` + c[1]),
      ]);

      m67_RESULT = pingD(_A1)(_A3)([3, 2]);

      PingpongMaker = (name) => {
        var a = _A1;
        var b = _A3;
        var c = [0, 0];
        var n = 0;
        var bool = true;
        var k = Math.floor(Math.random() * 7) + 1;
        return function train() {
          if (c[0] > 10 || c[1] > 10) return;
          var ms = 400;
          if (a === _A3) {
            a = _A1;
            b = _A3
          } else if (a === _A1) {
            a = _A3;
            b = _A2
          };
          if (n <= k) {
            n += 1;
            window[name] = pingD(a)(b)(c);
            diffRender();
          } else if (n % 2 === 0) {
            ms = 1200
            n = 0
            c[0] += 1;
            window[name] = pingD(_A1)(_A3)(c);
            diffRender();
            k = Math.floor(Math.random() * 7) + 1;
          } else if (n % 2 === 1) {
            ms = 1200;
            n = 0;
            c[1] += 1;
            window[name] = pingD(_A3)(_A2)(c);
            diffRender();
            k = Math.floor(Math.random() * 7) + 1;
          }
          setTimeout(function () {
            train();
          }, ms);
        }
      }

      var makeDisplay = a => b => c => h('div', [
          h('pre', a, ` ping        ---> `),
          h('pre', b, `                 <---        pong `),
          h('pre', `          -- SCORE: ping: ` + c[0] + ` pong: ` + c[1]),
        ]),

        pingCompute = bool => aa => bb => cc =>
        dd => {
          var a;
          var b;
          if (a === "serve") {
            a = _A3;

          }
          var a = aa = bool ? _A1 : _A3;
          var b = aa = bool ? _A3 : _A2;
          pingDisplay = makeDisplay(a)(b)(cc)(d);
        };

      var pingScore = [0, 0];

      pp4 = () => {
        var a = _A3;
        var b = _A2;
        var c = _A3;
        var d = [0, 0];
        var random = 0;
        var turns = 0;
        var bool = true;
        var car;
        var ms = 300;
        return car = () => {
          bool = !bool;
          pingCompute(bool)(a)(b)(c)
          diffRender()
          if (random === 0) random = Math.floor(Math.random() * 11) + 1; // New serve flag "random === 0" detected.
          setTimeout(function () {
            if (pingScore[0] >= 11 || pingScore[1] >= 11) {
              diffRender()
              turns = 0;
              random = 0;
              pingScore = [0, 0];
            };
            if (turns >= random && turns % 2 === 0) {
              pingScore[0] += 1;
              turns = 0;
              random = 0; // A signal to compute a new random number when the next message comes in.
              diffRender()
            }
            if (turns >= random && turns % 2 === 1) {
              pingScore[1] += 1;
              turns = 0;
              random = 0;
              diffRender()
            }
            ms = (turns < random) ? 300 : 900;
            turns += 1;
            diffRender()
            car()
          }, ms)
        }
      };


      // ***************************** start click    

      var pingpong$ = sources.DOM
        .select('button.pingpong').events('click')
        .map(() => {
          PingpongMaker('m67_RESULT')();
          PingpongMaker('m68_RESULT')();
          PingpongMaker('m69_RESULT')();
        });


      // ******************************* end click    

      pingScore = [0, 0];
      pingScore2 = [0, 0];
      pingScore3 = [0, 0];
      // ***************************** start message from workerI    

      const otherP = bool => a => b => c => {
        if (typeof bool !== 'boolean') {
          window[a] = window[a] === _A3 ? _A1 : _A3
          window[b] = window[a] === _A3 ? _A2 : _A3
          diffRender()
          return;
        }
        if (bool) {
          window[a] = _A1;
          window[b] = _A3;
          window[c][0] += 1;
          diffRender();
          return;
        }
        window[a] = _A3;
        window[b] = _A2;
        window[c][1] += 1;
        diffRender();
      };

      const workerI$ = sources.WWI.map(m => {

        if (m.data === "game over") return;
        otherP(m.data)('ping43')('ping44')('pingScore');
        otherP(m.data)('ping45')('ping46')('pingScore2');
        otherP(m.data)('ping47')('ping48')('pingScore3');
        workerI.postMessage(m.data);
        diffRender();
      });


      // ***************************** end message from workerI    

      var pinpon4$ = sources.DOM
        .select('button.pingpong4').events('click')

      var pingpong4$ = pinpon4$.map(() => {

        pp4('ping43')('ping44')('pingScr1');
        // pp4('ping45')('ping46')('pingScr2'); 
        // pp4('ping47')('ping48')('pingScr3');
      });

      // *********************************** pingpong ***************  FINISH

      var fredButton = h('button#fredButton', "fredButton");
      var diffR = h('button#diffRender', "diffRender");

      const fred$ = sources.FD.map(e => {
        freday = e;
      })

      var frd$ = sources.DOM
        .select('div#fredB').events('click')

      var fredAction$ = frd$.map((e) => {
        freday = [];
        diffRender()
      });

      var fredGo$ = sources.DOM
        .select('button#fredB')
        .events('click')
        .map(() => {
          freday = [];
          funcP()
        });

      // **********************************************************************

      var bindBD$ = sources.BD.map(m => console.log("Say what?", m))

      const workerC$ = sources.WWC.map(m => {
        console.log('The message arriving from workerC is', m.data);
        mMfactors.ret(m.data[1]);
        var w = m.data[0][m.data[0].length - 1];
        if (m.data[0].length > primeState.length) primeState = m.data[0];
      });

      var factorsP$ = sources.DOM
        .select('input#factors_5').events('keyup');

      var fA$ = factorsP$.map(function (e) {
        mMfactors7.ret('');
        var factors = [];
        if (e.keyCode === 13) {
          var ar = (e.target.value).split(',').map(v => parseInt(v, 10));
          if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
            mMfactors7.ret('It works only if you enter two integers separated by a comma.');
            return;
          } else {
            //workerD.postMessage([primesMonad.s, ar, mMfactors6.x]);
            workerD.postMessage([primesMonad.s, ar, decompMonad.s, 'Happy, happy']);
          }
        }
      });

      const workerD$ = sources.WWD.map(m => {
        mMfactors6.ret(m.data[0][3]);
        window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
        mMfactors8.ret(m.data[1]);
      });


      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  End Easy
      const largestFactor = x => bind(1111111)(prm5)(split2)(largest)(terminate).pop()



      var factorsPress_b$ = sources.DOM
        .select('input#factors_1').events('keydown');

      var factorsAction$ = factorsPress_b$.map(function (num) {
        if (num.keyCode === 13) {
          var n = num.target.value;
          var j = Math.sqrt(n);
          var k = primeState.slice(-1)[0];
          if (k > j) {
            var primes = primeState.slice(0, primeState.indexOf(primeState.find(e => e > n)));
          } else primes = primeState;
          workerE.postMessage([primes, n]);
        }
      });

      const workerE$ = sources.WWE.map(m => {
        mMfactors.ret(m.data[1]);
      });

      var factorsP_b$ = sources.DOM
        .select('input#factors_5b').events('keyup');

      var fA_b$ = factorsP_b$.map(function (e) {
        mMfactors7.ret('');
        var factors = [];
        if (e.keyCode === 13) {
          var ar = (e.target.value).split(',').map(v => parseInt(v, 10));
          console.log('In fA$ ar is', ar);
          if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
            mMfactors7.ret('It works only if you enter two integers separated by a comma.');
            return;
          } else {
            workerF.postMessage([primesMonad.s, ar, decompMonad.s]);
          }
        }
      });

      const workerF$ = sources.WWF.map(m => {
        console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -> Back in the main thread. m is', m);
        mMfactors6_b.ret(m.data[2][3]);
        window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
        window['decompMonad'] = new MonadState('decompMonad', m.data[2], primes_state);
        mMfactors8_b.ret(m.data[1]);
      });

      var factorsP_c$ = sources.DOM
        .select('input#factors800').events('keyup');

      var fA_c$ = factorsP_c$.map(function (e) {
        mMfactors800.ret('');
        var factors = [];
        var ar = (e.target.value).split(',').map(v => parseInt(v, 10));
        if (e.keyCode === 13) {
          if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
            mMfactors7.ret('It works only if you enter two integers separated by a comma.');
            return;
          } else {
            mMfactors800.ret(simpleWay(ar[0], ar[1]));
          }
        }
      });

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDOM prime factors END
      // ?<>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< START traversal
      document.onload = function (event) {
        console.log('onload event: ', event);
        mMitterfib5.release(200);
      }

      // document.getElementById('login').focus();
      // <>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< ENDOM traversal
      // <>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< START Itterator


      function gMap(x, f, id) {
        var mon = new Monad(f(x), id);
        window[id] = mon;
        return mon;
      }

      var solve = function solve() {
        var g = makeBind();
        mMZ3.bnd(a => {
          g = g.b(a)
          mMquad4.ret('');
          mMquad6.ret('');
          mMquad5.ret(a + " * x * x ")
          mMZ3.bnd(b => {
            mMquad6.ret(b + ' * x ')
            mMZ3.bnd(c => {
              mMtemp.ret([a, b, c])
                .bnd(gMap, qS4, 'mMtemp2')
                .bnd(result => {
                  let x = result[0]
                  let y = result[1]
                  if (x === 0) {
                    mMquad5.ret('No solution', mMtemp)
                    mMquad6.ret(' ');
                    solve();
                    return;
                  }
                  if (y === 0) {
                    mMquad5.ret('No solution')
                    mMquad6.ret(' ')
                    solve();
                    return;
                  };
                  mMquad4.ret("Solutiions for " + a + ", " + b + " and " + c + " are " + x + " and  " + y)
                  mMquad5.ret(p(a).text + " * " + x + " * " + x + " + " + p(b).text +
                    " * " + x + " " + p(c).text + " = 0")
                  mMquad6.ret(p(a).text + " * " + y + " * " + y + " + " + p(b).text +
                    " * " + y + " " + p(c).text + " = 0")
                  solve(); // Continuing the endless loop.
                })
            })
          })
        })
      };
      solve();


      var quad$ = sources.DOM
        .select('#quad').events('keypress');

      var quadAction$ = quad$.map(function (e) {
        if (e.keyCode === 13) {
          mMZ3.release(e.target.value);
          document.getElementById('quad').value = null;
        }
      });


      // **************************************************** START makeBind demo


  qFunc = function (q) {
      var a = q.ar[0];
      var b = q.ar[1];
      var c = q.ar[2];
      var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (aa === aa) {
          Cow1 = `${a}*x*x + ${b}*x + ${c} = 0 has the following solutions:`,
          Cow2 = `x = ${aa} and x = ${bb}`;
          // console.log("Cow1 and Cow2", Cow1, Cow2);
      }
      if (!(aa === aa)) {
          Cow1 = `${a}*x*x + ${b}*x + ${c} = 0 has no solution`;
          Cow2 = '';
          // console.log("Cow1 and Cow2", Cow1, Cow2);
      }
      diffRender();
      qfB = mBnd(true);
  }

  function qF9 () {
      if (qfB.ar.length > 4) {
          qFunc(qfB) 
      }
      else Cow1 = "coefficients: " + qfB.ar.join(' ')
  };

  var qfB = mBnd();

var handler = {
	get: function (a, b) {
		if (a.ar.length === 1) {
			console.log("ob is", ob);
			Cow1 = a.ar[0] + " * x * x "
            return Reflect.get(a,b);
		}
		else if (a.ar.length === 2) {
			console.log("ob is", ob);
			Cow2 = Cow1 + " + " + a.ar[1] + " * x "
            return Reflect.get(a,b);
		}
        return Reflect.get(a,b);
	},
	set: function(target,prop,val = []) {
        if (prop == 'ar' && prop.length === 3) {
        	console.log("Bingo ar.length === 3")
            target[prop] = val;
        }
    }
} 

var ob_proxy = new Proxy(ob, handler)  

/*qfB_proxy = new Proxy(qfB, {
	get: function (a, b) {
		if (a.ar.length === 1) {
			Cow1 = a.ar[0] + " * x * x "
                        diffRender();
            return Reflect.get(a,b);
		}
		else if (a.ar.length === 2) {
			Cow2 = Cow1 + " + " + a.ar[1] + " * x "
                        diffRender();
            return Reflect.get(a,b);
		}
		if (a.ar.length === 3) {
			qFunc(qfB);
		}
        diffRender();  
        return Reflect.get(a,b);
	} 
  }); */

  qF1$ = sources.DOM
    .select('#qF1').events('keypress');

  oneAction$ = qF1$.map(e => {
      if (e.keyCode === 13) {  
          qfB_proxy.run(toFloat(e.target.value));
          document.getElementById('qF1').value = null;
      }
  });

      // ******************************************BEGIN TODO LIST

      var task2 = function task2(str) {
        socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
      };

      function comment2(str) {
        socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
      };


      // *****************************************END TODO LIST
      var captionClick$ = sources.DOM
        .select('#caption').events('click');

      var captionClickAction$ = captionClick$.map(function () {
        (get(mMcaptionDiv) === 'none') ?
        mMcaptionDiv.ret('block'):
          mMcaptionDiv.ret('none')
      });

      var gameClick$ = sources.DOM
        .select('#game').events('click');

      var gameClickAction$ = gameClick$.map(function () {
        (get(mMgameDiv) === 'none') ?
        mMgameDiv.ret('block'):
          mMgameDiv.ret('none')
      });

      var clearPicked$ = sources.DOM
        .select('#clear').events('click');

      var clearADSction$ = clearPicked$.map(() => {
        gameMonad.clearPicked();
      });

      var elemB$ = sources.DOM.select('input#group').events('keypress')
        .map(e => {
          mM10.ret(e.target.value);
          worker.postMessage([mM9.x, e.target.value]);
        });

      var pr$ = sources.DOM
        .select('#primeNumbers').events('keypress');

      var prADSction$ = pr$.map(function (e) {
        if (e.keyCode === 13) {
          worker.postMessage(["CE#$42", primesMonad.s, e.target.value]);
        }
      });


      // Clicking the checkbox to indicate that a task has been finished.
      var box$ = sources.DOM.select('.box').events('click');

      var boxAction$ = box$.map(e => {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('In boxAction$ -- e is', e);
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        var index = parseInt(e.target.parentElement.id, 10);
        var task = taskMonad.s[1].slice(index, index + 1)[0];
        var old = task;
        var ar = task.split("<$>");
        ar = ar.filter(v => v !== "");
        ar[1] = ar[1] === "false" ? "true" : "false"
        var newTask = ar.join("<$>");
        socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
      });

      var cbx2$ = sources.DOM.select('.cbx2').events('click');

      var cbx2Action$ = cbx2$.map(e => {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('In cbxAction$ -- e is', e);
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        var index = parseInt(e.target.parentNode.id, 10);
        var task = taskMonad.s[1].slice(index, index + 1)[0];
        var old = task;
        var ar = task.split("<$>");
        ar = ar.filter(v => v !== "");
        ar[1] = ar[1] === "false" ? "true" : "false"
        var newTask = ar.join("<$>");
        socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
      });


      // Clicking the DELETE button.


      var deleteClick$ = sources.DOM
        .select('#deleteTask').events('click');

      var deleteAction$ = deleteClick$.map(function (e) {
        var index = parseInt(e.target.parentNode.id, 10);
        var old = taskMonad.s[1].slice(index, index + 1)[0];
        socket.send(`TX#$42,${pMgroup.x},${pMname.x},${index},${old}`);
      });

      // Editing a task.

      var edit$ = sources.DOM
        .select('#edit2').events('keypress');

      var editAction$ = edit$.map(function (e) {
        var arr;
        var str;
        if (e.keyCode === 13) {
          var index = parseInt(e.target.parentElement.id, 10);
          var old = taskMonad.s[1][index];
          var ar = old.split("<$>");
          var newAr = e.target.value.split(',');
          var newString = newAr.join("<<>>");
          ar.shift();
          ar.unshift(newString);
          var newTask = ar.join("<$>");
          socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
        }
      });

      var newTask$ = sources.DOM
        .select('input.newTask').events('keydown');

      var newTaskAction$ = newTask$.map(function (e) {
        if (e.keyCode === 13) {
          var alert = '';
          var ar = e.target.value.split(',');
          if (ar.length < 2) {
            mMalert.ret('You should enter responsible party then a comma then a task');
            return;
          } else {
            var x = ar.shift();
            var y = ar.shift();
            var z = ar.join("<<>>")
            var result = z + '<$>' + 'false' + '<$>' + x + '<$>' + y
            socket.send(`TA#$42,${pMgroup.x},${pMname.x},${result}<@>`)
          }
        }
      });

      console.log('Getting close to calcStream@');

      var chatClick$ = sources.DOM
        .select('#chat2').events('click')
        .map(() => showChatDiv = showChatDiv === "none" ? "block" : "none")

      var todoClick$ = sources.DOM
        .select('#todoButton').events('click')
        .map(() => showTodoDiv = showTodoDiv === "none" ? "block" : "none")

      var result_8$ = sources.DOM
        .select('#res8').events('click');

      var diffR$ = sources.DOM
        .select('#diffRender').events('click')
        .map(() => {
          if (diffRend < 50) {
            diffRend += 1
          } else diffRend = 0;
        });


      var diffRendChange$ = sources.DOM
        .select('input#change').events('onChange')
        .map(e => {
          console.log('diffRend changed <C><C>< Change ><C><C> --> --> e is', e);
        })

      var diffRendClick$ = sources.DOM
        .select('input#change').events('click')
        .map(e => {
          console.log('diffRend changed <C><C>< Click Click Click ><C><C> --> --> e is', e);
        })

      var res8$ = result_8$.map(() => {
        res8_Style = res8_HIDE;
        setTimeout(() => {
          res8_Style = res8_SHOW, 4600;
          diffRender()
        }, 4200);
        RESULT_8 = [];
        bind(1)(addP(2))(cubeC)(addC(3))(multC(2))(multP(3))
          (addC(30))(multC(1 / 10))(terminate).slice(1, 8).map(v => v.then(z => {;
            RESULT_8.push(z.x + ' ');
            console.log(RESULT_8);
            diffRender()
          }))
      });

      console.log('NOW WE ARE AT calcStream@');

      var test5Press$ = sources.DOM
        .select('input#test5').events('keypress');

      var test5Action$ = test5Press$.map(function (e) {
        if (e.keyCode === 13) {
          test5(e.target.value);
        }
      });


      var test7Press$ = sources.DOM
        .select('input#test7').events('keypress');

      var test7Action$ = test7Press$.map(function (e) {
        if (e.keyCode === 13) {
          runTestResult = runTest(toInt(e.target.value));
        }
      });

    /*  counter = function counter(n, acc = 0) {
        var _repeat = true;
        var _n, _acc;
        while (_repeat) {
          _repeat = false;

          if (n === 0) {
            return acc;
          } else {
            _n = n - 1
            _acc = acc + 1
            n = _n
            acc = _acc
            _repeat = true;
            continue;
          }
        }
      }

  // var xoxo = ["this is the head", "cow", "dog", "fireworks"];
  // head(xoxo).concat(tail(xoxo) === xoxo;
  */


      var calcStream$ = xs.merge(oneAction$, mBindAction$, gridCh$, fAction$, bAction$, m80$, m81$, m82$, m83$, m84$, m85$, m86$, m87$, m88$, m89$, m810$, m811$, m812$, m813$, m814$, m815$, pingpong$, test5Action$, test7Action$, diffRendChange$, diffRendClick$, demo2Action$, bindBD$, doubleAction$, itterADSction$, fredGo$, fredAction$, diffR$, res8$, m80Action$, commentAction$, boxAction$, cbx2Action$, messagePressAction$, fA_c$, forwardAction$, backAction$, prADSction$, fA$, factorsP$, fA_b$, factorsP_b$, clearprimes$, workerB$, workerC$, workerD$, workerE$, workerF$, workerI$, clearClick$, clearClick7$, clearClick8$, workerG$, workerH$, workerL$, workerM$, clearADSction$, factorsAction$, factorsAction8$, factorsAction7$, factorsAction9$, factorsClick7$, factors2Action$, factors3Action$, primeFib$, fibPressAction$, quadAction$, editAction$, editBAction$, testWAction$, testZAction$, testQAction$, deleteAction$, deleteAction2$, newTaskAction$, chatClick$, gameClickAction$, todoClick$, captionClickAction$, groupPressAction$, rollClickAction$, registerPressAction$, messages$, numClickAction$, opClickAction$)

      return {
        DOM: calcStream$.map(() => {
          return h('div.main', [ // 1 bracket

h('div.image_3', [
  h('img.image_2', { props: { src: "logo.svg" }}),
  h('span', ' '),
  h('a', { props: { href: "https://cycle.js.org/", target: "_blank" }}, 'A Cycle.js application') 
]),
h('div', { style: { textAlign: "center", fontWeight: "bold" }}, [
  h('br'),
  h('div', {
    style: { fontSize: "32px", color: "rgb(130,170,18", textAlign: "center" }}, 'THE ESSENCE OF FUNCTIONAL JAVASCRIPT'),
]), 
h('br'),
h('div', styleFunc(["rgb(180,180,56)",, "23px", "italic", ,"center" ]), 'Small, reusable functions' ),
h('div', styleFunc(["rgb(180,180,56)",, "23px", "italic", ,"center" ]), 'directed by program-specific functions' ),
h('br'),
          
                        h('div.content', [ // 2 brackets  main -> content ->

h('span.tao', ' This is a ' ), 
  
                      h('a', {props: {href:"https://cycle.js.org/", target: "_blank" }}, 'Cycle.js' ), 

h('span', ' application working in conjunctions with a '),
  
                      h('a', {props: {href:"https://www.haskell.org/#step3", target: "_blank" }}, 'Haskell ' ), 

h('a.a2', {props: {href: "http://hackage.haskell.org/package/wai-websockets-3.0.1.2/docs/Network-Wai-Handler-WebSockets.html", target: "_blank" }}, 'Wai WebSockets' ),
  
h('span', ' server, each on its own ' ),

                      h('a', {props: {href:"https://lists.ubuntu.com/archives/ubuntu-announce/2018-April/000231.html", target: "_blank" }}, 'Ubuntu 18.04' ), 

                      h('a.a2', {props: {href: "https://www.digitalocean.com/", target: "_blank" }}, 'Digital Ocean' ),

h('span', ' droplet. The JavaScript is plain, unrestricted ' ),
  
                     h('a', {props: {href:"https://www.ecma-international.org/ecma-262/8.0/index.html", target: "_blank" }}, 'ES8 (Ecmascript 2017)' ), 
h('span', ', transpiled with ' ),

                      h('a', {props: {href:"https://webpack.js.org/concepts/", target: "_blank" }}, 'Webpack' ), 
h('span', ' and ' ),                          
                      h('a', {props: {href:"https://babeljs.io/", target: "_blank" }}, 'Babel' ), 
h('span', '.' ),


h('br'),
h('br'),

h('span.tao', ' JavaScript is more flexible than exclusively functional languages such as '), 
  
                h('a', {props: {href:"https://en.wikipedia.org/wiki/Lisp_(programming_language)", target: "_blank" }}, 'Lisp' ), 

h('span', ' and Haskell, which are strongly typed and designed to use pure functions and immutable data. You can assist browser optimization, facilitate easy maintenance, and simplify debugging by requiring type declarations, using only pure functions, and refraining from ever mutating objects or variables. But it is, in my opinion, very unfortunate that the phrase "functional programming" is evolving to encompass type checking, pure functions, and immutable data. I will buck that trend, hoping that it isn\'t too late, and say "functional Javascript" is JavaScript that takes full advantage of JavaScript\'s first-class functions, regardless of whether it is accomplished safely with ' ),
                          
                h('a', {props: {href:"https://www.typescriptlang.org/", target: "_blank" }}, 'Typescript' ), 
                          
 h('span', ' or the raw power of ' ), 
                          h('a', {props: {href:"https://www.ecma-international.org/ecma-262/8.0/index.html", target: "_blank" }}, 'EcmaScript 2017' ), 
h('span', ', if you so choose. ' ),
h('br'),
h('br'),
h('span.tao', ' By the way, JavaScript "monads" don\'t deserve the blogger hype the are getting. Haskell monads aren\'t mathematical monads, as explained in ' ),
h('a', {props: {href: "http://math.andrej.com/2016/08/06/hask-is-not-a-category/", target: "_blank"}}, 'Hask Is Not A Category' ), 
                          
h('span', '; how much less so are the JavaScript "monads". The ' ),
    
h('a', {props: {href:"https://wiki.haskell.org/Monad_laws", target: "_blank" }}, 'Haskell Monad Laws' ), 
h('span', ', which aren\'t even mandetory in Haskell, are common sense requirements for robust function composition. If you rely on functions to make programs work, you aren\'t communicating changes of state by mutating global variables. Time travel and undo algorithms naturally use immutable data. Thousands of passes through loops inside the scopes of functions cry out for  mutable values, not factories spewing pointers and values into memory. When you program functionally, Things fall into place without enforcing rules. This is doing through inaction, in the spirit of the ' ),
  
                           h('a', {props: {href:"https://en.wikipedia.org/wiki/Tao_Te_Ching", target: "_blank" }}, 'Tao Te Ching' ), 
h('br'),
h('br'),


h('span.tao', ' The ' ),
h('a', {props: {href:"https://github.com/fantasyland/fantasy-land", target: "_blank" }}, 'Fantasyland' ),
h('span', ' algebraic javascript specification is an admirable achievement. People who are familiar with Haskell can jump right in and start coding with familiar monads and functors borrowed from the Haskell ' ),


h('a', {props: {href: "http://hackage.haskell.org/package/base-4.12.0.0/docs/Prelude.html", target: "_blank"}}, 'Prelude module' ), 

h('span', '. The '  ),

h('a', {props: {href:"https://github.com/origamitower/folktale", target: "_blank" }}, 'Folktale' ),

h('span', ' library also succeeds in reflecting the Haskell Prelude module. The Folktale "Maybe" monad is being evaluated on this page as a way to catch errors. ' ),
  
h('br'),
h('p', ' Instead of composition by linking erzats monads, how about composing functions with higher-order functions, as in the example below. True, "f" links objects containing values and methods, but that detail belongs under the hood. Using this approach, the presentation is clear and the possibilities are myriad. '),

  h('div', styleFunc(["#FFD700", "3%", "21px", , , ]), [
    h('div', 'f.run(x)(function1)(function2) ... (functionN)(); ')
  ]),
  h('p', ' where f = mBnd() and mBnd() is defined as: ' ),
  h('pre', `    const mBnd = (bool = null) => {
        var x = Symbol(); 
        return { run: Bind(x, bool), ar: arBind[x] };
    }; ` ),
  h('p', ' Bind is defined as: ' ),
  h('pre', `    function Bind(str, bool = false) {
        arBind[str] = [];
        if (bool)  arBind[str] = onChange(
            arBind[str], () => {     // Makes arBind[str] a Proxy of itself.
                diffRender();         // Causes Snabbdom to update the DOM
            }
        );
        var p;
        var _bind = function _bind(x) {
            if (x instanceof Promise) x.then(y => arBind[str].push(y); 
            else arBind[str].push(x);
            return func => {
                if (func == undefined) return arBind[str];
                if (typeof func !== "function") p = func;
                else if (x instanceof Promise) p = x.then(v => func(v));
                else p = func(x);
                return _bind(p);
            };
        };
        return _bind;
    }; ` ),
  h('p', ' People familiar functions that take functions as arguments, and with functions that return functions, will see that "f()" (above) has the features shown below. People learning about functional programming can make substantial progress by studying the code until they understand why it behaves as stated below. ' ), 
  h('div', styleFunc(["#4dff4d", "3%", "21px", , , ]), [
  h('div', 'f(x).run(functiona1)(function2) ... (functionN)(); ')
  ]), 
  h('p', ' has the following features: ' ),
  h('pre', styleFunc(["#4dff4d", , "19px", , , ]), `    x can be any value,

    there are no restrictions on the functions\' return values
       (they can even return promises),

    so naturally there are no restrictions on the single-value arguments 
       (primitives, functions, arrays, etc.) functions can take since these 
       are the prior functions\' return values,

    functions have built-in access to all prior functions\' return values
       (or resolution values when promises are returned),

    functions defined with mBnd and the data they generate are immutable,

    "()", "(null)", or any other null value at the end of the sequence terminates 
        the procedure and causes the array of every return value (or Promise 
        resolution values) to be returned. "().slice(-1)" gets the final result. ` ),
    h('p', ' The first example performs a computation, requests a quasi-random number from the WebSocket server, requests that number\'s prime decomposition from a web worker, and displays the result. The code runs twenty-five times. '),
                        
                        ]),

  h('div.content2', [
  h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 1 '),
  h('div', { style: { width: '47%', fontSize: '18px', float: 'left' }}, [ // *** LEFT PANEL 
  
  h('p', ' This demonstration uses Bind() directly, rather than mBnd(). It even uses the same instance of _bind(), which is returned by Bind("bb"). This works because the functions to not rely on the array of return values. Demonstration 2 will show what happens when Bind() is used directly and functions try to use peviously generated return values. '),
  h('pre', `    var factorsClick9$ = sources.DOM
      .select('button#factors_S').events('click');

    var factorsAction9$ = factorsClick9$.map(() => {
      m44_ = [];
      var i = 0;
      var bb = Bind("bb"); 
      while (i < 25) {
        bb(145)(x => x * x * x)(it4_c)(it6_c)(it7_c);
        console.log("bb is", bb);
        i += 1;
      }
    });  ` ),

    h('p', ' The factorsClick9$ stream responds to clicks on the button in the right column. In factorsAction9$, factorsClick9$\'s map method is called, prompting bnD(145)(x=>x*x*x)(it4_c)(it6_c)(it7_c) to execute twenty-five times. As the cache of prime numbers builds, run times decrease. '),

  ]), 
  h('div', { style: { width: '47%', fontSize: '18px', float: 'right' }
}, [ // *** RIGHT PANEL


  h('span', ' Click below to begin twenty-five runs of: '),
  h('br'),
  h('br'),
  h('span', styleFunc(["rgb(7, 247, 247)", "12%", "20px", , , , , ]), 'bb(145)(x=>x**3)(it4_c)(it6_c)(it7_c)'),
  h('br'),
  h('br'),
  h('button#factors_R', { style: { fontSize: '15px' }}, 'bb(145)(x=>x**3)(it4_c)(it6_c)(it7_c)'),
  h('span', "~~"),
  h('button.clear_R', {
    style: {
      fontSize: '15px',
      marginLeft: "0"
    }
  }, 'clear results'),
  h('br'),
  h('br'),
  h('div#demo2', m43_),
  h('br'),
  h('br'),
              ]),
    h('br'),
    h('div', styleFunc(["#361B01", , , , "90%", "center"]), '**************************************************************************************************************'),

h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), 'Demonstration 2 - Using makeBind() to Avoid Clashes'),
h('div', { style: { width: '47%', fontSize: '18px', float: 'left' }}, [ // ((***** LEFT PANEL 
h('h3', 'The Problem With Direct Calls to Bind()'),
h('p', ' The statement "f = Bind(\'f\')") returns a fresh copy of _bind but not a fresh copy the array arBind["f"]. After f() has been created and called, subsequent calls push additional data into arBind[\'f\']. Nine distinct copies of _bind() are used in the top nine computation. arBind is cleared prior to the each start but when the procedures are re-started prior to finishing, two running processes share each array. The result, as you can see, is nonsensical data sometimes including "NaN" and "infinity". '),
h('h3', 'The makeBind Solution'),
h('p', ' The following four lines of code (also shown above) make it possible for a function "func" defined repeatedly by "func = mBnd()" to be called while it is still running without sharing the arrays assigned to previous calls to func().  for two running processes to share an array on arBind. '),
  h('pre', `    var mBnd = (bool = null) => {
        var x = Symbol(); 
        return { run: Bind(x, bool), ar: arBind[x] };
    }; ` ),
h('p', ' The statement "Bind(x, true)" returns a copy of _bind() and adds a unique attribute "Symbol()" to the arBind array. The argument "true" causes DOM updates every time arBind[Symbol()] increases in length; that is, each time a function in the pipeline is evaluated. mBnd(true) takes it one step further and returns an object with attributes "run" and "ar". run() starts the process and ar is available to every function that follows. test4(), shown below and demonstrated in the lower right column, uses "a.ar" six times. ' )

         ]),

              h('div', {
                style: {
                  width: '47%',
                  fontSize: '15px',
                  float: 'right'
                }
              }, [ // ********* RIGHT PANEL

                h('br'),
                h('br'),
                h('div', styleFunc(["#8ffc95", , "23px", , , "center"]), 'Using Bind Directly'),
                h('div', styleFunc(["#ffac95", , "18px", , , "center"]), 'var name = (Bind("name"'),
                h('div', styleFunc(["#ffac95", , "18px", , , "center"]), 'arBind[name] = []' ), // Clear the array after each use
                h('div', styleFunc(["#ffac95", , "18px", , , "center"]), 'name(x)( . . ."'),
                h('br'),
                h('div', arBind.a11.join(', ') ),
                h('div', arBind.a12.join(', ') ),
                h('div', arBind.a13.join(', ') ),
                h('div', arBind.a14.join(', ') ),
                h('div', arBind.a15.join(', ') ),
                h('div', arBind.a16.join(', ') ),
                h('div', arBind.a17.join(', ') ),
                h('div', arBind.a18.join(', ') ),
                h('div', arBind.a19.join(', ') ),

                h('br'),
                h('span', ' value of n --> '),
                h('input#test5', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),
                h('button#makeBind', {
                  style: {
                    fontSize: '17px',
                    marginLeft: "7%"
                  }
                }, 'GO'),
                h('br'),
                h('br'),
                h('div', styleFunc(["#8ffc95", , "23px", , , "center"]), 'Using Bind Wrapped In mBnd()'),
                h('div', styleFunc(["#8ffc95", , "18px", , , "center"]), 'mBnd().run(x)( . . .'), // Anonymous functions.
                h('br'),
                h('div', `${_B0.join(", ")}`),
                h('div', `${_B1.join(", ")}`),
                h('div', `${_B2.join(", ")}`),
                h('div', `${_B3.join(", ")}`),
                h('div', `${_B4.join(", ")}`),
                h('div', `${_B5.join(", ")}`),
                h('div', `${_B6.join(", ")}`),
                h('div', `${_B7.join(", ")}`),
                h('div', `${_B8.join(", ")}`),
                h('br'),

                h('br'),

              ]),

              h('div', styleFunc(["#361B01", , , , "90%", "center"]), '**************************************************************************************************************'),
                        h('div.content', [ // 2 brackets  main -> content ->


h('div', styleFunc(["#8ffc95", , "21px", , , "center"]), ' The Demonstration 2 Code' ),
h('p', ' Entering a number or clicking "GO" prompts a listener to call test5(). ' ),                          

h('pre', `  function test5 (n) {
      var x = toInt(n);

      _C0 = test6('a11')(x+0); // This code fails under stress.
      _C1 = test6('a12')(x+1);
      _C2 = test6('a13')(x+2);
      _C3 = test6('a14')(x+3);
      _C4 = test6('a15')(x+4);
      _C5 = test6('a16')(x+5);
      _C6 = test6('a17')(x+6);
      _C7 = test6('a18')(x+7);
      _C8 = test6('a19')(x+8);
      
      _B0 = test4(x+0);       // This code uses mBnd and is robust.
      _B1 = test4(x+1);
      _B2 = test4(x+2);
      _B3 = test4(x+3);
      _B4 = test4(x+4);
      _B5 = test4(x+5);
      _B6 = test4(x+6);
      _B7 = test4(x+7);
      _B8 = test4(x+8);
  } 

  var test4 = w => {
      var a = mBnd(true)
      return a.run(w)(cubeP)(addP(3))(squareP)
      (x=>addP(x)(-30*a.ar[1]))
      (s=>idP(Math.floor(s/a.ar[2])))
      (x=>idP(x+Math.floor(a.ar[0]*a.ar[1]*
          (a.ar[2]/a.ar[3]))))() 
    } 

  var test6 = z => w  => {
      var a = Bind(z);    // "true" unnecessary (test4 causes refresh)  
      return a(w)(cubeP)(addP(3))(squareP)
      (x=>addP(x)(-30*arBind[z][1]))
      (s=>idP(Math.floor(s/arBind[z][2])))
      (x=>idP(x+Math.floor(arBind[z][0]*arBind[z][1]*
          (arBind[z][2]/arBind[z][3]))))(); 
  }; ` ),
                        ]),

h('p', ' The user generates "n". _B0, _B1, ... _B8 and _C0, _C1, ... _C8 are permanent fixtures in the virtual DOM. ' ),
h('p', ' Clicking the button on the right calls test5() which calls test6() and test4() nine times. test6() (at the top) shows what can go wrong when copies of _bind are created by direct calls to Bind() are used. The code normally runs to completion in 6000 ms. If you click the button, test5 is called again after 5400 ms. The results speak for themselves'),
h('p', ' The situation might become clearer if you note that every time you run, say, a3 = Bind("a3"), the latest instance of a3 along with all previous ones use arBind.a3. On the other hand, repeated invocation of "a = mBnd(true)" creates a fresh, inscrutable key and initial value  "arBind.Symbol(): Symbol = []" that might appear identical to other key/value pairs but which has its own unique id in the Symbol registry. ' ),
h('p', ' If you enter a number on the right and press <ENTER> once, you will see that test4() and test6() produce identical results. If you Press <ENTER> again during execution, you will see garbage above your entry; but below you will see just what you saw when you pressed <ENTER> once. It resembles the rollback of an interrupted atomic transaction as seen, for example, in interrupted database transactions.  '),




h('div', styleFunc(["#361B01", , , , "90%", "center"]), '**************************************************************************************************************'),
h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 3 '),
h('div', { style: { width: '47%', fontSize: '18px', float: 'left' }}, [ // *** LEFT PANEL 

h('p', ' In Demonstration 2, we saw copies of _bind returning nonsense data when they were called before other copies having the same names had finished executing. They were using the same array and stepping all over each other. Let abc = mBnd. You can empty abc.ar with abc.ar = [] or abc = mBnd whenever you want, but letting it gradually fill each time you call abc.run() facilitates the handling of asynchronous data, That is the point of this demonstration. ' ),
h('span.tao', ` Each time you enter a number in the right column, the following code is executed: ` ),
h('pre', `  qfB.run(toFloat(e.target.value))(qF9); ` ),
h('span.tao', '  That\'s all! The third time qF9 receives user data, all three numbers are plugged into the ' ),

h('a', { props: { href: "https://en.wikipedia.org/wiki/Quadratic_formula", target: "_blank" }}, 'quadratic formula'),
h('span', ' The Cycle.js-specific code is shown below. The point is to call "qfB.run(toInt(e.target.value))(qF9)" each time a number is entered. ' ),


h('pre', `  var qfB = mBnd();

  qF1$ = sources.DOM
    .select('#qF1').events('keypress');

  oneAction$ = qF1$.map(e => {
      if (e.keyCode === 13) {  
          qfB.run(toFloat(e.target.value));
          document.getElementById('qF1').value = null;
      }
  });

  qFunc = function (q) {
      var a = q.ar[0];
      var b = q.ar[2];
      var c = q.ar[4];
      var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      if (aa === aa) {
          Cow1 = \`\${a}*x*x + \${b}*x + \${c} = 0 has the following solutions:\`,
          Cow2 = \`x = \${aa} and x = \${bb}\`;
      }
      if (!(aa === aa)) {
          Cow1 = \`\${a}*x*x + \${b}*x + \${c} = 0 has no solution\`;
          Cow2 = '';
      }
      q = mBnd(true);
  };  

  var qfB_proxy = new Proxy(qfB, {
  	get: function (a, b) {
  		if (a.ar.length === 1) {
  			console.log("ob is", ob);
  			Cow1 = a.ar[0] + " * x * x "
              return Reflect.get(a,b);
  		}
  		else if (a.ar.length === 2) {
  			console.log("ob is", ob);
  			Cow2 = Cow1 + " + " + a.ar[1] + " * x "
              return Reflect.get(a,b);
  		}
  		if (a.ar.length === 3) {
  			console.log("ob is", ob);
  			qFunc(a);
  		}
          return Reflect.get(a,b);
  	} 
  }); ` ),


]),
    
h('div', { style: { width: '47%', fontSize: '18px', float: 'right' }}, [ // *** RIGHT PANEL
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
            //  h('div', \`${qR1}\` ), 
            //  h('div', \`${qR2}\` ), 
h('p', ' Enter three coefficients for a quadratic equation, ONE NUMBER AT A TIME. The third time you press <ENTER>, the answer will appear. ' ),
                h('input#qF1', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),

                h('br'),
                h('br'),
                Cow1,
                h('br'),
                Cow2,
                h('br'),

                
 
    h('p', ' This demonstration could be the basis for a two-player game in which each player enters an integer. Then the player who was first to enter a number must enter another that results in a two-integer solution. A solitaire version could have the computer provide a second, randomly generated integer.'),

    h('br'),
  ]),
]), h('div.content', [

  h('div', styleFunc(["#361B01", , , , "90%", "center"]), '**************************************************************************************************************'),
  h('br'),
  h('br'),

  h('span.tao', ' There are library functions, for example Lodash/fp\'s '),
  h('br'),
  h('a', {
    props: {
      href: "https://lodash.com/docs/4.17.4#flow"
    }
  }, "  .flow"),
  h('span', ' and Ramda\'s '),
  h('a', {
    props: {
      href: "http://ramdajs.com/docs/#compose"
    }
  }, 'R.compose'),
  h('span', ', that facilitate simple function composition; i.e., each function\'s argument is the preceding function\'s return value. bind() does this while also giving every linked function along a chain access to the return values of every function, and the resolution values of every promise that precedes it.  '),
  h('br'),
  h('br'),

  h('span.tao', 'This project was created by and is actively maintained by David Schalk. The code repository is at '),
  h('a', {
    props: {
      href: "https://github.com/dschalk/functional-javascript",
      target: "_blank"
    }
  }, 'functional-javascript'),
  h('span', '. Please leave a comment in the '),
  h('a', {
    props: {
      href: "#comments"
    }
  }, 'comments'),
  h('span', ' section near the end of this page. You can email me at pyschalk@gmail.com. '),
  h('p', ' '),
  h('p', ' The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history. All group members see other members\' scores decrease or increase as they navigate backwards and forwards. '),

  h('p', ' Visitors to this site are automatically logged in with pseudo-randomly generated numbers as their user names and passwords. The default "group" is the non-group "solo". '),
  h('p', ' You can select a persistent name and password. These will make it possible for you to return at any time and delete or edit your comments. '),
  h('p#gameIntro', ' The demonstration section also has a text box where you can create or join a group by entering a group name. Changing groups resets your game score and goal tally to zeros. '),
  h('span.tao', ' The game code is fairly concise and intuitive. A quick walk-through is presented at.'),
  h('a', {
    props: {
      href: '#gameCode'
    }
  }, 'here'),
  h('span', '. To see monadic functionality at work, I suggest that you take a look at the section captioned '),
  h('a', {
    props: {
      href: '#asyncExplanation'
    }
  }, 'Asynchronous Processes'),
  h('br'),
  h('p', ' But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of functional programming, playing with bind() and the monads in the browser console might lift you into the comfort zone you seek. '),
  h('h3', 'The Game'),
  h('p', 'People who are in the same group, other than the default non-group named "solo", share the same todo list, chat messages, and simulated dice game. '),
  h('p', ' Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then emptied and the application is ready to start accumulating a new history. '),
  h('p', ' Your user name for trying out the game, todo list, and chat demonstrations and for leaving comments is a thirteen digit random number. In the game section and in the comments section near the bottom of this page, you can chose your own persistent user name and password. As mentioned above, Knowing your password facilitates revising or removing comments.'),

            ]),

h('h1', 'Game, Todo List, Text Messages'),
h('div#gameDiv2', {
  style: {
    display: mMgameDiv2.x
  }
}, [
  h('div#leftPanel', {
    style: {
      display: mMgameDiv2.x
    }
  }, [
    h('p', 'RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 or is evenly divisible by 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time ROLL is clicked, one point is deducted. Three goals wins the game. The code is in an appendix.'),
    h('p', {
      style: {
        color: 'red',
        fontSize: '20px'
      }
    }, mMgoals2.x),
    buttonNode,
    h('br'),
    h('button#4.op', 'add'),
    h('button#5.op', 'subtract'),
    h('button#6.op', 'mult'),
    h('button#7.op', 'div'),
    h('button#8.op', 'concat'),
    h('br'),
    h('br'),
    h('div#dice', {
      style: {
        display: mMdice.x
      }
    }, [
      h('button#roll.tao1', 'ROLL'),
      h('button#back.tao100', 'BACK'),
      h('button#ahead.tao1', 'FORWARD'),
      h('div.tao', `Selected numbers: ${gameMonad.fetch3().join(', ')}`),
      h('div.tao', `Operator: ${gameMonad.fetch2()} `),
      h('div.tao', 'Index: ' + gameMonad.s[1]),
      h('button#clear', 'Clear selected numbers'),
      h('p', ' When traversing the game history, any time there are two selected numbers and a selected operator, a computation will be performed. You can clear the selected numbers and substitute others, and if you don\'t want a selected operator you can select another one.'),
      h('p', ' Create a group or join an existing group. '),
      h('span', 'Change group: '),
      h('input#group', 'test'),
      h('p', mMsoloAlert.x),
      h('p', ' You can change your name by entering a comma-separated name and password below. The combination will go into a persistent file. You can use this combination in the future to edit or delete your saved comments. '),
      h('span.red', mMregister.x),
      h('p', {
        style: {
          color: "red"
        }
      }, nameMess),
      h('label', {
        style: {
          display: mMshowRegister.x
        }
      }, 'Register or log in here:'),
      h('input.register', {
        style: {
          display: mMshowRegister.x
        }
      }),
    ])
  ]),
  h('div#rightanel', {
    style: {
      display: 'block',
      float: 'right'
    }
  }, [
    h('br'),
    h('br'),
    h('br'),
    h('br'),
    h('br'),
    h('br'),
    h('button#todoButton.cow', 'TOGGLE TODO_LIST'),
    h('br'),
    h('br'),
    h('button#chat2.cow', 'TOGGLE CHAT'),
    h('br'),
    h('br'),
    h('br'),
    h('div', {
      style: {
        fontSize: "14 px"
      }
    }, 'Name: ' + pMname.x),
    h('div', {
      style: {
        fontSize: "14 px"
      }
    }, 'Group: ' + pMgroup.x),
    h('br'),
    h('div', {
      style: {
        fontSize: "14 px"
      }
    }, gameData),
    h('br'),
    h('div#a100', ' _____________________________________ '),
    h('p.italic', ' Join group "t" if you want to see some previously created tasks. '),
    h('div', {
      style: {
        display: showTodoDiv
      }
    }, [
      h('div', taskMonad.html),
      h('div', 'Enter author, responsible person, and task here: '),
      h('input.newTask')
    ]),
    h('br'),
    h('span#alert', mMalert.x),
    h('br'),
    h('span#alert2'),

    h('br'),
    h('div#chatDiv', {
      style: {
        display: showChatDiv
      }
    }, [
      h('div#messages', [
        h('span', 'Message: '),
        h('input.inputMessage'),
        h('div', messages),
        h('br'),
      ])
    ])
  ])
]),
h('br'),
h('h1', '___________________________________________________________'),
h('div.content', [ // 4
          h('div#bind'),

          h('br'),
          h('p', ' The asynchronous functions in Demonstration 1 use monadItter instances mMZ40 and mMZ52 instead of Promises. Here\'s the definition of MonadItter: '),
          h('pre', `  var MonadItter = function MonadItter() {
  this.p = function () {};
  this.release = function () {
    return this.p.apply(this, arguments);
  };
  this.bnd = function (func) {
    return this.p = func;
  };
}; `),
          h('p', ' When obtaining data from unreliable sources, adding error checking to MonadItter or using promises\' error- checking feature would be helpful. '),
          h('h3', 'Reactivity In Cycle.js'),
          h('span.tao', ' Reactivity occurs naturally in the Cycle.js framework. Many developers find that Cycle.js has an unusually steep learning curve. It isn\'t so bad if you start with Andrew Staltz\' '),
          h('a', {props: {
              href: "https://egghead.io/courses/cycle-js-fundamentals",
              target: "_blank"} 
          }, ' Overview of Cycle.js.'),
          h('span', ' Its elegance might take your breath away. '),
          h('br'),
          h('br'),
          h('a.tao', {props: {href: 'https://github.com/snabbdom/snabbdom'}}, ' Snabbdom'),

          h('span', ', '),
          h('a', {props: {href: 'http://x-stream.github.io/'}}, ' xstream,'),
          h('span', ' and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and fun so many of its functions and variable definitions are included in scripts in the index.html page. '),
          h('br'),

          h('p', ' The next interactive demonstration accepts user input and executes the following statement in a web worker: '),
          h('pre', `bind(ar[1])(execF)(fpFunc(ar[0])(x)); `),
          h('span', ' The parameters are defined in the '),
          h('a', {
            props: {
              href: "fp"
            }
          }, 'appendix'),
          h('span', '. '),
          h('br'),
h('pre', {
  style: {
    color: "red",
    fontStyle: "italic"
  }
}, `Red Indicates An Ongoing Computation`),

h('pre', `Fibonacci numbers   Prime Numbers   Prime Fibonacci Numbers `),

h('span', mMfibBlurb.x),
h('span', [
  h('svg', {
    attrs: {
      width: 50,
      height: 50
    }
  }, [
    h('circle', {
      attrs: {
        cx: 25,
        cy: 25,
        r: 20,
        stroke: 'purple',
        'stroke-width': 4,
        fill: fill1Monad.x
      }
    })
  ])
]),

h('span', mMprimeBlurb.x),
h('span', [
  h('svg', {
    attrs: {
      width: 50,
      height: 50
    }
  }, [
    h('circle', {
      attrs: {
        cx: 25,
        cy: 25,
        r: 20,
        stroke: 'purple',
        'stroke-width': 4,
        fill: fill2Monad.x
      }
    })
  ])
]),

h('span', mMprimeFibBlurb.x),
h('span', [
  h('svg', {
    attrs: {
      width: 50,
      height: 50
    }
  }, [
    h('circle', {
      attrs: {
        cx: 25,
        cy: 25,
        r: 20,
        stroke: 'purple',
        'stroke-width': 4,
        fill: fill3Monad.x
      }
    })
  ])
]),
h('br'),
h('br'),
h('p.red', 'The elapsed time is ' + mMelapsed.x + ' milliseconds.'),
h('input#fib92'),
h('br'),
h('br'),
h('span#PF_7.red6', 'Fibonacci Numbers'),
h('br'),
h('span#PF_9.turk', fS),
h('br'),
h('span#PF_8.red6', 'Prime Fibonacci Numbers'),
h('br'),
h('span#primeFibs.turk', pFS),
h('br'),
h('span#PF_21.red6', 'The largest generated prime number.'),
h('br'),
h('span.turk', topPrime),
h('br'),
h('h3', ' Promises are not needed '),
h('p', ' Asynchronous code can be handled without reliance on Ecmascript 2015 promises either explicitly or implicitly (e.g. using async/await). Cycle.js drivers eliminate any need to explicitly use functions from a reactive library, but xstream is an integral component of Cycle.js unless you choose most.js or RxJS. '),

h('p', ' The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9\'s, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. Here it is:'),
h('input#factors_1'),
h('br'),
h('br'),
h('span', mMfactors.x),
h('span.tao3', mMfactors23.x),
h('p', ' primesMonad and the functions primarily involved in its transformation are shown below: '),
code.primes,
h('p', ' primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the relevant code: '),
code.primes3,
h('p', ' The user\'s selected number along with the current state of primesMonad (primesMonad.s) gets posted to workerB, which gets functionality beyond its prototype from workerB.js, which orchestrates preparation of the return message that will be posted back to the main thread. workerB.js delegates the job to functions in script2.js by calling: '),
code.primes4,
h('p', ' execF prepares the Fibonacci series and sends its state, along with the state of primesMonad that it received from workerB.js, to fpTransformer. execP is called with the current state and the largest Fibonacci number that had been recently produced by execF as arguments. The updated state is an array with four elements, [new upper bound, new series, largest prime produced in the current browser session, largest series]. If the new result is larger than any previous one, the first and second elements of the state array are identical to the third and fourth. Otherwise, they are smaller. As is apparent in the following code, primesMonad is re-created in the main thread using the state array that was posted by workerB. '),
code.primes2,

h('h3', 'Type Checking'),
h('p', ' Type checking is useful for avoiding runtime errors and for optimization of user interfaces. For example, if a user enters the wrong type of data it is helpful to display a message explaining why nothing is happening. Not allowing defective user input to be transmitted to a WebSocket server prevents sockets from disconnecting. Some developers like to superimpose strong typing over JavaScript or write code in a strongly typed language that compiles to JavaScript. I leave JavaScript (ES7, to be precise) as it is and check types only where user input is involved. If this project were a team effort, other team members might be users of functions I write so more extensive type-checking would be prudent.'),
h('br'),
h('a', {
  props: {
    href: '#top'
  }
}, 'Back to the top'),
h('h3', 'Another Example'),
h('p', ' The result of every computation in a chain of synchronous functions is available to every computation that comes after it. This can be seen in the next example where the result of each computation is pushed into Bind.foo: '),
              h('pre', `  var foo = Bind("foo"); 

    var result = foo(1)(v=>v+2)(v=>v*v*v)(v=>v+3)
    (v=>v*Bind.foo[1])(v=>v*Bind.foo[1])(v=>v+30)
    (v=>v*1/(Bind.foo[3]*2))(terminate)

    console.log(result) // [1, 3, 27, 30, 90, 270, 300, 5] 
    console.log(result === Bind.foo) // true  `),

              h('h2', 'Alternative Monad Functionality'),
              h('p', ' Instances of Monad can also link by means of the method "bnd()". It, along with the method "ret()", were made available as follows: '),
              h('pre', {
                style: {
                  color: "rgb(236, 242, 186)"
                }
              }, `  Monad.prototype.bnd = function (func, ...args) {
      var m = func(this.x, ...args)
      var ID;
      if (m instanceof Monad) {
        ID = testPrefix(args, this.id);
        window[ID] = new Monad(m.x, ID);
        return window[ID];
      }
      else return m;
    };

    Monad.prototype.ret = function (a) {
      return window[this.id] = new Monad(a, this.id);
    };

    function testPrefix (x,y) {
       var t = y;  // y is the id of the monad calling testPrefix
       if (Array.isArray(x)) {
        x.map(v => {
          if (typeof v == 'string' && v.charADSt() == '$') {
             t = v.slice(1);  // Remove "$"
          }
        })
      }
      return t;
    }; `),
              h('p', ' This is less functional than using bind() in that it doesn\'t pass functions down the chain but instead passes objects with exposed methods. But it has appealing features. Look how values move along the chain until, at the end they combine to yield 42. Explicitly passing values from function to function along a chain is impossible with bind(); but with bind(), all chained functions share an array of return values and the resolution values of returned promises. '),
              h('br#itter'),
              h('pre', `  ret(2).bnd(v => add(v,1)
    .bnd(cube).bnd(p => add(p,3)
    .bnd(() => ret(p/3).bnd(add,3)
    .bnd(z => v*z+p-v*p+z))))  //  9 `),
              // ************** OOOOOOOOOOOOOO ********    BEGIN ASYNC


              //('asyncExplanation', ' Asynchronous Processes ' ),

              h('a', {
                props: {
                  href: '#gameIntro'
                }
              }, 'Back to the first set of demonstrations.'),


              h('h2', 'MonadItter'),
              h('p', ' As shown in the "Monads" section (above), the definition of MonadItter is: '),
              code.monadIt,
              h('p', ' MonadItter instances don\'t link to one another. They exist to facilitate the work of instances of Monad, MonadState, etc. Here\'s how they work: '),
              h('p', 'For any instance of MonadItter, say "it", "it.bnd(func)" causes it.p === func. Calling the method "it.release(...args)" causes p(...args) to run, possibly with arguments supplied by the caller. '),
              h('p', ' MonadItter instances control the routing of incoming WebSocket messages. In one of the demonstrations below, they behave much like ES2015 iterators.'),
              h('h3', ' A Basic Iterator '),
              h('p', 'The following example illustrates the use of release() with an argument. It also shows a lambda expressions being provided as an argument for the method mMZ1.bnd() (thereby becoming the value of mMZ1.p), and then mMZ1.release providing an arguments for the function mMZ1.p. The code is shown beneath the following two buttons. '),
              h('button#testZ', 'mMZ33.release(1)'),
              h('p', mMt33.x),
              h('span', 'Refresh button: '),
              h('button#testQ', 'mMt33.ret(0) '),
              h('span.tao', ' The expression mMt33.x sits permanently in the Motorcycle virtual DOM description. You can call '),
              h('span.green', 'mMZ33.release(v)'),
              h('span', ' by entering a value for v below: '),
              h('br'),
              h('span', 'Please enter an integer here: '),
              h('input#testW'),
              h('p', ' cube() is defined in the Monad section (above). If you click "mMZ1.release(1)" several times, the code (above) will run several times, each time with v === 1. The result, mMt3.x, is shown below the button. mMZ1.p (bnd()\'s argument) remains constant while mMZ1.release(1) is repeatedly called, incrementing the number being cubed each time. '),
              h('p', ' Here is another example. It demonstrates lambda expressions passing values to a remote location for use in a computation. If you enter three numbers consecutively below, call them a, b, and c, then the quadratic equation will be used to find solutions for a*x**2 + b*x + c = 0. The a, b, and c you select might not have a solution. If a and b are positive numbers, you are likely to see solutions if c is a negative number. For example, 12, 12, and -24 yields the solutions 1 and -2. '),
              h('p#quad4.red2', mMquad4.x),
              h('p#quad5.red2', mMquad5.x),
              h('p#quad6.red2', mMquad6.x),
              h('p', 'Run mMZ3.release(v) three times for three numbers. The numbers are a, b, and c in ax*x + b*x + c = 0. Remember to press <ENTER> after each number. '),
              h('input#quad'),
              h('p', ' The function "solve()" is at the center of the algorithm. See how mMZ3.bind() appears three times. Each time a user enters a number, say "x", mMZ3.release(x) executes. After the third number, solve calls itself so the process can start again. I prefer this approach over ES6 generators. Here\'s solve(): '),
              code.quad,
              h('p', ' And here are the supporting functions: '),
              code.quad2,
              h('p', ' fmap (above) facilitated using qS4 in a monadic sequence. qS4 returns an array, not an instance of Monad, but fmap lifts qS4 into the monadic sequence. '),
              h('p', ' The function solve() is recursive. It invokes itself after release() executes three times. The expression "solve()" resets solve to the top, where mMZ3.p becomes a function containing two nested occurrences of mMZ3.bnd. After mMZ3.release() executes, mMZ3.p becomes the function that is the argument to the next occurrence of mMZ3.bnd. That function contains yet another occurrence of mMZ3.bnd. MonadItter is syntactic sugar for nested callbacks. '),

              h('h3', ' Preserve Archives By Sidestepping Mutation '),
              h('p', ' When you assign a variable to an array, for example "var arr = [1,2,3]", arr points to a location in memory. Suppose you want to preserve a record of previous values of arr. You might try saving them in an array like this: '),
              h('pre', `  var arr = [1,2,3]
    var b = [arr];
    arr.push(4);
    b.push(arr);
    console.log(b[0]);  // [1,2,3,4]
    console.log(b[1]);  // [1,2,3,4]  
    b[0] == b[1]  // true`),
              h('p', ' That didn\'t work! b points to [arr] and arr still points to its original location in memory. "arr.push(4)" mutated the value in arr\'s location and "b.push(arr)" added a copy. "b[0] == b[1]" returning true verifies that both elements of b point to the same place in memory because in JavaScript, the "==" operator on objects (including arrays) is defined to return true if and only if the objects\' '),
              h('p', ' Here is what happens when "arr.slice()" is pushed into b: '),
              h('pre', `  var arr = [1,2,3];
    var b = [arr.slice()];
    arr.push(4);
    b.push(arr.slice());
    console.log(b[0]);  // [1,2,3]
    console.log(b[1]);  // [1,2,3,4] `),
              h('p', ' Success! "arr.slice()" returned a copy of arr assigned to a new location in memory. It is anonymous, so the only way to access it is through b. b[0], b[1], and arr each have unique locations in memory so mutating one has no effect on the others. '),
              h('p', ' The sixteen-square grid below puts these concepts into practice. If you click two squares, they exchange locations on the grid. If you do this several times, the "BACK" and "FORWARD" buttons will display the result of each pair of clicks. '),
              h('div#donkey', makeRDS(ArrDS[mMindexDS.x])),
              h('br'),
              h('button#gridBack', 'back'),
              h('button#gridForward', 'forward'),
              h('p', "index: " + mMindexDS.x),
              h('p', "rNumsDS: " + rNumsDS.join(', ')),
              h('p', "rMatrixF(rNumsDS: " + rMatrixF(rNumsDS)),
              h('br'),
              h('br'),
              h('p', ' Reactivity is achieved in these demonstrations through Cycle.js rather than RxJS, Bacon, or something else that could work just as well, though perhaps not quite as elegantly. This section provides a glimpse of how I use (some might say, \"misuse\") Cycle.js. '),
              h('p', ' If you click any two numbers above they will exchange places with one another. The array "rNumsDS" keeps track of the positions of numbers on the grid. '),
              h('pre', `var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] `),
              h('p', ' Each square on the grid is a button. This is the initial setup: '),
              h('pre', `  var rDataDS = [
      h('button#mR0.mR', 0 ),
      h('button#mR1.mR', 1 ),
      h('button#mR2.mR', 2 ),
      h('button#mR3.mR', 3 ),
      h('button#mR4.mR', 4 ),
      h('button#mR5.mR', 5 ),
      h('button#mR6.mR', 6 ),
      h('button#mR7.mR', 7 ),
      h('button#mR8.mR', 8 ),
      h('button#mR9.mR', 9 ),
      h('button#mR10.mR', 10 ),
      h('button#mR11.mR', 11 ),
      h('button#mR12.mR', 12 ),
      h('button#mR13.mR', 13 ),
      h('button#mR14.mR', 14 ),
      h('button#mR15.mR', 15 ) ] `),
              h('p', ' The following line of code is a fixture of the virtual DOM. It accounts for the sixteen-square grid shown above: '),
              h('pre', `  h('div#donkey', ArrDS[indexDS] ) `),
              h('p', ' If you begin exploring the demonstration by clicking the upper right square, this code in main() responds by placing the number 3 in rADS: '),
              h('pre', `  var m83$ = sources.DOM
    .select('button#mR3').events('click')
    .map(e => {
      rADS.push(toInt(e.target.id.slice(2,4)));
      if (rADS.x.length === 2) {
       rDataDS = rExchange (rADS[0], rADS[1]); 
      }
    }) `),
              h('p', ' Then if you click the bottom right square (var m815), rADS expands to contain "3" and "15". This causes rExchange(3,15) to run and return the updated value of rDataDS. '),
              h('pre', `  function rExchange (k,n) {
      var a = rNumsDS[k];
      rNumsDS[k] = rNumsDS[n];
      rNumsDS[n] = a;
      rADS = [];
      return makeRDS(rNumsDS);
    } `),
              h('p', ' The last line of rExchange is a call to makeRDS, which is defined as follows: '),
              h('pre', `  function makeRDS (arr) {
      var r = arr.slice();
      return [
        h('button#mR0.mR', r[0] ), 
        h('button#mR1.mR', r[1] ),
        h('button#mR2.mR', r[2] ), 
        h('button#mR3.mR', r[3] ), 
        h('button#mR4.mR', r[4] ), 
        h('button#mR5.mR', r[5] ),
        h('button#mR6.mR', r[6] ), 
        h('button#mR7.mR', r[7] ), 
        h('button#mR8.mR', r[8] ), 
        h('button#mR9.mR', r[9] ),
        h('button#mR10.mR', r[10] ), 
        h('button#mR11.mR', r[11] ), 
        h('button#mR12.mR', r[12] ), 
        h('button#mR13.mR', r[13] ),
        h('button#mR14.mR', r[14] ), 
        h('button#mR15.mR', r[15] ) 
      ];
    } `),



              h('p', ' button#R9.mR has id "#R9" and formatting class "mR". When numbers are rearranged, the id\'s remain in fixed positions. '),
              h('p', ' The process is responsive because r83 and r815 are merged in the stream that feeds the virtual DOM; i.e., the stream returned by main() and fed back into main() by run(). Cycle.run(main, sources) is the last line of the front-end code. '),
              h('p', ' This code undoubtedly deviates from Cycle.js and functional programming recommended practices. After all, rNumsDS and rDataDS are global variables tracking the state of the grid. Cycle.js favors maintaining state in streams and functional aficionados eschew global variables, period. Me, I just like to make things work as neatly and efficiently as I can. Making a state stream would be a hassle and, since this is not a group effort, nobody is going to hijack my variable names. So, for now, grid state will hang out in global scope. '),





              h('h2', ' MonadEr - An Error-Catching Monad '),
              h('p', ' Instances of MonadEr function much the same as instances of Monad, but when an instance of MonadEr encounters an error, it ceases to perform any further computations. Instead, it passes through every subsequent stage of a sequence of MonadEr expressions, reporting where it is and repeating the error message. It will continue to do this until it is re-instantiated or until its bnd() method runs on the function clean(). '),
              h('p', 'Functions used as arguments to the MonadEr bnd() method can be placed in quotation marks to prevent the browser engine from throwing reference errors. Arguments can be protected in the same manner. Using MonadEr can prevent the silent proliferation of NaN results in math computations, and can prevent browser crashes due to attempts to evaluate undefined variables. '),
              h('p.tao1b', ' The monad laws hold for MonadEr instances. The following relationships were verified in the Chrome console: '),
              h('pre', `    ret3(0,'t',[])  // t is now an instance of MonadEr with t.x = 0 and t.e = [].

        t.ret(3).bnd(cube3).x === cube(3).x
        ret3(3).bnd(cube3).x === cube3(3).x

        t.bnd(t.ret) === t
        t.bnd(ret) === t

        t.ret(0).bnd(add3, 3).bnd(cube3).x ===
        t.ret(0).bnd(v => add3(v,3).bnd(cube3)).x  `),

              h('h3', 'Feedback From the Error Monad'),
              h('span#comments'),
              h('img.image', {
                props: {
                  src: "error2.png"
                }
              }),
              h('div#comment'),
              h('h2', {
                style: {
                  color: "red"
                }
              }, 'Comments'),

              h('a', {
                props: {
                  href: '#top'
                }
              }, 'Back to the top'),
              h('div#com2', {
                style: {
                  display: abcde
                }
              }),
              h('p', ' When this page loads in the browser, a user name is automatically generated in order to establish a unique WebSocket connection. This makes it possible to exchange text messages with other group members, play the game, and work on a shared todo list. If you want to leave a comment, you need to log in with a user name and a password of your choice. Each can be a single character or you could use a hard-to-hack combination of alphabet letter, numbers, and special characters. The main requirement is that there be only one comma, and that it be placed between the name and the password. '),
              h('p', 'The server will keep your user name and password in a text file. If you use your saved user name and password sometime in the future, you will be able to edit or delete any comments you previously made. '),
              h('p', ' If you enter a user name that has not been recorded, you will be logged in as that user. The user name and password will be saved. This means that you do not need to first register and then log in. This is an all-in-one process. If you enter a recognized user name but the password does not match the password in the record, you will be asked to try again. '),
              h('br'),
              h('h3', 'Register'),
              h('span.red', mMregister.x),
              h('input.register', {
                style: {
                  display: mMshowRegister.x
                }
              }),
              h('br'),
              h('br'),
              h('h3', 'COMMENTS - One paragraph at a time.'),
              h('textarea#comment', {
                style: {
                  width: "60%",
                  height: "90px"
                }
              }, ''),
              h('br'),
              h('br'),
              h('div', commentMonad.html),
              h('p', ' When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1]. '),
              h('p', ' When a comment is created, modified, or deleted, a WebSocket message goes to the server which performs some of its own housekeeping and broadcasts a message to all online browsers. It is received in messages$ and forwarded comments.js. '),
              h('p', ' The functions in the comments.js file mutate commentsMonad. There is no reason to create fresh instances of commentMonad, other than out of devout devotion to the doctrine of non-mutation. How silly that would be! Nothing touches commentMonad outside of the comments.js file; there is no danger. '),
              h('p', ' commentMonad stands in stark contrast to the gameMonad, which is never mutated although it sees much action during game play. Immutability is necessary for game history traversal. Here is the entire Comments.js file: '),
              h('pre', `function showFunc (name, name2)
  {return name == name2 ? 'inline-block' : 'none'}

  var MonadState3 = function MonadState3(g, state) {
    this.id = g;
    this.s = state;
    this.bnd = (func, ...args) => func(this.s, ...args);
    this.ret = function (a) {
      return window[this.id] = new MonadState(this.id, a);
    };
  }  

  bind2(n)(cubeP)(addP(3))(a=>a+ar[0]+ar[1]-18)(multP(1/3))
    (addP(-11))(()=>ar[1]+ar[2]+ar[3])(terminate) ;

  var commentMonad = new MonadState3('commentMonad',   [ '', [] ]);

  MonadState3.prototype.html = [];

  MonadState3.prototype.init = function (str) { // fetch all comments
    this.s[0] = str;
    this.s[1] = this.s[0].split("<@>");
    this.s[1] = this.s[1].filter(v => (v != ""));
    process(this.s[1]);
  }

  MonadState3.prototype.append = function (str) {
    this.s[0] = this.s[0] + str;
    this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
    process(this.s[1]);
  }

  MonadState3.prototype.edit = function (num,txt) {
    this.s[1].splice(num,1,txt);
    this.s[0] = this.s[1].join("<@>");
    this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
    process(this.s[1]);
  };

  MonadState3.prototype.remove = function (num) {
    this.s[1] = this.s[1].filter(v => v!== '');
    this.s[1].splice(num,1);
    this.s[0] = this.s[1].join("<@>");
    this.html = process(this.s[1]);
    return this.html;
  };

  function process (a) { //Assembles the HTML for display.
    var arr = a;
    mMcomments.ret([]);
    var n = -1;
    arr.map(a => {
      var x = a.split("<o>");
      if (x.length != 2) x = ['malfunction', '8888']
      x[1] = x[1].replace(/<<>>/g, ',');
      show = showFunc(x[0], pMname.x);
      n+=1;
      mMcomments.bnd(push, h('div#'+n, [
        h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
        h('br'),
        h('textarea#commit', {props: {cols: 55, rows: 2},
           style: {display: show }}, x[1]),
        h('button#deleteB', {props: {innerHTML: 'delete'},
       style: {display: show, fontSize:14}}),
        h('br' ),
        h('span', '***************************************************************')
      ]))
    })
  } `),
              h('div#curryDef'),
              h('br'),
              h('pre', `function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };

  }

  function curryReverse(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args.reverse());
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };

  } `),

              h('a', {
                props: {
                  href: '#top'
                }
              }, 'Back to the top'),
              h('p', ' *************************************************************************************** '),

              h('h3', ' STATEMENT OF DAVID SCHALK '),
              h('p', styleFunc(["#a2f2e8", , "18px", "italic", , ]), 'Functional programming aficionados will have noticed by now that I do not scrupulously avoid mutation of variables, variables in global scope, functions that fish data from outside their scopes, or functions that produce side effects before they return. Is there method to my madness? Am I crazy like a fox? Or am I just setting bad examples with sloppy code? Here\'s what I say about all of that: '),
              h('p', ' For me, functional programming is not a religious cult to whose dogmas I must scrupulously adhere. Mutating variables inside of functions can minimize lines of code and promote efficiency. The global variable that starts out as: '),
              h('pre', `  var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] `),
              h('p', ' feels elegant to me. It is a simple proxy for the sixteen square grid that never needs to be operated upon directly because the placement of its numbers are in one-to-one correspondence with the placement of its (rNumsDS\'s) elements. I could have tucked it away in an object or closure, but I like it so much that I dignified it with the designation "window.rNumsDS". I ignored an important rule. I did it more than once, and it isn\'t the only important rule I ignored. But in every case, there was an advantage (if only in efficiency), and I made sure that no harm could come from my deviations. '),
              h('p', ' If I were working in a group, or providing something that would be maintained by anyone other than me, I would code by the book. I\'m not getting paid for this work; I\'m just having fun. Dig it! '),

              h('h3', 'Haskell Time'),
              h('p', ' This page is for front end developers, but in case anyone is interested, here are the server functions responsible for deleting or amending a comment: '),
              h('pre', `    removeOne _ []                 = []
    removeOne x (y:ys) | x == y    = ys
                       | otherwise = y : removeOne x ys

    changeOne :: Text -> Text -> [Text] -> [Text]
    changeOne _ _ []                 = []
    changeOne z x (y:ys) | x == y    = z : ys
                         | otherwise = y : changeOne z x ys `),

              h('a', ' Every message sent to the server is a comma separated string beginning with a prefix, then a group, and then a name. Comma separated items after that are named extra and extra2. '),
              h('p', ' The code belw is responsible for dealing with comments. As in the browser, WebSocket messages are dealt with according to their six character prefixes. extra and extra2 are the only pertinent data since comments go to all groups '),
              h('pre', `else if "GZ#$42" \`T.isPrefixOf\` msg
                    -- FETCH AND BROADCAST ALL COMMENTS ON BROWSER LOAD
     then
         do
             st <- atomically $ readTVar state
             broadcast ("GZ#$42," \`mappend\` group \`mappend\` ","
               \`mappend\` sender \`mappend\` "," \`mappend\` comments ) st

  else if "GN#$42" \`T.isPrefixOf\` msg
                    -- RECEIVE A NEW COMMENT, UPDATE THE FILE AND THE TVAR,
                    --  AND BROADCAST THE NEW COMMENT
     then
         do
             old <- atomically $ readTVar comms
             lk <- atomically L.new
             let c = old \`mappend\` (T.replace (at \`mappend\` at) at extra)
             let new = T.replace (at \`mappend\` at) at c -- cleanup
             L.with lk $ TIO.writeFile xcomments new -- lock on writing
             atomically $ writeTVar comms new
             st <- atomically $ readTVar state
             broadcast ("GN#$42," \`mappend\` group \`mappend\` ","
                 \`mappend\` sender \`mappend\` "," \`mappend\` extra) st

   else if "GD#$42" \`T.isPrefixOf\` msg      -- DELETE A COMMENT
      then
          do
              a <- TIO.readFile xcomments
              lk <- atomically L.new
              let b = T.splitOn at a
              let c = removeOne extra2 b
              let d = T.intercalate at c
              L.with lk $ TIO.writeFile xcomments d
              atomically $ writeTVar comms d
              st <- atomically $ readTVar state
              broadcast ("GD#$42," \`mappend\` group \`mappend\` ","
                \`mappend\` sender \`mappend\` "," \`mappend\` extra) st

   else if "GE#$42" \`T.isPrefixOf\` msg      -- EDIT A COMMENT
      then
          do
              a <- TIO.readFile xcomments
              lk <- atomically L.new
              let b = T.splitOn at a
              let c = changeOne extra3 extra2 b
              let txt = T.intercalate at c
              L.with lk $ TIO.writeFile xcomments txt
              atomically $ writeTVar comms txt
              st <- atomically $ readTVar state
              broadcast ("GE#$42," \`mappend\` group \`mappend\` com
                \`mappend\` sender \`mappend\` com \`mappend\` extra \`mappend\` com
                   \`mappend\` extra3) st   `),
              h('a', {
                props: {
                  href: '#top'
                }
              }, 'Back To The Top'),
              h('br'),

              h('div#reactivity'),
              h('br'),
              h('a', {
                props: {
                  href: "#reactivity2"
                }
              }, 'Back to the pingpong demo'),

              h('h3', 'Reactivity in Cycle.js'),

              h('p', ' The stream incF$ and the driver pingpongDriver() (both defined below) are essential components of the pingpong demonstration. '),

              h('pre', blue, `  var incF$ = n => xs.of(n);

      function pingpongDriver () {
        return xs.create({
          start: listener => {
            incF$ = k => listener.next(k)
          },
          stop: () => {}
        })
      };  `),
              h('p', ' Whenever the stream incF$() is called, the stream returned by pingpongDriver is augmented and that causes main() to return an object whose only element is a map from the stream calcStream$ to a virtual DOM node with many children. calcStream$ is produced by merging 48 streams together including ping$ resulting from ping(n) where "n" is the number supplied by pingpongDriver (a/k/a "sources.PP"). The first two lines of main()\'s return value are shown below. '),
              h('pre', `    return { DOM: calcStream$.map(() => {
                                                           return h('div.main', [  `),


              h('p', ' merged into it. Each time main returns, Snabbdom\'s diff and render routine executes inside of run(sources,main). run(sources,main) calls main() and furnishes it with the listeners provided by the drivers. New events cause the cycle to repeat. '),
              h('p', ' ping(-5)([0,0]) is called when the pingpong button is clicked. Here\'s the relevant code:'),
              h('pre', `  var pingpong$ = sources.DOM
        .select(\'buttonr#ingpong\').events(\'click\').map(() => ping(0)([0,0]));

      var ppR = {style: {color: 'red',
        marginLeft: '5%', fontSize: "26"}};
      var ppY = {style: {color: 'yellow',
        marginLeft: '42%', fontSize: "26"}};
      var ppRY = {style: {color: 'yellow',
        marginLeft: '5%', fontSize: "26"}};
      var ppYR = {style: {color: 'red',
        marginLeft: '42%', fontSize: "26"}};

      var ppStyle = false;


      var ping = n => ar => {
        var k = Math.floor(Math.random() * 5)+1;
        if(ar[0] > 10 || ar[1] > 10) {
          diffRender();
          return;
        }
        setTimeout(() => {
          if (n <= k) {
            ppStyle = !ppStyle;
            incF$(n);
            ping(n+1)(ar);
          }
          else if (n % 2 === 0) {
            ar[0]+=1;
            m67_RESULT = h('pre', ppYR, \`     SCORE: ping  \${ar[0]} pong: \${ar[1]}  \` )W
            ping(0)(ar);
          }
          else {
            ar[1]+=1
            m67_RESULT = h('pre', ppY, \`     SCORE: ping  \${ar[0]} pong: \${ar[1]}  \` );
            ping(0)(ar);
          }
        }, 500 )
      }  `),
              h('p', ' The function diffRender() forces Snabbdom to perform one last diff and render. It is defined as follows: '),
              h('pre', `  const diffRender = () => document.getElementById("testQ").click();`),
              h('p', ' The button "testQ" cubes the number 2 in the MonadItter demonstration. It was chosen because it does not significantly affect anything aside from forcing Snabbdom to update the DOM. '),

              h('p', ' The stream incF$ and the driver pingpongDrirun(main, sources) are the crucial Cycle.js application functions. sources contains the drivers. sources.PP = pingpongDriver is one of the drivers consumed by run() and made available in main() so information can be sent back to run. Round and round it goes. Here is the definition of ping$. '),

              h('span.tao', ' The monads do not depend on Cycle.js. They can be used in React, Node, and all other browser-based applications. I happen to prefer Cycle.js working in conjunction with a Haskell WebSocket server. '),
              h('br'),
              h('h2', 'Appendix A - The Game Code'),
              h('pre', `function MonadState(g, state) {
    this.id = g;
    this.s = state;
  };  `),
              h('a', {
                props: {
                  href: '#gameIntro'
                }
              }, 'Back to the first group of demonstrations.'),
              h('p'),
              h('pre', `MonadState.prototype.run = function ([
    score = this.s[0][this.s[1]][0],
    goals = this.s[0][this.s[1]][1],
    operator = this.s[0][this.s[1]][2],
    picked = this.s[0][this.s[1]][3].slice(),
    display = this.s[0][this.s[1]][4].slice()
    playerName = this.s[0][this.s[1]][5] ? this.s[0][this.s[1]][5].slice() : "nobody",
    playerGroup = this.s[0][this.s[1]][6] ? this.s[0][this.s[1]][6].slice() : "solo",
  ]) {
    this.s[1] += 1;
    var newState = this.s.slice();
    newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display,playerName,playerGroup])
     console.log("[score, goals, operator, picked, display]",
       [score, goals, operator, picked, display,playerName,playerGroup]);
    this.s = newState;
    buttonNode = bNode(display);
    return window['gameMonad'] = new MonadState('gameMonad', newState);
  }

  var gameMonad = new MonadState('gameMonad', [[[0,0,0,[],[1,2,3,4]],
        [0,0,0,[],[0,0,0,0]]],1 ]);  `),
              h('p', ' Here is the code that controls what happens when a player clicks a number or an operator: '),
              h('pre', `  var numClickAction$ = numClick$.map(e => {
      if (gameMonad.fetch3().length < 2)  {
        var a = gameMonad.fetch3();
        var b = gameMonad.fetch4();
        a.push(b.splice(e.target.id, 1)[0]);
        gameMonad.run([,,,a,b,,]);
        if (a.length === 2 && gameMonad.fetch2() != 0) {
          updateCalc(a, gameMonad.fetch2())
        }
      }
    }).startWith([0, 0, 0, 0]);

    var opClick$ = sources.DOM
        .select('.op').events('click');

    var opClickAction$ = opClick$.map(e => {
      var s3 = gameMonad.fetch3();
      if (s3.length === 2) {
        updateCalc(s3, e.target.innerHTML);
      }
      else {
        gameMonad.run([,,e.target.innerHTML,,,,]);
      }
    });  `),
              h('p', ' Notice the empty spaces in the arguments to gameMonad.run(). gameMonad.run()\'s argument is an array to facilitate calling it with default values. In numClickAction$ we are not changing the score, goals, or operator. The default values of these parameters are their current values. In opClickAction$, we are changing only one thing, the operator. Everything else stays as it is. '),
              h('p', ' When two numbers and an operator have been selected, control passes to updateCalc(). Here\'s the code: '),


              h('pre', `function updateCalc(ar, op) {
    var result = calc(ar[0], op, ar[1]);ar
    if (result === 18 || result === 20) {
      score(result);
    }
    else {
      var a = gameMonad.fetch4().slice();
      a.push(result);
      gameMonad.run([,,0,[],a,,]);  // Display the result and
                                  // reset the operator and selected values.
    }
  };

  function score(result) {
      var sc = parseInt(gameMonad.fetch0());
      var sco = result === 18 ? sc + 3 : sc + 1;
      var scor = sco % 5 === 0 ? sco + 5 : sco;
      var goals = gameMonad.fetch1();
      if (scor === 25 && gameMonad.fetch1() === "2") {  // The player wins.
          mMindex.ret(0);
          gameMonad = new MonadState('gameMonad',
             [[[0,0,0,[],[0,0,0,0]],[0,0,0,[][0,0,0,0]]],0]);
          socket.send(\`CE#$42,${pMgroup.x},${pMname.x}\`);
          // Ask the server to announce the winner to the entire group
          newRoll(0,0);
      }
      else if (scor === 25) {
        newRoll(0, parseInt(goals,10) + 1);
      }
      else newRoll(scor, goals);   // No increase in the number of goals.
  };   `),
              h('span.tao', ' Additional code is available at'),
              h('a', {
                props: {
                  href: "https://github.com/dschalk/monads-in-JavaScript",
                  target: "_blank"
                }
              }, 'monads-in-JavaScript.'),
              h('p', '.'),
              h('p'),

              h('h3', 'Appendix B - Curried Functions Used In Several Demonstrations'),

              h('pre#wait', ` function square (v) {
      return ret(v*v)
    };

    function cube (v, id) {
      return ret(v*v*v, id);
    };

    function add (a, b, id) {
      return ret((parseInt(a,10) + parseInt(b,10)),id);
    };

    const divCinverse = a => b => ret(e/b);
    const divC = a => b => ret(b/a);
    const addC = a => b => ret(a+b);
    const cubeC = v => ret(v*v*v);
    const multC = a => b => ret(a*b);
    const doubleC = a => ret(a+a);
    const squareC = a => ret(a*a);
    const sqrtC = a => ret(Math.sqrt(a));

  function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  } h('a#it4', {props: {href: '#top'}}, 'Back to the top'),

  async function cubeP (x) {
    await wait(2000)
    return ret(x*x*x);
  } 

  const addP = x => async y => {
    await wait(2000)
    return ret(x + y);
  }

  async function squareP (x) {
    await wait(2000)
    return ret(x*x);
  }

  const divPinverse = a => async b => {
    await wait (2000)
    return ret(a/b);
  }

  const divP = a => async b => {
    await wait (2000)
    return ret(b/a);
  }

  const sqrtP = async a => {
    await wait (2000)
    return ret(Math.sqrt(a));
  }

  const doubleP = async a => {
    await wait (2000)
    return ret(a+a);
  }

  const multP = x => async y => {
    await wait(2000)
    return ret(x * y);
  }

      `),

              h('p'),
              h('h3', 'Appendix C - Further Reading '),
              h('p', ' Here is a good resource: '),
              h('a', {
                props: {
                  href: "https://github.com/getify/You-Dont-Know-JS",
                  target: "_blank"
                }
              }, 'You Don\'t Know JavaScript by Kyle Simpson'),
              h('span', ' You can support the open-source digital version of this book with Patreon at the above address or purchase hard copies from O\Reily, Amazon, etc. '),
              h('a', {
                props: {
                  href: "https://github.com/getify/You-Dont-Know-JS",
                  target: "_blank"
                }
              }, 'You Don\'t Know JavaScript'),
              h('span', ' is the thinking developer\'s answer to '),
              h('a', {
                props: {
                  href: "http://shop.oreilly.com/product/9780596517748.do",
                  target: "_blank"
                }
              }, ' "JavaScript: The Good Parts" by Douglas Crockford '),
              h('p', ' That\'s not to say that Crockford isn\'t a thinking developer. He is a very bright guy. It\'s just that the so called "good parts" are a dumbed down subset of JavaScript that help keep people out of trouble when they don\'t feel inclined understand the JavaScript programming language. '),
              h('span#cyclet', ', which has long been revered as a "must read" JavaScript book. Kyle Simpson recommends learning to use potentially dangerous code intelligently while Douglas Crockford advocates never using it at all. I think the phrase "eval is evil" stems from Crockford\'s book. I find eval() to be very useful from time to time. Kyle Simpson teaches programmers how to safely tap the full potential of JavaScript. '),
              h('br'),

              // h('a', {props: {href: '#top'}}, 'Back to the bind discussion.'),
              h('a', {
                props: {
                  href: '#top'
                }
              }, 'Back to the top'),

              h('h3', 'MonadItter'),
              h('p', ' The MonadItter section of the page has a detailed discussion and live demonstrations. This is the definition: '),
              h('pre', `  var MonadItter = function MonadItter() {
    this.p = function () {};
    this.release = function () {
      return this.p.apply(this, arguments);
    };
    this.bnd = function (func) {
      return this.p = func;
    };
  }; `),
              h('h3', 'Promises'),

              h('p', ' As the definition of MonadItter shows, bnd() saves functions until release() causes them to execute. MonadItter instances are usually used on this webpage where promises, generators, and async/await could also do the job. '),
              h('p', 'Here are the Promises-based functions prm4() and prm6() that can be substituted for it4() and it6() in the expression bind(145)(cubeC)(it4)(it6): '),
              h('pre', `  const prm4 = x => {
    if (socket.readyState === 1) socket.send(\'BB#\$42,pMgroup,pMname,' + x);
    return new Promise( (resolve, reject) => {
       mMZ37.bnd((y) => resolve(ret(y)))
    })
  }

  const prm6 = x => {
    workerG.postMessage([primesMonad.s, [x]]);
    return "Done"
  } `),

              h('p', ' Error handling is easy when using MonadItter instances, and is entirely optional. '),
              h('p', ' After "bind(145)(cubeC)(it4)(it6)(it7) runs, the prime decomposition of the number it recieved arrives from workerG. The workerGDriver (sources.WWG) detects the message and adds it to the workerG$ stream. Here is the definition of workerGDriver:  '),
              h('pre', `  function workerGDriver () {
    return xs.create({
      start: listener => { workerG.onmessage = msg => listener.next(msg)},
      stop: () => { workerG.terminate() }
    });
  }; `),
              h('p', ' Clicking the "decompose fifteen random numbers" button causes factorsRecursion(0) to execute. Here\'s the code: '),
              h('pre', blue, `  const factorsRecursion = n => bind(145)(cubeC)(it4)
    (it6)(() => { if (n < 15) factorsRecursion(n+1)}); `),
              h('p', 'result778(m.data) is called each time a message from workerG arrives. The definition of result778 is:   '),
              h('pre#defs', blue, `var result778 = x => h('div', [
      m778_RESULT,
      h('br'),
      h('span', bigBlue, x[3] ),
      h('span', bigGreen, x[0] ),
      h('span', bigBlue, x[4] ),
      h('span', bigRed, x[5] ),
  ]); `),
              h('a', {
                props: {
                  href: '#demo2'
                }
              }, 'Go to Demonstration 1'),
              h('p', ' This is how Cycle.js handles click events in Demonstrations "1" and "3": '),
              h('pre', `  var clearClick7$ = sources.DOM
        .select('button.clear_Q').events('click')
        .map(() => {
          m42_ = [];
        })

    var factorsClick7$ = sources.DOM
      .select('button#factors_Q').events('click');

    var factorsAction7$ = factorsClick7$.map( e => {
      m42_ = [];
      Bind.bind0 = [];
      let ii = 0;
      while (ii < 25) {
          bind(145)(x=>x**3)(it4)(it6)(it7);
          ii += 1;
      }
    });

    var clearClick8$ = sources.DOM
        .select('button.clear_R').events('click')
        .map(() => {
          m43_ = [];
        })

    var factorsClick8$ = sources.DOM
      .select('button#factors_R').events('click');

  var factorsAction8$ = factorsClick8$.map( e => { m43_ = [];
    var i = 0;
    m43_ = [];
    var bd = Bind("bd");
    while (i < 25) {
        bd(145)(x=>x**3)(it4_b)(it6_b)(it7_b)();
        i += 1;
    }
  }); `),
            h('p', ' After 145 is cubed, it4 (Demonstration 1) and it4_b (Demonstration 2) request a pseudo-random numbers as follows: '),
            h('pre', `  var it4 = x => {
    if (socket.readyState === 1) socket.send(\`BC#$42,${pMgroup.x},${pMname.x},${x}\`);
  }
   
  var it4_b = x => {
    if (socket.readyState === 1) socket.send(\`BD#$42,${pMgroup.x},${pMname.x},${x}\`);
  } `),
            h('p', ' The server complies by generating a pseudo-random number, "z", and broadcasts it to all members of the requestor\'s group. Users can join or create groups in the game section. Here\'s the server code: '),
            h('pre', `  else if "BC#$42" \`T.isPrefixOf\` msg     -- Generate a random number          
     then                                          
         do
             print "extraNum:"
             print extraNum
             z <- Fm.rM extraNum 
             print z
             st <- atomically $ readTVar state
             broadcast ("BC#$42," \`mappend\` group \`mappend\` "," 
               \`mappend\` sender \`mappend\` "," \`mappend\` (pack $ show z) ) st

  else if "BD#$42" \`T.isPrefixOf\` msg     -- Generate a random number          
     then                                          
         do
             print "extraNum:"
             print extraNum
             z <- Fm.rM extraNum 
             print z
             st <- atomically $ readTVar state
             broadcast ("BD#$42," \`mappend\` group \`mappend\` "," 
               \`mappend\` sender \`mappend\` "," \`mappend\` (pack $ show z) ) st `),

            h('p', ' The Cycle.js front end recieves the WebSocket message, triggering the release of mMZ29 (Demonstration 1) or mMZ29 (Demonstration 3). The "mMZ" prefix is reserved for instances of MonadItter. Here the code that was waiting to be released. '),
            h('pre', `  mMZ28.bnd( () => {
    if (playerName === sender) mMZ40.release(v[3]);
    else console.log('message from sender to BC#$42')
  });

  mMZ29.bnd( () => {
    if (playerName === sender) mMZ41.release(v[3]);
    else console.log('message from sender to BD#$42')
  }); `),
            h('p', ' "v(3)" is the random munber recieved from the server. It is given to mMZ40 or mMZ41 when they are released. Here are it6 and it6_b, which contain the the code that is released: '),
            h('pre', `  var it6 = y => {
    mMZ40.bnd(y => workerH.postMessage([primeState, y]));
  }

  var it6_b = y => {
    mMZ41.bnd(y => workerM.postMessage([primeState, y]));
  } `),
            h('p', ' The message posted to workerH (Demonstration 1) or workerM (Demonstration 3) contains all previously generated prime numbers along with y, the randomly generated number obtained from the server. '),
            h('p', ' The message returned by the server prompts, in the case of Demonstration 1: '),

            h('pre', bigGold, `  const factorsAction7$ = factorsClick7$.map( e => {
      m42_ = [];
      Bind.bind0 = [];
      let i = 0;
      while (i < 25) {
          bind(145)(x=>x**3)(it4)(it6)(it7);
          i += 1;
      }
  } `),
            h('p', ' And that is where this discussion began. '),
            h('br'),
            h('br'),
            h('a', {
              props: {
                href: '#top'
              }
            }, 'Go to the top'),
            h('br'),
            h('pre', `function Bind (str) {
  arBind[str] = [];
  var p;
  var __bind = function __bind ( x ) {
    if (x instanceof Promise) x.then(y => {
      arBind[str].push(y);
      diffRender();
    })
    else {
      arBind[str].push(x)
      diffRender();
    }
    return func => {
      if (func == undefined) {
        return arBind[str]}
        if (typeof func !== "function") p = func;
      if (x instanceof Promise) {
        p = x.then(v => func(v));
      }
      else p = func(x);
      return __bind(p);
    };
  };
  return __bind;
};

var bind$ = n => xs.of(n);

function bindDriver () {
  return xs.create({
    start: listener => { bind$ = a => listener.next(a) },
    stop: () => {}
  })
};

var bind1 = Bind("bind1");
var bind2 = Bind("bind2");
var bind3 = Bind("bind3");
var bind4 = Bind("bind4");
var bind5 = Bind("bind5");
var bind6 = Bind("bind6");
var bind7 = Bind("bind7");
var bind8 = Bind("bind8");
var bind9 = Bind("bind9"); `),





            h('p#pingmaker', ' '),

            h('a', {
              props: {
                href: '#backToDem2'
              }
            }, 'Back to Demonstration 2'),
            h('br'),
            h('br'),
            h('p', ' This is the code involved in the pingpong demonstration. PingpongMaker\'s argument creates a namespace. The demonstration features three such namespaces. It verifies that each game proceeds with its own state, oblivious of the states of the other two games in progress. Bind uses its closure to achieve a similar effect. '),
            h('pre', `var pingD = a => b => c => h('div', [
  h('pre', a, \` ping        ---> \`), 
  h('pre', b, \`                 <---        pong \`), 
  h('pre',  \`          -- SCORE: ping: \` + c[0]  + \` pong: \` + c[1]  ),
]);

var PingpongMaker = (name) => {
  var a = _A1;
  var b = _A3;
  var c = [0,0];
  var n = 0;
  var bool = true;
  var k = Math.floor(Math.random() * 7)+1;
  return function train () {
    if (c[0] > 10 || c[1] > 10) return;
    var ms = 400;
    console.log('a.style.color, b.style.color, c', a.style.display, b.style.display, c);
    if (a === _A3) {a = _A1; b = _A3}
    else if (a === _A1) {a = _A3; b = _A2};
    if (n <= k) {
      n+=1;
      window[name] = pingD(a)(b)(c);
      diffRender();
    }
    else if (n % 2 === 0) {
      ms = 1200
      n = 0
      c[0]+=1;
      window[name] = pingD(_A1)(_A3)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    else if (n % 2 === 1) {
      ms = 1200;
      n = 0;
      c[1]+=1;
      window[name] = pingD(_A3)(_A2)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    setTimeout( function () {
      train();
    },ms );
  }
}  

PingpongMaker('m67_RESULT')
PingpongMaker('m68_RESULT')
PingpongMaker('m69_RESULT')  `),

            h('p#monads', ' m67_RESULT, m68_RESULT, and m69_RESULT are permanent fixtures in the virtual DOM description returned by main()'),

            h('a', {
              props: {
                href: '#top'
              }
            }, 'Back to the top'),
            h('br'),
            h('h2', 'The >>= operator'),
            h('p', ' The definition of >>= (pronounced "bind") used below is a variation that uses monads. As you see, encapsulating values in monads works smoothly, but adds nothing of value. Useful monads are in the Haskell server on the backend of this web page. Here it is: '),
            h('pre', `operator >>= left 11 = (left, right) => {
  return #\`\${right}(\${left}.x)\`;
}; `),
            h('span', ' >>= and expressions using >>= are compiled to JavaScript code with help from the '),
            h('a', {
              props: {
                href: "https://www.sweetjs.org/"
              }
            }, 'sweet.js library'),
            h('span', '.'),

            h('h3', 'Simple Functions'),

            h('p', ' The sweet.js code (orange color) below compiles to the golden Javascript code beneith it: '),
            h('span', 'sweet.js'),
            h('pre', {
              style: {
                color: 'orange'
              }
            }, `function Monad2(z) {
  this.x = z;
};

function ret (v) {
  return new Monad2(v);
}

var cube = x => ret(x*x*x);
var add = a => b => ret(a+b);
var square = v => ret(v*v); 

operator >>= left 11 = (left, right) => {
  return #\`\${left}.then(\${v => right(v)})\`;
};  

ret(3) >>= cube >>= add(3) >>= square >>= Math.sqrt ), `),

            h('span', 'JavaScript'),
            h('pre', {
              style: {
                color: "#FFD700",
                fontSize: "15"
              }
            }, `function Monad2(z_146) {
  this.x = z_146;
} 

function ret(v_147) {
  return new Monad2(v_147);
}

var cube_139 = (x_148) => ret(x_148 * x_148 * x_148);
var add_140 = (a_149) => (b_150) => ret(a_149 + b_150);
var square_141 = (v_151) => ret(v_151 * v_151);

Math.sqrt(square_141(add_140(3)(cube_139(ret(3).x).x).x).x);
  // 30  `),
            h('p', ' Notice how sweet.js changes the names of the functions and variables to prevent name clashes. '),

            h('h3', 'Functions That Carry State'),
            h('p', ' The following sweet.js code (orange color) compiles to the golden JavaScript code benieth it: '),
            h('span', 'sweet.js'),
            h('pre', {
              style: {
                color: 'orange'
              }
            }, `'lang sweet.js';

function Monad2(z) {
  this.x = z;
};

function ret (v) {
  return new Monad2(v);
}

var id = x => ret(x[0], x[1]);
var cube = x => ret([x[0]*x[0]*x[0], x[1].concat(x[0]*x[0]*x[0])]);
var square = x => ret([x[0]*x[0], x[1].concat(x[0]*x[0])]);
var add = a => b => ret([a+b[0], b[1].concat(a+b[0])]);

operator >>= left 11 = (left, right) => {
  return #\`\${right}(\${left}.x)\`;
};

var a = (ret([3, []]) >>= cube >>= add(3) >>= square).x[1].reduce( (a,b) => a+b );

var b = ( ret([0, []]) >>= add(3) >>= cube >>= 
(x => add(x[1][1])([x[1][1],x[1]])) >>=
(x => add(x[0])([-4 * x[1][0], x[1]]))).x[1]

console.log(a);

console.log(b); `),

            h('span', 'JavaScript'),
            h('pre', `function Monad2(z_10) {
  this.x = z_10;
}
function ret(v_11) {
  return new Monad2(v_11);
}
var id_0 = x_12 => ret(x_12[0], x_12[1]);

var cube_1 = x_13 => ret([x_13[0] * x_13[0] * x_13[0], x_13[1].concat(x_13[0] * x_13[0] * x_13[0])]);

var square_2 = x_14 => ret([x_14[0] * x_14[0], x_14[1].concat(x_14[0] * x_14[0])]);
var add_3 = a_15 => b_16 => ret([a_15 + b_16[0], b_16[1].concat(a_15 + b_16[0])]);
var a_8 = square_2(add_3(3)(cube_1(ret([3, []]).x).x).x).x[1].reduce((a_17, b_18) => a_17 + b_18);

var b_9 = (x_19 => add_3(x_19[0])([-4 * x_19[1][0], x_19[1]]))((x_20 => add_3(x_20[1][1])([x_20[1][1], x_20[1]]))(cube_1(add_3(3)(ret([0, []]).x).x).x).x).x[1];

console.log("a_8);

console.log(b_9);  `),
h('br'),

h('br'),
h('p', ' Snabbdom, xstream, and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimention and learning. '),
h('span.italic', ' Instances of Monad and Monad2 aren\'t Category Theory monads. They are inspired by Haskell monads which, in turn, are inspired by Category Theory. The modified subset of the Haskell Programming Language named "Hask" has true Category Theory monads, but the restrictions on Haskell necessay to make Hask a true Category render it nearly useless. '),
h('p', ' Taking inspiration from Category Theory and replicating, to the extent feasable, some of its essential features was the stroke of genius that lifted Haskell into the realm of robust enterprise ready programming languages. The reliably concurrent atomic transactions written in Haskell made it the language of choice for several large banks. Mimicking Haskell monads in  '),
h('a', {
  props: {
    href: "http://math.andrej.com/2016/08/06/hask-is-not-a-category/",
    target: "_blank"
  }
}, 'Hask is not a category.'),
h('span', ' by Andrej Bauer and the '),
h('a', {
  props: {
    href: '#discussion'
  }
}, 'Discussion'),
h('span', ' below. They provide a convenient interface for dealing with uncertainty and side effects in a purely functional manner. Adherence to the monad laws ' ),
              
h('span', ' helps instill confidence that the monads are robust, versatile, and reliable tools for isolating and chaining sequences of javascript functions. '),

            h('p', ' The demonstrations include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history (all group members see your score decrease or increase as you navegate backwards and forwards). Monads are shown performing lengthy mathematical computations asycronously in web workers. Monads encapsulate state. The error checking monad carries occurances of NaN and runtime errors through sequences of computations much like the Haskell Maybe monad. '),






            code.monad,


            h('span.tao', ' As discussed '),
            h('a', {
              props: {
                href: "#haskell"
              }
            }, 'above'),
            h('span', ', The Haskell Programming Language (which supports this website\'s server) draws inspiration from Category theory, but contains no rigorous category theory objects or morphisms.'),
            h('span', ' As discussed '),
            h('a', {
              props: {
                href: "#haskell"
              }
            }, 'below'),
            h('span', ', tHaskell Programming Language, which supports the back end of this website, draws inspiration from Category theory, but that is as far as it goes. '),

            h('h3', 'More Random Snippits'),
            h('p', '  Libraries and language modifications that impose constraints such as immutability, universal purity of functions, and strict typing can be useful, but this project takes a different approach. The JavaScript used herein is plain, unadorned, unrestricted Ecamascript 2018. '),
h('p', ' This is of little utility, but I like it: ' ),
h('pre', {style: {color: " #AADDAA",fontSize: "17px"}}, `  var ar = [x=>x, x=>x**3, x=>x+3, x=>x**2,                      
    x=>x*14, x=>x/1800, x=>x*6];

  var f = v => t => t.map(g=>v=g(v)); // repeatedly mutating "v".

  f(3)(ar)  //   [3, 27, 30, 900, 12600, 7, 42];  `),
            h('p', ' Objects are cloned so past states remain accessible but they are mutated inside of functions for efficiency and to keep the stack from overflowing. Functions ordinarily don\'t interact with the environments outside of their scopes but methods might cause side effects in the objects that contain them. "Functional programming" in this project is about using all that the language offers to create functions that streamline applications and make them readable, maintainable, and robust. Just be sure to cause side effects, alter the contents of specific addresses in memory, and define global variables with the utmost restraint and care.'),

            h('pre', `
var compose = (...fns) =>
fns.reduceRight((prevFn, nextFn) =>
  (...args) => nextFn(prevFn(...args)),
  value => value
);

var example = compose(
val => { console.log(1, val); return val**2; },
val => { console.log(2, val); return val+=4; },
val => { console.log(3, val); return val*=2; }); `),




            h('button#fredButton', fredButton),
            h('a', {
              props: {
                href: '#top'
              }
            }, 'Back to the top'),
            h('br'),
            h('input#change', diffRend),
            h('br'),
            h('input#textbox', `${pigText}`),
            h('div#changeDisplay', [diffRend]),
            h('button#diffRender', 'diffRender()'),
            h('br'),
            h('br'),
            h('br')
          ])
        ])
      })
    }
  }

  diffRender = () => document.getElementById('diffRender').click();
  sources.DOM = makeDOMDriver('#main-container');
  sources.WS = websocketsDriver;
  sources.GD = gridDriver;

  Cycle.run(main, sources);
