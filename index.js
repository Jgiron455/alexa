    var Alexa = require('alexa-sdk');

    const APP_ID = undefined; 

    exports.handler = function(event, context, callback) {
        var alexa = Alexa.handler(event, context);
        alexa.APP_ID = APP_ID;
        alexa.registerHandlers(handlers);
        alexa.execute();
    };

    var handlers = {
        'LaunchRequest': function () {
            this.emit('Welcome');
        },
        'Welcome': function () {
            this.emit(':tell', 'Welcome to our love home!');
        },
        'FindRoom': function () {
            var input = this.event.request.intent.slots.Room.value;

            var room = input.toLowerCase();

            switch(room){
                case 'bedroom':
                    this.emit('FindBedroom');
                    break;
                case 'living room':
                    this.emit('FindLivingRoom');
                    break;
                case 'kitchen':
                    this.emit('FindKitchen');
                    break;
                case 'toilet':
                    this.emit('FindToilet');
                    break;
                case 'bathroom':
                    this.emit('FindBathroom');
                    break;
                default:
                this.emit(':tell', 'Welcome to our lovely home!');

            }


        },
        'FindBedroom': function () {
            this.emit(':tell', 'The bedroom is on the right handside from the entrance.');
        },
        'FindToilet': function () {
            this.emit(':tell', 'The toilet is inside the bathroom.');
        },
        'FindKitchen': function () {
            this.emit(':tell', 'The kitchen is on the left handside from the entrance.');
        },
        'FindLivingRoom': function () {
            this.emit(':tell', 'The Living room is at the back opposite of the kitchen.');
        },
        'FindBathroom': function () {
            this.emit(':tell', 'The Bathroom in further down the hall beside the bedroom.');
        }
    };

