var multer = require('multer');
var util = require('util');
const { v4: uuid4 } = require('uuid');

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + './../../../public/');
  },
  filename: function (req, file, cb) {
    var ext = file.originalname.split('.');
    cb(null, uuid4() + '.' + ext[ext.length - 1]);
  }
});

var uploadF = multer({ storage: storage });


async function startUploadSingleFile(req, res) {
  let imageurl;
  let audiourl;
  try {
    const upload = util.promisify(uploadF.fields([{
      name: 'IMAGEUPLOAD', maxCount: 1
    }, {
      name: 'MUSICUPLOAD', maxCount: 1
    }]))
    await upload(req, res);
    console.log(req.files)
    imageurl = req.files['IMAGEUPLOAD'][0].filename;
    audiourl = req.files['MUSICUPLOAD'][0].filename;
    if (!!imageurl && !!audiourl) {
      return {
        status: true,
        urls: {
          imageurl,
          audiourl
        }
      };
    } else {
      return {
        status: false,
        msg: "File must be require."
      };
    }
  } catch (e) {
    return {
      status: false,
      msg: "Only image & audio files are allowed!"
    };
  }
}


async function startImageUploadSingleFile(req, res) {
  let filename;
  try {
    const upload = util.promisify(uploadF.single('IMAGEUPLOAD'));
    await upload(req, res);
    filename = req.file.filename;
    if (!!filename) {
      return {
        status: true,
        imageurl: filename
      };
    } else {
      return {
        status: false,
        msg: "File must be require."
      };
    }
  } catch (e) {
    return {
      status: false,
      msg: "Only image files are allowed!"
    };
  }
}


async function startMusicUploadSingleFile(req, res) {
  let filename;
  try {
    const upload = util.promisify(uploadF.single('MUSICUPLOAD'));
    await upload(req, res);
    filename = req.file.filename;
    if (!!filename) {
      return {
        status: true,
        audiourl: filename
      };
    } else {
      return {
        status: false,
        msg: "File must be require."
      };
    }
  } catch (e) {
    return {
      status: false,
      msg: "Only image files are allowed!"
    };
  }
}

module.exports = { startUploadSingleFile, startImageUploadSingleFile, startMusicUploadSingleFile };
