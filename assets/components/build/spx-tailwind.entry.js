import { r as registerInstance, e as createEvent, h, g as getElement } from './index-a2b24666.js';
import { g as globalComponentDidLoad } from './globalComponentDidLoad-70efb2c0.js';
import { g as globalComponentWillUpdate } from './globalComponentWillUpdate-956352aa.js';
import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs } from './_commonjsHelpers-8fe71198.js';
import { a as tw, t as twind } from './twind-12f9a8c2.js';
import './lodash-e2947591.js';
import './index-ef033006.js';

const require$$0 = {
	"0": 65533,
	"128": 8364,
	"130": 8218,
	"131": 402,
	"132": 8222,
	"133": 8230,
	"134": 8224,
	"135": 8225,
	"136": 710,
	"137": 8240,
	"138": 352,
	"139": 8249,
	"140": 338,
	"142": 381,
	"145": 8216,
	"146": 8217,
	"147": 8220,
	"148": 8221,
	"149": 8226,
	"150": 8211,
	"151": 8212,
	"152": 732,
	"153": 8482,
	"154": 353,
	"155": 8250,
	"156": 339,
	"158": 382,
	"159": 376
};

var decode_codepoint = createCommonjsModule(function (module, exports) {
"use strict";
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_json_1 = __importDefault(require$$0);
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
exports.default = decodeCodePoint;
});

const decode_codepoint$1 = /*@__PURE__*/getDefaultExportFromCjs(decode_codepoint);

const Aacute$1 = "Á";
const aacute$1 = "á";
const Abreve = "Ă";
const abreve = "ă";
const ac = "∾";
const acd = "∿";
const acE = "∾̳";
const Acirc$1 = "Â";
const acirc$1 = "â";
const acute$1 = "´";
const Acy = "А";
const acy = "а";
const AElig$1 = "Æ";
const aelig$1 = "æ";
const af = "⁡";
const Afr = "𝔄";
const afr = "𝔞";
const Agrave$1 = "À";
const agrave$1 = "à";
const alefsym = "ℵ";
const aleph = "ℵ";
const Alpha = "Α";
const alpha = "α";
const Amacr = "Ā";
const amacr = "ā";
const amalg = "⨿";
const amp$2 = "&";
const AMP$1 = "&";
const andand = "⩕";
const And = "⩓";
const and = "∧";
const andd = "⩜";
const andslope = "⩘";
const andv = "⩚";
const ang = "∠";
const ange = "⦤";
const angle = "∠";
const angmsdaa = "⦨";
const angmsdab = "⦩";
const angmsdac = "⦪";
const angmsdad = "⦫";
const angmsdae = "⦬";
const angmsdaf = "⦭";
const angmsdag = "⦮";
const angmsdah = "⦯";
const angmsd = "∡";
const angrt = "∟";
const angrtvb = "⊾";
const angrtvbd = "⦝";
const angsph = "∢";
const angst = "Å";
const angzarr = "⍼";
const Aogon = "Ą";
const aogon = "ą";
const Aopf = "𝔸";
const aopf = "𝕒";
const apacir = "⩯";
const ap = "≈";
const apE = "⩰";
const ape = "≊";
const apid = "≋";
const apos$1 = "'";
const ApplyFunction = "⁡";
const approx = "≈";
const approxeq = "≊";
const Aring$1 = "Å";
const aring$1 = "å";
const Ascr = "𝒜";
const ascr = "𝒶";
const Assign = "≔";
const ast = "*";
const asymp = "≈";
const asympeq = "≍";
const Atilde$1 = "Ã";
const atilde$1 = "ã";
const Auml$1 = "Ä";
const auml$1 = "ä";
const awconint = "∳";
const awint = "⨑";
const backcong = "≌";
const backepsilon = "϶";
const backprime = "‵";
const backsim = "∽";
const backsimeq = "⋍";
const Backslash = "∖";
const Barv = "⫧";
const barvee = "⊽";
const barwed = "⌅";
const Barwed = "⌆";
const barwedge = "⌅";
const bbrk = "⎵";
const bbrktbrk = "⎶";
const bcong = "≌";
const Bcy = "Б";
const bcy = "б";
const bdquo = "„";
const becaus = "∵";
const because = "∵";
const Because = "∵";
const bemptyv = "⦰";
const bepsi = "϶";
const bernou = "ℬ";
const Bernoullis = "ℬ";
const Beta = "Β";
const beta = "β";
const beth = "ℶ";
const between = "≬";
const Bfr = "𝔅";
const bfr = "𝔟";
const bigcap = "⋂";
const bigcirc = "◯";
const bigcup = "⋃";
const bigodot = "⨀";
const bigoplus = "⨁";
const bigotimes = "⨂";
const bigsqcup = "⨆";
const bigstar = "★";
const bigtriangledown = "▽";
const bigtriangleup = "△";
const biguplus = "⨄";
const bigvee = "⋁";
const bigwedge = "⋀";
const bkarow = "⤍";
const blacklozenge = "⧫";
const blacksquare = "▪";
const blacktriangle = "▴";
const blacktriangledown = "▾";
const blacktriangleleft = "◂";
const blacktriangleright = "▸";
const blank = "␣";
const blk12 = "▒";
const blk14 = "░";
const blk34 = "▓";
const block = "█";
const bne = "=⃥";
const bnequiv = "≡⃥";
const bNot = "⫭";
const bnot = "⌐";
const Bopf = "𝔹";
const bopf = "𝕓";
const bot = "⊥";
const bottom = "⊥";
const bowtie = "⋈";
const boxbox = "⧉";
const boxdl = "┐";
const boxdL = "╕";
const boxDl = "╖";
const boxDL = "╗";
const boxdr = "┌";
const boxdR = "╒";
const boxDr = "╓";
const boxDR = "╔";
const boxh = "─";
const boxH = "═";
const boxhd = "┬";
const boxHd = "╤";
const boxhD = "╥";
const boxHD = "╦";
const boxhu = "┴";
const boxHu = "╧";
const boxhU = "╨";
const boxHU = "╩";
const boxminus = "⊟";
const boxplus = "⊞";
const boxtimes = "⊠";
const boxul = "┘";
const boxuL = "╛";
const boxUl = "╜";
const boxUL = "╝";
const boxur = "└";
const boxuR = "╘";
const boxUr = "╙";
const boxUR = "╚";
const boxv = "│";
const boxV = "║";
const boxvh = "┼";
const boxvH = "╪";
const boxVh = "╫";
const boxVH = "╬";
const boxvl = "┤";
const boxvL = "╡";
const boxVl = "╢";
const boxVL = "╣";
const boxvr = "├";
const boxvR = "╞";
const boxVr = "╟";
const boxVR = "╠";
const bprime = "‵";
const breve = "˘";
const Breve = "˘";
const brvbar$1 = "¦";
const bscr = "𝒷";
const Bscr = "ℬ";
const bsemi = "⁏";
const bsim = "∽";
const bsime = "⋍";
const bsolb = "⧅";
const bsol = "\\";
const bsolhsub = "⟈";
const bull = "•";
const bullet = "•";
const bump = "≎";
const bumpE = "⪮";
const bumpe = "≏";
const Bumpeq = "≎";
const bumpeq = "≏";
const Cacute = "Ć";
const cacute = "ć";
const capand = "⩄";
const capbrcup = "⩉";
const capcap = "⩋";
const cap = "∩";
const Cap = "⋒";
const capcup = "⩇";
const capdot = "⩀";
const CapitalDifferentialD = "ⅅ";
const caps = "∩︀";
const caret = "⁁";
const caron = "ˇ";
const Cayleys = "ℭ";
const ccaps = "⩍";
const Ccaron = "Č";
const ccaron = "č";
const Ccedil$1 = "Ç";
const ccedil$1 = "ç";
const Ccirc = "Ĉ";
const ccirc = "ĉ";
const Cconint = "∰";
const ccups = "⩌";
const ccupssm = "⩐";
const Cdot = "Ċ";
const cdot = "ċ";
const cedil$1 = "¸";
const Cedilla = "¸";
const cemptyv = "⦲";
const cent$1 = "¢";
const centerdot = "·";
const CenterDot = "·";
const cfr = "𝔠";
const Cfr = "ℭ";
const CHcy = "Ч";
const chcy = "ч";
const check = "✓";
const checkmark = "✓";
const Chi = "Χ";
const chi = "χ";
const circ = "ˆ";
const circeq = "≗";
const circlearrowleft = "↺";
const circlearrowright = "↻";
const circledast = "⊛";
const circledcirc = "⊚";
const circleddash = "⊝";
const CircleDot = "⊙";
const circledR = "®";
const circledS = "Ⓢ";
const CircleMinus = "⊖";
const CirclePlus = "⊕";
const CircleTimes = "⊗";
const cir = "○";
const cirE = "⧃";
const cire = "≗";
const cirfnint = "⨐";
const cirmid = "⫯";
const cirscir = "⧂";
const ClockwiseContourIntegral = "∲";
const CloseCurlyDoubleQuote = "”";
const CloseCurlyQuote = "’";
const clubs = "♣";
const clubsuit = "♣";
const colon = ":";
const Colon = "∷";
const Colone = "⩴";
const colone = "≔";
const coloneq = "≔";
const comma = ",";
const commat = "@";
const comp = "∁";
const compfn = "∘";
const complement = "∁";
const complexes = "ℂ";
const cong = "≅";
const congdot = "⩭";
const Congruent = "≡";
const conint = "∮";
const Conint = "∯";
const ContourIntegral = "∮";
const copf = "𝕔";
const Copf = "ℂ";
const coprod = "∐";
const Coproduct = "∐";
const copy$1 = "©";
const COPY$1 = "©";
const copysr = "℗";
const CounterClockwiseContourIntegral = "∳";
const crarr = "↵";
const cross = "✗";
const Cross = "⨯";
const Cscr = "𝒞";
const cscr = "𝒸";
const csub = "⫏";
const csube = "⫑";
const csup = "⫐";
const csupe = "⫒";
const ctdot = "⋯";
const cudarrl = "⤸";
const cudarrr = "⤵";
const cuepr = "⋞";
const cuesc = "⋟";
const cularr = "↶";
const cularrp = "⤽";
const cupbrcap = "⩈";
const cupcap = "⩆";
const CupCap = "≍";
const cup = "∪";
const Cup = "⋓";
const cupcup = "⩊";
const cupdot = "⊍";
const cupor = "⩅";
const cups = "∪︀";
const curarr = "↷";
const curarrm = "⤼";
const curlyeqprec = "⋞";
const curlyeqsucc = "⋟";
const curlyvee = "⋎";
const curlywedge = "⋏";
const curren$1 = "¤";
const curvearrowleft = "↶";
const curvearrowright = "↷";
const cuvee = "⋎";
const cuwed = "⋏";
const cwconint = "∲";
const cwint = "∱";
const cylcty = "⌭";
const dagger = "†";
const Dagger = "‡";
const daleth = "ℸ";
const darr = "↓";
const Darr = "↡";
const dArr = "⇓";
const dash = "‐";
const Dashv = "⫤";
const dashv = "⊣";
const dbkarow = "⤏";
const dblac = "˝";
const Dcaron = "Ď";
const dcaron = "ď";
const Dcy = "Д";
const dcy = "д";
const ddagger = "‡";
const ddarr = "⇊";
const DD = "ⅅ";
const dd = "ⅆ";
const DDotrahd = "⤑";
const ddotseq = "⩷";
const deg$1 = "°";
const Del = "∇";
const Delta = "Δ";
const delta = "δ";
const demptyv = "⦱";
const dfisht = "⥿";
const Dfr = "𝔇";
const dfr = "𝔡";
const dHar = "⥥";
const dharl = "⇃";
const dharr = "⇂";
const DiacriticalAcute = "´";
const DiacriticalDot = "˙";
const DiacriticalDoubleAcute = "˝";
const DiacriticalGrave = "`";
const DiacriticalTilde = "˜";
const diam = "⋄";
const diamond = "⋄";
const Diamond = "⋄";
const diamondsuit = "♦";
const diams = "♦";
const die = "¨";
const DifferentialD = "ⅆ";
const digamma = "ϝ";
const disin = "⋲";
const div = "÷";
const divide$1 = "÷";
const divideontimes = "⋇";
const divonx = "⋇";
const DJcy = "Ђ";
const djcy = "ђ";
const dlcorn = "⌞";
const dlcrop = "⌍";
const dollar = "$";
const Dopf = "𝔻";
const dopf = "𝕕";
const Dot = "¨";
const dot = "˙";
const DotDot = "⃜";
const doteq = "≐";
const doteqdot = "≑";
const DotEqual = "≐";
const dotminus = "∸";
const dotplus = "∔";
const dotsquare = "⊡";
const doublebarwedge = "⌆";
const DoubleContourIntegral = "∯";
const DoubleDot = "¨";
const DoubleDownArrow = "⇓";
const DoubleLeftArrow = "⇐";
const DoubleLeftRightArrow = "⇔";
const DoubleLeftTee = "⫤";
const DoubleLongLeftArrow = "⟸";
const DoubleLongLeftRightArrow = "⟺";
const DoubleLongRightArrow = "⟹";
const DoubleRightArrow = "⇒";
const DoubleRightTee = "⊨";
const DoubleUpArrow = "⇑";
const DoubleUpDownArrow = "⇕";
const DoubleVerticalBar = "∥";
const DownArrowBar = "⤓";
const downarrow = "↓";
const DownArrow = "↓";
const Downarrow = "⇓";
const DownArrowUpArrow = "⇵";
const DownBreve = "̑";
const downdownarrows = "⇊";
const downharpoonleft = "⇃";
const downharpoonright = "⇂";
const DownLeftRightVector = "⥐";
const DownLeftTeeVector = "⥞";
const DownLeftVectorBar = "⥖";
const DownLeftVector = "↽";
const DownRightTeeVector = "⥟";
const DownRightVectorBar = "⥗";
const DownRightVector = "⇁";
const DownTeeArrow = "↧";
const DownTee = "⊤";
const drbkarow = "⤐";
const drcorn = "⌟";
const drcrop = "⌌";
const Dscr = "𝒟";
const dscr = "𝒹";
const DScy = "Ѕ";
const dscy = "ѕ";
const dsol = "⧶";
const Dstrok = "Đ";
const dstrok = "đ";
const dtdot = "⋱";
const dtri = "▿";
const dtrif = "▾";
const duarr = "⇵";
const duhar = "⥯";
const dwangle = "⦦";
const DZcy = "Џ";
const dzcy = "џ";
const dzigrarr = "⟿";
const Eacute$1 = "É";
const eacute$1 = "é";
const easter = "⩮";
const Ecaron = "Ě";
const ecaron = "ě";
const Ecirc$1 = "Ê";
const ecirc$1 = "ê";
const ecir = "≖";
const ecolon = "≕";
const Ecy = "Э";
const ecy = "э";
const eDDot = "⩷";
const Edot = "Ė";
const edot = "ė";
const eDot = "≑";
const ee = "ⅇ";
const efDot = "≒";
const Efr = "𝔈";
const efr = "𝔢";
const eg = "⪚";
const Egrave$1 = "È";
const egrave$1 = "è";
const egs = "⪖";
const egsdot = "⪘";
const el = "⪙";
const Element = "∈";
const elinters = "⏧";
const ell = "ℓ";
const els = "⪕";
const elsdot = "⪗";
const Emacr = "Ē";
const emacr = "ē";
const empty = "∅";
const emptyset = "∅";
const EmptySmallSquare = "◻";
const emptyv = "∅";
const EmptyVerySmallSquare = "▫";
const emsp13 = " ";
const emsp14 = " ";
const emsp = " ";
const ENG = "Ŋ";
const eng = "ŋ";
const ensp = " ";
const Eogon = "Ę";
const eogon = "ę";
const Eopf = "𝔼";
const eopf = "𝕖";
const epar = "⋕";
const eparsl = "⧣";
const eplus = "⩱";
const epsi = "ε";
const Epsilon = "Ε";
const epsilon = "ε";
const epsiv = "ϵ";
const eqcirc = "≖";
const eqcolon = "≕";
const eqsim = "≂";
const eqslantgtr = "⪖";
const eqslantless = "⪕";
const Equal = "⩵";
const equals = "=";
const EqualTilde = "≂";
const equest = "≟";
const Equilibrium = "⇌";
const equiv = "≡";
const equivDD = "⩸";
const eqvparsl = "⧥";
const erarr = "⥱";
const erDot = "≓";
const escr = "ℯ";
const Escr = "ℰ";
const esdot = "≐";
const Esim = "⩳";
const esim = "≂";
const Eta = "Η";
const eta = "η";
const ETH$1 = "Ð";
const eth$1 = "ð";
const Euml$1 = "Ë";
const euml$1 = "ë";
const euro = "€";
const excl = "!";
const exist = "∃";
const Exists = "∃";
const expectation = "ℰ";
const exponentiale = "ⅇ";
const ExponentialE = "ⅇ";
const fallingdotseq = "≒";
const Fcy = "Ф";
const fcy = "ф";
const female = "♀";
const ffilig = "ﬃ";
const fflig = "ﬀ";
const ffllig = "ﬄ";
const Ffr = "𝔉";
const ffr = "𝔣";
const filig = "ﬁ";
const FilledSmallSquare = "◼";
const FilledVerySmallSquare = "▪";
const fjlig = "fj";
const flat = "♭";
const fllig = "ﬂ";
const fltns = "▱";
const fnof = "ƒ";
const Fopf = "𝔽";
const fopf = "𝕗";
const forall = "∀";
const ForAll = "∀";
const fork = "⋔";
const forkv = "⫙";
const Fouriertrf = "ℱ";
const fpartint = "⨍";
const frac12$1 = "½";
const frac13 = "⅓";
const frac14$1 = "¼";
const frac15 = "⅕";
const frac16 = "⅙";
const frac18 = "⅛";
const frac23 = "⅔";
const frac25 = "⅖";
const frac34$1 = "¾";
const frac35 = "⅗";
const frac38 = "⅜";
const frac45 = "⅘";
const frac56 = "⅚";
const frac58 = "⅝";
const frac78 = "⅞";
const frasl = "⁄";
const frown = "⌢";
const fscr = "𝒻";
const Fscr = "ℱ";
const gacute = "ǵ";
const Gamma = "Γ";
const gamma = "γ";
const Gammad = "Ϝ";
const gammad = "ϝ";
const gap = "⪆";
const Gbreve = "Ğ";
const gbreve = "ğ";
const Gcedil = "Ģ";
const Gcirc = "Ĝ";
const gcirc = "ĝ";
const Gcy = "Г";
const gcy = "г";
const Gdot = "Ġ";
const gdot = "ġ";
const ge = "≥";
const gE = "≧";
const gEl = "⪌";
const gel = "⋛";
const geq = "≥";
const geqq = "≧";
const geqslant = "⩾";
const gescc = "⪩";
const ges = "⩾";
const gesdot = "⪀";
const gesdoto = "⪂";
const gesdotol = "⪄";
const gesl = "⋛︀";
const gesles = "⪔";
const Gfr = "𝔊";
const gfr = "𝔤";
const gg = "≫";
const Gg = "⋙";
const ggg = "⋙";
const gimel = "ℷ";
const GJcy = "Ѓ";
const gjcy = "ѓ";
const gla = "⪥";
const gl = "≷";
const glE = "⪒";
const glj = "⪤";
const gnap = "⪊";
const gnapprox = "⪊";
const gne = "⪈";
const gnE = "≩";
const gneq = "⪈";
const gneqq = "≩";
const gnsim = "⋧";
const Gopf = "𝔾";
const gopf = "𝕘";
const grave = "`";
const GreaterEqual = "≥";
const GreaterEqualLess = "⋛";
const GreaterFullEqual = "≧";
const GreaterGreater = "⪢";
const GreaterLess = "≷";
const GreaterSlantEqual = "⩾";
const GreaterTilde = "≳";
const Gscr = "𝒢";
const gscr = "ℊ";
const gsim = "≳";
const gsime = "⪎";
const gsiml = "⪐";
const gtcc = "⪧";
const gtcir = "⩺";
const gt$2 = ">";
const GT$1 = ">";
const Gt = "≫";
const gtdot = "⋗";
const gtlPar = "⦕";
const gtquest = "⩼";
const gtrapprox = "⪆";
const gtrarr = "⥸";
const gtrdot = "⋗";
const gtreqless = "⋛";
const gtreqqless = "⪌";
const gtrless = "≷";
const gtrsim = "≳";
const gvertneqq = "≩︀";
const gvnE = "≩︀";
const Hacek = "ˇ";
const hairsp = " ";
const half = "½";
const hamilt = "ℋ";
const HARDcy = "Ъ";
const hardcy = "ъ";
const harrcir = "⥈";
const harr = "↔";
const hArr = "⇔";
const harrw = "↭";
const Hat = "^";
const hbar = "ℏ";
const Hcirc = "Ĥ";
const hcirc = "ĥ";
const hearts = "♥";
const heartsuit = "♥";
const hellip = "…";
const hercon = "⊹";
const hfr = "𝔥";
const Hfr = "ℌ";
const HilbertSpace = "ℋ";
const hksearow = "⤥";
const hkswarow = "⤦";
const hoarr = "⇿";
const homtht = "∻";
const hookleftarrow = "↩";
const hookrightarrow = "↪";
const hopf = "𝕙";
const Hopf = "ℍ";
const horbar = "―";
const HorizontalLine = "─";
const hscr = "𝒽";
const Hscr = "ℋ";
const hslash = "ℏ";
const Hstrok = "Ħ";
const hstrok = "ħ";
const HumpDownHump = "≎";
const HumpEqual = "≏";
const hybull = "⁃";
const hyphen = "‐";
const Iacute$1 = "Í";
const iacute$1 = "í";
const ic = "⁣";
const Icirc$1 = "Î";
const icirc$1 = "î";
const Icy = "И";
const icy = "и";
const Idot = "İ";
const IEcy = "Е";
const iecy = "е";
const iexcl$1 = "¡";
const iff = "⇔";
const ifr = "𝔦";
const Ifr = "ℑ";
const Igrave$1 = "Ì";
const igrave$1 = "ì";
const ii = "ⅈ";
const iiiint = "⨌";
const iiint = "∭";
const iinfin = "⧜";
const iiota = "℩";
const IJlig = "Ĳ";
const ijlig = "ĳ";
const Imacr = "Ī";
const imacr = "ī";
const image = "ℑ";
const ImaginaryI = "ⅈ";
const imagline = "ℐ";
const imagpart = "ℑ";
const imath = "ı";
const Im = "ℑ";
const imof = "⊷";
const imped = "Ƶ";
const Implies = "⇒";
const incare = "℅";
const infin = "∞";
const infintie = "⧝";
const inodot = "ı";
const intcal = "⊺";
const int = "∫";
const Int = "∬";
const integers = "ℤ";
const Integral = "∫";
const intercal = "⊺";
const Intersection = "⋂";
const intlarhk = "⨗";
const intprod = "⨼";
const InvisibleComma = "⁣";
const InvisibleTimes = "⁢";
const IOcy = "Ё";
const iocy = "ё";
const Iogon = "Į";
const iogon = "į";
const Iopf = "𝕀";
const iopf = "𝕚";
const Iota = "Ι";
const iota = "ι";
const iprod = "⨼";
const iquest$1 = "¿";
const iscr = "𝒾";
const Iscr = "ℐ";
const isin = "∈";
const isindot = "⋵";
const isinE = "⋹";
const isins = "⋴";
const isinsv = "⋳";
const isinv = "∈";
const it = "⁢";
const Itilde = "Ĩ";
const itilde = "ĩ";
const Iukcy = "І";
const iukcy = "і";
const Iuml$1 = "Ï";
const iuml$1 = "ï";
const Jcirc = "Ĵ";
const jcirc = "ĵ";
const Jcy = "Й";
const jcy = "й";
const Jfr = "𝔍";
const jfr = "𝔧";
const jmath = "ȷ";
const Jopf = "𝕁";
const jopf = "𝕛";
const Jscr = "𝒥";
const jscr = "𝒿";
const Jsercy = "Ј";
const jsercy = "ј";
const Jukcy = "Є";
const jukcy = "є";
const Kappa = "Κ";
const kappa = "κ";
const kappav = "ϰ";
const Kcedil = "Ķ";
const kcedil = "ķ";
const Kcy = "К";
const kcy = "к";
const Kfr = "𝔎";
const kfr = "𝔨";
const kgreen = "ĸ";
const KHcy = "Х";
const khcy = "х";
const KJcy = "Ќ";
const kjcy = "ќ";
const Kopf = "𝕂";
const kopf = "𝕜";
const Kscr = "𝒦";
const kscr = "𝓀";
const lAarr = "⇚";
const Lacute = "Ĺ";
const lacute = "ĺ";
const laemptyv = "⦴";
const lagran = "ℒ";
const Lambda = "Λ";
const lambda = "λ";
const lang = "⟨";
const Lang = "⟪";
const langd = "⦑";
const langle = "⟨";
const lap = "⪅";
const Laplacetrf = "ℒ";
const laquo$1 = "«";
const larrb = "⇤";
const larrbfs = "⤟";
const larr = "←";
const Larr = "↞";
const lArr = "⇐";
const larrfs = "⤝";
const larrhk = "↩";
const larrlp = "↫";
const larrpl = "⤹";
const larrsim = "⥳";
const larrtl = "↢";
const latail = "⤙";
const lAtail = "⤛";
const lat = "⪫";
const late = "⪭";
const lates = "⪭︀";
const lbarr = "⤌";
const lBarr = "⤎";
const lbbrk = "❲";
const lbrace = "{";
const lbrack = "[";
const lbrke = "⦋";
const lbrksld = "⦏";
const lbrkslu = "⦍";
const Lcaron = "Ľ";
const lcaron = "ľ";
const Lcedil = "Ļ";
const lcedil = "ļ";
const lceil = "⌈";
const lcub = "{";
const Lcy = "Л";
const lcy = "л";
const ldca = "⤶";
const ldquo = "“";
const ldquor = "„";
const ldrdhar = "⥧";
const ldrushar = "⥋";
const ldsh = "↲";
const le = "≤";
const lE = "≦";
const LeftAngleBracket = "⟨";
const LeftArrowBar = "⇤";
const leftarrow = "←";
const LeftArrow = "←";
const Leftarrow = "⇐";
const LeftArrowRightArrow = "⇆";
const leftarrowtail = "↢";
const LeftCeiling = "⌈";
const LeftDoubleBracket = "⟦";
const LeftDownTeeVector = "⥡";
const LeftDownVectorBar = "⥙";
const LeftDownVector = "⇃";
const LeftFloor = "⌊";
const leftharpoondown = "↽";
const leftharpoonup = "↼";
const leftleftarrows = "⇇";
const leftrightarrow = "↔";
const LeftRightArrow = "↔";
const Leftrightarrow = "⇔";
const leftrightarrows = "⇆";
const leftrightharpoons = "⇋";
const leftrightsquigarrow = "↭";
const LeftRightVector = "⥎";
const LeftTeeArrow = "↤";
const LeftTee = "⊣";
const LeftTeeVector = "⥚";
const leftthreetimes = "⋋";
const LeftTriangleBar = "⧏";
const LeftTriangle = "⊲";
const LeftTriangleEqual = "⊴";
const LeftUpDownVector = "⥑";
const LeftUpTeeVector = "⥠";
const LeftUpVectorBar = "⥘";
const LeftUpVector = "↿";
const LeftVectorBar = "⥒";
const LeftVector = "↼";
const lEg = "⪋";
const leg = "⋚";
const leq = "≤";
const leqq = "≦";
const leqslant = "⩽";
const lescc = "⪨";
const les = "⩽";
const lesdot = "⩿";
const lesdoto = "⪁";
const lesdotor = "⪃";
const lesg = "⋚︀";
const lesges = "⪓";
const lessapprox = "⪅";
const lessdot = "⋖";
const lesseqgtr = "⋚";
const lesseqqgtr = "⪋";
const LessEqualGreater = "⋚";
const LessFullEqual = "≦";
const LessGreater = "≶";
const lessgtr = "≶";
const LessLess = "⪡";
const lesssim = "≲";
const LessSlantEqual = "⩽";
const LessTilde = "≲";
const lfisht = "⥼";
const lfloor = "⌊";
const Lfr = "𝔏";
const lfr = "𝔩";
const lg = "≶";
const lgE = "⪑";
const lHar = "⥢";
const lhard = "↽";
const lharu = "↼";
const lharul = "⥪";
const lhblk = "▄";
const LJcy = "Љ";
const ljcy = "љ";
const llarr = "⇇";
const ll = "≪";
const Ll = "⋘";
const llcorner = "⌞";
const Lleftarrow = "⇚";
const llhard = "⥫";
const lltri = "◺";
const Lmidot = "Ŀ";
const lmidot = "ŀ";
const lmoustache = "⎰";
const lmoust = "⎰";
const lnap = "⪉";
const lnapprox = "⪉";
const lne = "⪇";
const lnE = "≨";
const lneq = "⪇";
const lneqq = "≨";
const lnsim = "⋦";
const loang = "⟬";
const loarr = "⇽";
const lobrk = "⟦";
const longleftarrow = "⟵";
const LongLeftArrow = "⟵";
const Longleftarrow = "⟸";
const longleftrightarrow = "⟷";
const LongLeftRightArrow = "⟷";
const Longleftrightarrow = "⟺";
const longmapsto = "⟼";
const longrightarrow = "⟶";
const LongRightArrow = "⟶";
const Longrightarrow = "⟹";
const looparrowleft = "↫";
const looparrowright = "↬";
const lopar = "⦅";
const Lopf = "𝕃";
const lopf = "𝕝";
const loplus = "⨭";
const lotimes = "⨴";
const lowast = "∗";
const lowbar = "_";
const LowerLeftArrow = "↙";
const LowerRightArrow = "↘";
const loz = "◊";
const lozenge = "◊";
const lozf = "⧫";
const lpar = "(";
const lparlt = "⦓";
const lrarr = "⇆";
const lrcorner = "⌟";
const lrhar = "⇋";
const lrhard = "⥭";
const lrm = "‎";
const lrtri = "⊿";
const lsaquo = "‹";
const lscr = "𝓁";
const Lscr = "ℒ";
const lsh = "↰";
const Lsh = "↰";
const lsim = "≲";
const lsime = "⪍";
const lsimg = "⪏";
const lsqb = "[";
const lsquo = "‘";
const lsquor = "‚";
const Lstrok = "Ł";
const lstrok = "ł";
const ltcc = "⪦";
const ltcir = "⩹";
const lt$2 = "<";
const LT$1 = "<";
const Lt = "≪";
const ltdot = "⋖";
const lthree = "⋋";
const ltimes = "⋉";
const ltlarr = "⥶";
const ltquest = "⩻";
const ltri = "◃";
const ltrie = "⊴";
const ltrif = "◂";
const ltrPar = "⦖";
const lurdshar = "⥊";
const luruhar = "⥦";
const lvertneqq = "≨︀";
const lvnE = "≨︀";
const macr$1 = "¯";
const male = "♂";
const malt = "✠";
const maltese = "✠";
const map = "↦";
const mapsto = "↦";
const mapstodown = "↧";
const mapstoleft = "↤";
const mapstoup = "↥";
const marker = "▮";
const mcomma = "⨩";
const Mcy = "М";
const mcy = "м";
const mdash = "—";
const mDDot = "∺";
const measuredangle = "∡";
const MediumSpace = " ";
const Mellintrf = "ℳ";
const Mfr = "𝔐";
const mfr = "𝔪";
const mho = "℧";
const micro$1 = "µ";
const midast = "*";
const midcir = "⫰";
const mid = "∣";
const middot$1 = "·";
const minusb = "⊟";
const minus = "−";
const minusd = "∸";
const minusdu = "⨪";
const MinusPlus = "∓";
const mlcp = "⫛";
const mldr = "…";
const mnplus = "∓";
const models = "⊧";
const Mopf = "𝕄";
const mopf = "𝕞";
const mp = "∓";
const mscr = "𝓂";
const Mscr = "ℳ";
const mstpos = "∾";
const Mu = "Μ";
const mu = "μ";
const multimap = "⊸";
const mumap = "⊸";
const nabla = "∇";
const Nacute = "Ń";
const nacute = "ń";
const nang = "∠⃒";
const nap = "≉";
const napE = "⩰̸";
const napid = "≋̸";
const napos = "ŉ";
const napprox = "≉";
const natural = "♮";
const naturals = "ℕ";
const natur = "♮";
const nbsp$1 = " ";
const nbump = "≎̸";
const nbumpe = "≏̸";
const ncap = "⩃";
const Ncaron = "Ň";
const ncaron = "ň";
const Ncedil = "Ņ";
const ncedil = "ņ";
const ncong = "≇";
const ncongdot = "⩭̸";
const ncup = "⩂";
const Ncy = "Н";
const ncy = "н";
const ndash = "–";
const nearhk = "⤤";
const nearr = "↗";
const neArr = "⇗";
const nearrow = "↗";
const ne = "≠";
const nedot = "≐̸";
const NegativeMediumSpace = "​";
const NegativeThickSpace = "​";
const NegativeThinSpace = "​";
const NegativeVeryThinSpace = "​";
const nequiv = "≢";
const nesear = "⤨";
const nesim = "≂̸";
const NestedGreaterGreater = "≫";
const NestedLessLess = "≪";
const NewLine = "\n";
const nexist = "∄";
const nexists = "∄";
const Nfr = "𝔑";
const nfr = "𝔫";
const ngE = "≧̸";
const nge = "≱";
const ngeq = "≱";
const ngeqq = "≧̸";
const ngeqslant = "⩾̸";
const nges = "⩾̸";
const nGg = "⋙̸";
const ngsim = "≵";
const nGt = "≫⃒";
const ngt = "≯";
const ngtr = "≯";
const nGtv = "≫̸";
const nharr = "↮";
const nhArr = "⇎";
const nhpar = "⫲";
const ni = "∋";
const nis = "⋼";
const nisd = "⋺";
const niv = "∋";
const NJcy = "Њ";
const njcy = "њ";
const nlarr = "↚";
const nlArr = "⇍";
const nldr = "‥";
const nlE = "≦̸";
const nle = "≰";
const nleftarrow = "↚";
const nLeftarrow = "⇍";
const nleftrightarrow = "↮";
const nLeftrightarrow = "⇎";
const nleq = "≰";
const nleqq = "≦̸";
const nleqslant = "⩽̸";
const nles = "⩽̸";
const nless = "≮";
const nLl = "⋘̸";
const nlsim = "≴";
const nLt = "≪⃒";
const nlt = "≮";
const nltri = "⋪";
const nltrie = "⋬";
const nLtv = "≪̸";
const nmid = "∤";
const NoBreak = "⁠";
const NonBreakingSpace = " ";
const nopf = "𝕟";
const Nopf = "ℕ";
const Not = "⫬";
const not$1 = "¬";
const NotCongruent = "≢";
const NotCupCap = "≭";
const NotDoubleVerticalBar = "∦";
const NotElement = "∉";
const NotEqual = "≠";
const NotEqualTilde = "≂̸";
const NotExists = "∄";
const NotGreater = "≯";
const NotGreaterEqual = "≱";
const NotGreaterFullEqual = "≧̸";
const NotGreaterGreater = "≫̸";
const NotGreaterLess = "≹";
const NotGreaterSlantEqual = "⩾̸";
const NotGreaterTilde = "≵";
const NotHumpDownHump = "≎̸";
const NotHumpEqual = "≏̸";
const notin = "∉";
const notindot = "⋵̸";
const notinE = "⋹̸";
const notinva = "∉";
const notinvb = "⋷";
const notinvc = "⋶";
const NotLeftTriangleBar = "⧏̸";
const NotLeftTriangle = "⋪";
const NotLeftTriangleEqual = "⋬";
const NotLess = "≮";
const NotLessEqual = "≰";
const NotLessGreater = "≸";
const NotLessLess = "≪̸";
const NotLessSlantEqual = "⩽̸";
const NotLessTilde = "≴";
const NotNestedGreaterGreater = "⪢̸";
const NotNestedLessLess = "⪡̸";
const notni = "∌";
const notniva = "∌";
const notnivb = "⋾";
const notnivc = "⋽";
const NotPrecedes = "⊀";
const NotPrecedesEqual = "⪯̸";
const NotPrecedesSlantEqual = "⋠";
const NotReverseElement = "∌";
const NotRightTriangleBar = "⧐̸";
const NotRightTriangle = "⋫";
const NotRightTriangleEqual = "⋭";
const NotSquareSubset = "⊏̸";
const NotSquareSubsetEqual = "⋢";
const NotSquareSuperset = "⊐̸";
const NotSquareSupersetEqual = "⋣";
const NotSubset = "⊂⃒";
const NotSubsetEqual = "⊈";
const NotSucceeds = "⊁";
const NotSucceedsEqual = "⪰̸";
const NotSucceedsSlantEqual = "⋡";
const NotSucceedsTilde = "≿̸";
const NotSuperset = "⊃⃒";
const NotSupersetEqual = "⊉";
const NotTilde = "≁";
const NotTildeEqual = "≄";
const NotTildeFullEqual = "≇";
const NotTildeTilde = "≉";
const NotVerticalBar = "∤";
const nparallel = "∦";
const npar = "∦";
const nparsl = "⫽⃥";
const npart = "∂̸";
const npolint = "⨔";
const npr = "⊀";
const nprcue = "⋠";
const nprec = "⊀";
const npreceq = "⪯̸";
const npre = "⪯̸";
const nrarrc = "⤳̸";
const nrarr = "↛";
const nrArr = "⇏";
const nrarrw = "↝̸";
const nrightarrow = "↛";
const nRightarrow = "⇏";
const nrtri = "⋫";
const nrtrie = "⋭";
const nsc = "⊁";
const nsccue = "⋡";
const nsce = "⪰̸";
const Nscr = "𝒩";
const nscr = "𝓃";
const nshortmid = "∤";
const nshortparallel = "∦";
const nsim = "≁";
const nsime = "≄";
const nsimeq = "≄";
const nsmid = "∤";
const nspar = "∦";
const nsqsube = "⋢";
const nsqsupe = "⋣";
const nsub = "⊄";
const nsubE = "⫅̸";
const nsube = "⊈";
const nsubset = "⊂⃒";
const nsubseteq = "⊈";
const nsubseteqq = "⫅̸";
const nsucc = "⊁";
const nsucceq = "⪰̸";
const nsup = "⊅";
const nsupE = "⫆̸";
const nsupe = "⊉";
const nsupset = "⊃⃒";
const nsupseteq = "⊉";
const nsupseteqq = "⫆̸";
const ntgl = "≹";
const Ntilde$1 = "Ñ";
const ntilde$1 = "ñ";
const ntlg = "≸";
const ntriangleleft = "⋪";
const ntrianglelefteq = "⋬";
const ntriangleright = "⋫";
const ntrianglerighteq = "⋭";
const Nu = "Ν";
const nu = "ν";
const num = "#";
const numero = "№";
const numsp = " ";
const nvap = "≍⃒";
const nvdash = "⊬";
const nvDash = "⊭";
const nVdash = "⊮";
const nVDash = "⊯";
const nvge = "≥⃒";
const nvgt = ">⃒";
const nvHarr = "⤄";
const nvinfin = "⧞";
const nvlArr = "⤂";
const nvle = "≤⃒";
const nvlt = "<⃒";
const nvltrie = "⊴⃒";
const nvrArr = "⤃";
const nvrtrie = "⊵⃒";
const nvsim = "∼⃒";
const nwarhk = "⤣";
const nwarr = "↖";
const nwArr = "⇖";
const nwarrow = "↖";
const nwnear = "⤧";
const Oacute$1 = "Ó";
const oacute$1 = "ó";
const oast = "⊛";
const Ocirc$1 = "Ô";
const ocirc$1 = "ô";
const ocir = "⊚";
const Ocy = "О";
const ocy = "о";
const odash = "⊝";
const Odblac = "Ő";
const odblac = "ő";
const odiv = "⨸";
const odot = "⊙";
const odsold = "⦼";
const OElig = "Œ";
const oelig = "œ";
const ofcir = "⦿";
const Ofr = "𝔒";
const ofr = "𝔬";
const ogon = "˛";
const Ograve$1 = "Ò";
const ograve$1 = "ò";
const ogt = "⧁";
const ohbar = "⦵";
const ohm = "Ω";
const oint = "∮";
const olarr = "↺";
const olcir = "⦾";
const olcross = "⦻";
const oline = "‾";
const olt = "⧀";
const Omacr = "Ō";
const omacr = "ō";
const Omega = "Ω";
const omega = "ω";
const Omicron = "Ο";
const omicron = "ο";
const omid = "⦶";
const ominus = "⊖";
const Oopf = "𝕆";
const oopf = "𝕠";
const opar = "⦷";
const OpenCurlyDoubleQuote = "“";
const OpenCurlyQuote = "‘";
const operp = "⦹";
const oplus = "⊕";
const orarr = "↻";
const Or = "⩔";
const or = "∨";
const ord = "⩝";
const order = "ℴ";
const orderof = "ℴ";
const ordf$1 = "ª";
const ordm$1 = "º";
const origof = "⊶";
const oror = "⩖";
const orslope = "⩗";
const orv = "⩛";
const oS = "Ⓢ";
const Oscr = "𝒪";
const oscr = "ℴ";
const Oslash$1 = "Ø";
const oslash$1 = "ø";
const osol = "⊘";
const Otilde$1 = "Õ";
const otilde$1 = "õ";
const otimesas = "⨶";
const Otimes = "⨷";
const otimes = "⊗";
const Ouml$1 = "Ö";
const ouml$1 = "ö";
const ovbar = "⌽";
const OverBar = "‾";
const OverBrace = "⏞";
const OverBracket = "⎴";
const OverParenthesis = "⏜";
const para$1 = "¶";
const parallel = "∥";
const par = "∥";
const parsim = "⫳";
const parsl = "⫽";
const part = "∂";
const PartialD = "∂";
const Pcy = "П";
const pcy = "п";
const percnt = "%";
const period = ".";
const permil = "‰";
const perp = "⊥";
const pertenk = "‱";
const Pfr = "𝔓";
const pfr = "𝔭";
const Phi = "Φ";
const phi = "φ";
const phiv = "ϕ";
const phmmat = "ℳ";
const phone = "☎";
const Pi = "Π";
const pi = "π";
const pitchfork = "⋔";
const piv = "ϖ";
const planck = "ℏ";
const planckh = "ℎ";
const plankv = "ℏ";
const plusacir = "⨣";
const plusb = "⊞";
const pluscir = "⨢";
const plus = "+";
const plusdo = "∔";
const plusdu = "⨥";
const pluse = "⩲";
const PlusMinus = "±";
const plusmn$1 = "±";
const plussim = "⨦";
const plustwo = "⨧";
const pm = "±";
const Poincareplane = "ℌ";
const pointint = "⨕";
const popf = "𝕡";
const Popf = "ℙ";
const pound$1 = "£";
const prap = "⪷";
const Pr = "⪻";
const pr = "≺";
const prcue = "≼";
const precapprox = "⪷";
const prec = "≺";
const preccurlyeq = "≼";
const Precedes = "≺";
const PrecedesEqual = "⪯";
const PrecedesSlantEqual = "≼";
const PrecedesTilde = "≾";
const preceq = "⪯";
const precnapprox = "⪹";
const precneqq = "⪵";
const precnsim = "⋨";
const pre = "⪯";
const prE = "⪳";
const precsim = "≾";
const prime = "′";
const Prime = "″";
const primes = "ℙ";
const prnap = "⪹";
const prnE = "⪵";
const prnsim = "⋨";
const prod = "∏";
const Product = "∏";
const profalar = "⌮";
const profline = "⌒";
const profsurf = "⌓";
const prop = "∝";
const Proportional = "∝";
const Proportion = "∷";
const propto = "∝";
const prsim = "≾";
const prurel = "⊰";
const Pscr = "𝒫";
const pscr = "𝓅";
const Psi = "Ψ";
const psi = "ψ";
const puncsp = " ";
const Qfr = "𝔔";
const qfr = "𝔮";
const qint = "⨌";
const qopf = "𝕢";
const Qopf = "ℚ";
const qprime = "⁗";
const Qscr = "𝒬";
const qscr = "𝓆";
const quaternions = "ℍ";
const quatint = "⨖";
const quest = "?";
const questeq = "≟";
const quot$2 = "\"";
const QUOT$1 = "\"";
const rAarr = "⇛";
const race = "∽̱";
const Racute = "Ŕ";
const racute = "ŕ";
const radic = "√";
const raemptyv = "⦳";
const rang = "⟩";
const Rang = "⟫";
const rangd = "⦒";
const range = "⦥";
const rangle = "⟩";
const raquo$1 = "»";
const rarrap = "⥵";
const rarrb = "⇥";
const rarrbfs = "⤠";
const rarrc = "⤳";
const rarr = "→";
const Rarr = "↠";
const rArr = "⇒";
const rarrfs = "⤞";
const rarrhk = "↪";
const rarrlp = "↬";
const rarrpl = "⥅";
const rarrsim = "⥴";
const Rarrtl = "⤖";
const rarrtl = "↣";
const rarrw = "↝";
const ratail = "⤚";
const rAtail = "⤜";
const ratio = "∶";
const rationals = "ℚ";
const rbarr = "⤍";
const rBarr = "⤏";
const RBarr = "⤐";
const rbbrk = "❳";
const rbrace = "}";
const rbrack = "]";
const rbrke = "⦌";
const rbrksld = "⦎";
const rbrkslu = "⦐";
const Rcaron = "Ř";
const rcaron = "ř";
const Rcedil = "Ŗ";
const rcedil = "ŗ";
const rceil = "⌉";
const rcub = "}";
const Rcy = "Р";
const rcy = "р";
const rdca = "⤷";
const rdldhar = "⥩";
const rdquo = "”";
const rdquor = "”";
const rdsh = "↳";
const real = "ℜ";
const realine = "ℛ";
const realpart = "ℜ";
const reals = "ℝ";
const Re = "ℜ";
const rect = "▭";
const reg$1 = "®";
const REG$1 = "®";
const ReverseElement = "∋";
const ReverseEquilibrium = "⇋";
const ReverseUpEquilibrium = "⥯";
const rfisht = "⥽";
const rfloor = "⌋";
const rfr = "𝔯";
const Rfr = "ℜ";
const rHar = "⥤";
const rhard = "⇁";
const rharu = "⇀";
const rharul = "⥬";
const Rho = "Ρ";
const rho = "ρ";
const rhov = "ϱ";
const RightAngleBracket = "⟩";
const RightArrowBar = "⇥";
const rightarrow = "→";
const RightArrow = "→";
const Rightarrow = "⇒";
const RightArrowLeftArrow = "⇄";
const rightarrowtail = "↣";
const RightCeiling = "⌉";
const RightDoubleBracket = "⟧";
const RightDownTeeVector = "⥝";
const RightDownVectorBar = "⥕";
const RightDownVector = "⇂";
const RightFloor = "⌋";
const rightharpoondown = "⇁";
const rightharpoonup = "⇀";
const rightleftarrows = "⇄";
const rightleftharpoons = "⇌";
const rightrightarrows = "⇉";
const rightsquigarrow = "↝";
const RightTeeArrow = "↦";
const RightTee = "⊢";
const RightTeeVector = "⥛";
const rightthreetimes = "⋌";
const RightTriangleBar = "⧐";
const RightTriangle = "⊳";
const RightTriangleEqual = "⊵";
const RightUpDownVector = "⥏";
const RightUpTeeVector = "⥜";
const RightUpVectorBar = "⥔";
const RightUpVector = "↾";
const RightVectorBar = "⥓";
const RightVector = "⇀";
const ring = "˚";
const risingdotseq = "≓";
const rlarr = "⇄";
const rlhar = "⇌";
const rlm = "‏";
const rmoustache = "⎱";
const rmoust = "⎱";
const rnmid = "⫮";
const roang = "⟭";
const roarr = "⇾";
const robrk = "⟧";
const ropar = "⦆";
const ropf = "𝕣";
const Ropf = "ℝ";
const roplus = "⨮";
const rotimes = "⨵";
const RoundImplies = "⥰";
const rpar = ")";
const rpargt = "⦔";
const rppolint = "⨒";
const rrarr = "⇉";
const Rrightarrow = "⇛";
const rsaquo = "›";
const rscr = "𝓇";
const Rscr = "ℛ";
const rsh = "↱";
const Rsh = "↱";
const rsqb = "]";
const rsquo = "’";
const rsquor = "’";
const rthree = "⋌";
const rtimes = "⋊";
const rtri = "▹";
const rtrie = "⊵";
const rtrif = "▸";
const rtriltri = "⧎";
const RuleDelayed = "⧴";
const ruluhar = "⥨";
const rx = "℞";
const Sacute = "Ś";
const sacute = "ś";
const sbquo = "‚";
const scap = "⪸";
const Scaron = "Š";
const scaron = "š";
const Sc = "⪼";
const sc = "≻";
const sccue = "≽";
const sce = "⪰";
const scE = "⪴";
const Scedil = "Ş";
const scedil = "ş";
const Scirc = "Ŝ";
const scirc = "ŝ";
const scnap = "⪺";
const scnE = "⪶";
const scnsim = "⋩";
const scpolint = "⨓";
const scsim = "≿";
const Scy = "С";
const scy = "с";
const sdotb = "⊡";
const sdot = "⋅";
const sdote = "⩦";
const searhk = "⤥";
const searr = "↘";
const seArr = "⇘";
const searrow = "↘";
const sect$1 = "§";
const semi = ";";
const seswar = "⤩";
const setminus = "∖";
const setmn = "∖";
const sext = "✶";
const Sfr = "𝔖";
const sfr = "𝔰";
const sfrown = "⌢";
const sharp = "♯";
const SHCHcy = "Щ";
const shchcy = "щ";
const SHcy = "Ш";
const shcy = "ш";
const ShortDownArrow = "↓";
const ShortLeftArrow = "←";
const shortmid = "∣";
const shortparallel = "∥";
const ShortRightArrow = "→";
const ShortUpArrow = "↑";
const shy$1 = "­";
const Sigma = "Σ";
const sigma = "σ";
const sigmaf = "ς";
const sigmav = "ς";
const sim = "∼";
const simdot = "⩪";
const sime = "≃";
const simeq = "≃";
const simg = "⪞";
const simgE = "⪠";
const siml = "⪝";
const simlE = "⪟";
const simne = "≆";
const simplus = "⨤";
const simrarr = "⥲";
const slarr = "←";
const SmallCircle = "∘";
const smallsetminus = "∖";
const smashp = "⨳";
const smeparsl = "⧤";
const smid = "∣";
const smile = "⌣";
const smt = "⪪";
const smte = "⪬";
const smtes = "⪬︀";
const SOFTcy = "Ь";
const softcy = "ь";
const solbar = "⌿";
const solb = "⧄";
const sol = "/";
const Sopf = "𝕊";
const sopf = "𝕤";
const spades = "♠";
const spadesuit = "♠";
const spar = "∥";
const sqcap = "⊓";
const sqcaps = "⊓︀";
const sqcup = "⊔";
const sqcups = "⊔︀";
const Sqrt = "√";
const sqsub = "⊏";
const sqsube = "⊑";
const sqsubset = "⊏";
const sqsubseteq = "⊑";
const sqsup = "⊐";
const sqsupe = "⊒";
const sqsupset = "⊐";
const sqsupseteq = "⊒";
const square = "□";
const Square = "□";
const SquareIntersection = "⊓";
const SquareSubset = "⊏";
const SquareSubsetEqual = "⊑";
const SquareSuperset = "⊐";
const SquareSupersetEqual = "⊒";
const SquareUnion = "⊔";
const squarf = "▪";
const squ = "□";
const squf = "▪";
const srarr = "→";
const Sscr = "𝒮";
const sscr = "𝓈";
const ssetmn = "∖";
const ssmile = "⌣";
const sstarf = "⋆";
const Star = "⋆";
const star = "☆";
const starf = "★";
const straightepsilon = "ϵ";
const straightphi = "ϕ";
const strns = "¯";
const sub = "⊂";
const Sub = "⋐";
const subdot = "⪽";
const subE = "⫅";
const sube = "⊆";
const subedot = "⫃";
const submult = "⫁";
const subnE = "⫋";
const subne = "⊊";
const subplus = "⪿";
const subrarr = "⥹";
const subset = "⊂";
const Subset = "⋐";
const subseteq = "⊆";
const subseteqq = "⫅";
const SubsetEqual = "⊆";
const subsetneq = "⊊";
const subsetneqq = "⫋";
const subsim = "⫇";
const subsub = "⫕";
const subsup = "⫓";
const succapprox = "⪸";
const succ = "≻";
const succcurlyeq = "≽";
const Succeeds = "≻";
const SucceedsEqual = "⪰";
const SucceedsSlantEqual = "≽";
const SucceedsTilde = "≿";
const succeq = "⪰";
const succnapprox = "⪺";
const succneqq = "⪶";
const succnsim = "⋩";
const succsim = "≿";
const SuchThat = "∋";
const sum = "∑";
const Sum = "∑";
const sung = "♪";
const sup1$1 = "¹";
const sup2$1 = "²";
const sup3$1 = "³";
const sup = "⊃";
const Sup = "⋑";
const supdot = "⪾";
const supdsub = "⫘";
const supE = "⫆";
const supe = "⊇";
const supedot = "⫄";
const Superset = "⊃";
const SupersetEqual = "⊇";
const suphsol = "⟉";
const suphsub = "⫗";
const suplarr = "⥻";
const supmult = "⫂";
const supnE = "⫌";
const supne = "⊋";
const supplus = "⫀";
const supset = "⊃";
const Supset = "⋑";
const supseteq = "⊇";
const supseteqq = "⫆";
const supsetneq = "⊋";
const supsetneqq = "⫌";
const supsim = "⫈";
const supsub = "⫔";
const supsup = "⫖";
const swarhk = "⤦";
const swarr = "↙";
const swArr = "⇙";
const swarrow = "↙";
const swnwar = "⤪";
const szlig$1 = "ß";
const Tab = "\t";
const target = "⌖";
const Tau = "Τ";
const tau = "τ";
const tbrk = "⎴";
const Tcaron = "Ť";
const tcaron = "ť";
const Tcedil = "Ţ";
const tcedil = "ţ";
const Tcy = "Т";
const tcy = "т";
const tdot = "⃛";
const telrec = "⌕";
const Tfr = "𝔗";
const tfr = "𝔱";
const there4 = "∴";
const therefore = "∴";
const Therefore = "∴";
const Theta = "Θ";
const theta = "θ";
const thetasym = "ϑ";
const thetav = "ϑ";
const thickapprox = "≈";
const thicksim = "∼";
const ThickSpace = "  ";
const ThinSpace = " ";
const thinsp = " ";
const thkap = "≈";
const thksim = "∼";
const THORN$1 = "Þ";
const thorn$1 = "þ";
const tilde = "˜";
const Tilde = "∼";
const TildeEqual = "≃";
const TildeFullEqual = "≅";
const TildeTilde = "≈";
const timesbar = "⨱";
const timesb = "⊠";
const times$1 = "×";
const timesd = "⨰";
const tint = "∭";
const toea = "⤨";
const topbot = "⌶";
const topcir = "⫱";
const top = "⊤";
const Topf = "𝕋";
const topf = "𝕥";
const topfork = "⫚";
const tosa = "⤩";
const tprime = "‴";
const trade = "™";
const TRADE = "™";
const triangle = "▵";
const triangledown = "▿";
const triangleleft = "◃";
const trianglelefteq = "⊴";
const triangleq = "≜";
const triangleright = "▹";
const trianglerighteq = "⊵";
const tridot = "◬";
const trie = "≜";
const triminus = "⨺";
const TripleDot = "⃛";
const triplus = "⨹";
const trisb = "⧍";
const tritime = "⨻";
const trpezium = "⏢";
const Tscr = "𝒯";
const tscr = "𝓉";
const TScy = "Ц";
const tscy = "ц";
const TSHcy = "Ћ";
const tshcy = "ћ";
const Tstrok = "Ŧ";
const tstrok = "ŧ";
const twixt = "≬";
const twoheadleftarrow = "↞";
const twoheadrightarrow = "↠";
const Uacute$1 = "Ú";
const uacute$1 = "ú";
const uarr = "↑";
const Uarr = "↟";
const uArr = "⇑";
const Uarrocir = "⥉";
const Ubrcy = "Ў";
const ubrcy = "ў";
const Ubreve = "Ŭ";
const ubreve = "ŭ";
const Ucirc$1 = "Û";
const ucirc$1 = "û";
const Ucy = "У";
const ucy = "у";
const udarr = "⇅";
const Udblac = "Ű";
const udblac = "ű";
const udhar = "⥮";
const ufisht = "⥾";
const Ufr = "𝔘";
const ufr = "𝔲";
const Ugrave$1 = "Ù";
const ugrave$1 = "ù";
const uHar = "⥣";
const uharl = "↿";
const uharr = "↾";
const uhblk = "▀";
const ulcorn = "⌜";
const ulcorner = "⌜";
const ulcrop = "⌏";
const ultri = "◸";
const Umacr = "Ū";
const umacr = "ū";
const uml$1 = "¨";
const UnderBar = "_";
const UnderBrace = "⏟";
const UnderBracket = "⎵";
const UnderParenthesis = "⏝";
const Union = "⋃";
const UnionPlus = "⊎";
const Uogon = "Ų";
const uogon = "ų";
const Uopf = "𝕌";
const uopf = "𝕦";
const UpArrowBar = "⤒";
const uparrow = "↑";
const UpArrow = "↑";
const Uparrow = "⇑";
const UpArrowDownArrow = "⇅";
const updownarrow = "↕";
const UpDownArrow = "↕";
const Updownarrow = "⇕";
const UpEquilibrium = "⥮";
const upharpoonleft = "↿";
const upharpoonright = "↾";
const uplus = "⊎";
const UpperLeftArrow = "↖";
const UpperRightArrow = "↗";
const upsi = "υ";
const Upsi = "ϒ";
const upsih = "ϒ";
const Upsilon = "Υ";
const upsilon = "υ";
const UpTeeArrow = "↥";
const UpTee = "⊥";
const upuparrows = "⇈";
const urcorn = "⌝";
const urcorner = "⌝";
const urcrop = "⌎";
const Uring = "Ů";
const uring = "ů";
const urtri = "◹";
const Uscr = "𝒰";
const uscr = "𝓊";
const utdot = "⋰";
const Utilde = "Ũ";
const utilde = "ũ";
const utri = "▵";
const utrif = "▴";
const uuarr = "⇈";
const Uuml$1 = "Ü";
const uuml$1 = "ü";
const uwangle = "⦧";
const vangrt = "⦜";
const varepsilon = "ϵ";
const varkappa = "ϰ";
const varnothing = "∅";
const varphi = "ϕ";
const varpi = "ϖ";
const varpropto = "∝";
const varr = "↕";
const vArr = "⇕";
const varrho = "ϱ";
const varsigma = "ς";
const varsubsetneq = "⊊︀";
const varsubsetneqq = "⫋︀";
const varsupsetneq = "⊋︀";
const varsupsetneqq = "⫌︀";
const vartheta = "ϑ";
const vartriangleleft = "⊲";
const vartriangleright = "⊳";
const vBar = "⫨";
const Vbar = "⫫";
const vBarv = "⫩";
const Vcy = "В";
const vcy = "в";
const vdash = "⊢";
const vDash = "⊨";
const Vdash = "⊩";
const VDash = "⊫";
const Vdashl = "⫦";
const veebar = "⊻";
const vee = "∨";
const Vee = "⋁";
const veeeq = "≚";
const vellip = "⋮";
const verbar = "|";
const Verbar = "‖";
const vert = "|";
const Vert = "‖";
const VerticalBar = "∣";
const VerticalLine = "|";
const VerticalSeparator = "❘";
const VerticalTilde = "≀";
const VeryThinSpace = " ";
const Vfr = "𝔙";
const vfr = "𝔳";
const vltri = "⊲";
const vnsub = "⊂⃒";
const vnsup = "⊃⃒";
const Vopf = "𝕍";
const vopf = "𝕧";
const vprop = "∝";
const vrtri = "⊳";
const Vscr = "𝒱";
const vscr = "𝓋";
const vsubnE = "⫋︀";
const vsubne = "⊊︀";
const vsupnE = "⫌︀";
const vsupne = "⊋︀";
const Vvdash = "⊪";
const vzigzag = "⦚";
const Wcirc = "Ŵ";
const wcirc = "ŵ";
const wedbar = "⩟";
const wedge = "∧";
const Wedge = "⋀";
const wedgeq = "≙";
const weierp = "℘";
const Wfr = "𝔚";
const wfr = "𝔴";
const Wopf = "𝕎";
const wopf = "𝕨";
const wp = "℘";
const wr = "≀";
const wreath = "≀";
const Wscr = "𝒲";
const wscr = "𝓌";
const xcap = "⋂";
const xcirc = "◯";
const xcup = "⋃";
const xdtri = "▽";
const Xfr = "𝔛";
const xfr = "𝔵";
const xharr = "⟷";
const xhArr = "⟺";
const Xi = "Ξ";
const xi = "ξ";
const xlarr = "⟵";
const xlArr = "⟸";
const xmap = "⟼";
const xnis = "⋻";
const xodot = "⨀";
const Xopf = "𝕏";
const xopf = "𝕩";
const xoplus = "⨁";
const xotime = "⨂";
const xrarr = "⟶";
const xrArr = "⟹";
const Xscr = "𝒳";
const xscr = "𝓍";
const xsqcup = "⨆";
const xuplus = "⨄";
const xutri = "△";
const xvee = "⋁";
const xwedge = "⋀";
const Yacute$1 = "Ý";
const yacute$1 = "ý";
const YAcy = "Я";
const yacy = "я";
const Ycirc = "Ŷ";
const ycirc = "ŷ";
const Ycy = "Ы";
const ycy = "ы";
const yen$1 = "¥";
const Yfr = "𝔜";
const yfr = "𝔶";
const YIcy = "Ї";
const yicy = "ї";
const Yopf = "𝕐";
const yopf = "𝕪";
const Yscr = "𝒴";
const yscr = "𝓎";
const YUcy = "Ю";
const yucy = "ю";
const yuml$1 = "ÿ";
const Yuml = "Ÿ";
const Zacute = "Ź";
const zacute = "ź";
const Zcaron = "Ž";
const zcaron = "ž";
const Zcy = "З";
const zcy = "з";
const Zdot = "Ż";
const zdot = "ż";
const zeetrf = "ℨ";
const ZeroWidthSpace = "​";
const Zeta = "Ζ";
const zeta = "ζ";
const zfr = "𝔷";
const Zfr = "ℨ";
const ZHcy = "Ж";
const zhcy = "ж";
const zigrarr = "⇝";
const zopf = "𝕫";
const Zopf = "ℤ";
const Zscr = "𝒵";
const zscr = "𝓏";
const zwj = "‍";
const zwnj = "‌";
const require$$1 = {
	Aacute: Aacute$1,
	aacute: aacute$1,
	Abreve: Abreve,
	abreve: abreve,
	ac: ac,
	acd: acd,
	acE: acE,
	Acirc: Acirc$1,
	acirc: acirc$1,
	acute: acute$1,
	Acy: Acy,
	acy: acy,
	AElig: AElig$1,
	aelig: aelig$1,
	af: af,
	Afr: Afr,
	afr: afr,
	Agrave: Agrave$1,
	agrave: agrave$1,
	alefsym: alefsym,
	aleph: aleph,
	Alpha: Alpha,
	alpha: alpha,
	Amacr: Amacr,
	amacr: amacr,
	amalg: amalg,
	amp: amp$2,
	AMP: AMP$1,
	andand: andand,
	And: And,
	and: and,
	andd: andd,
	andslope: andslope,
	andv: andv,
	ang: ang,
	ange: ange,
	angle: angle,
	angmsdaa: angmsdaa,
	angmsdab: angmsdab,
	angmsdac: angmsdac,
	angmsdad: angmsdad,
	angmsdae: angmsdae,
	angmsdaf: angmsdaf,
	angmsdag: angmsdag,
	angmsdah: angmsdah,
	angmsd: angmsd,
	angrt: angrt,
	angrtvb: angrtvb,
	angrtvbd: angrtvbd,
	angsph: angsph,
	angst: angst,
	angzarr: angzarr,
	Aogon: Aogon,
	aogon: aogon,
	Aopf: Aopf,
	aopf: aopf,
	apacir: apacir,
	ap: ap,
	apE: apE,
	ape: ape,
	apid: apid,
	apos: apos$1,
	ApplyFunction: ApplyFunction,
	approx: approx,
	approxeq: approxeq,
	Aring: Aring$1,
	aring: aring$1,
	Ascr: Ascr,
	ascr: ascr,
	Assign: Assign,
	ast: ast,
	asymp: asymp,
	asympeq: asympeq,
	Atilde: Atilde$1,
	atilde: atilde$1,
	Auml: Auml$1,
	auml: auml$1,
	awconint: awconint,
	awint: awint,
	backcong: backcong,
	backepsilon: backepsilon,
	backprime: backprime,
	backsim: backsim,
	backsimeq: backsimeq,
	Backslash: Backslash,
	Barv: Barv,
	barvee: barvee,
	barwed: barwed,
	Barwed: Barwed,
	barwedge: barwedge,
	bbrk: bbrk,
	bbrktbrk: bbrktbrk,
	bcong: bcong,
	Bcy: Bcy,
	bcy: bcy,
	bdquo: bdquo,
	becaus: becaus,
	because: because,
	Because: Because,
	bemptyv: bemptyv,
	bepsi: bepsi,
	bernou: bernou,
	Bernoullis: Bernoullis,
	Beta: Beta,
	beta: beta,
	beth: beth,
	between: between,
	Bfr: Bfr,
	bfr: bfr,
	bigcap: bigcap,
	bigcirc: bigcirc,
	bigcup: bigcup,
	bigodot: bigodot,
	bigoplus: bigoplus,
	bigotimes: bigotimes,
	bigsqcup: bigsqcup,
	bigstar: bigstar,
	bigtriangledown: bigtriangledown,
	bigtriangleup: bigtriangleup,
	biguplus: biguplus,
	bigvee: bigvee,
	bigwedge: bigwedge,
	bkarow: bkarow,
	blacklozenge: blacklozenge,
	blacksquare: blacksquare,
	blacktriangle: blacktriangle,
	blacktriangledown: blacktriangledown,
	blacktriangleleft: blacktriangleleft,
	blacktriangleright: blacktriangleright,
	blank: blank,
	blk12: blk12,
	blk14: blk14,
	blk34: blk34,
	block: block,
	bne: bne,
	bnequiv: bnequiv,
	bNot: bNot,
	bnot: bnot,
	Bopf: Bopf,
	bopf: bopf,
	bot: bot,
	bottom: bottom,
	bowtie: bowtie,
	boxbox: boxbox,
	boxdl: boxdl,
	boxdL: boxdL,
	boxDl: boxDl,
	boxDL: boxDL,
	boxdr: boxdr,
	boxdR: boxdR,
	boxDr: boxDr,
	boxDR: boxDR,
	boxh: boxh,
	boxH: boxH,
	boxhd: boxhd,
	boxHd: boxHd,
	boxhD: boxhD,
	boxHD: boxHD,
	boxhu: boxhu,
	boxHu: boxHu,
	boxhU: boxhU,
	boxHU: boxHU,
	boxminus: boxminus,
	boxplus: boxplus,
	boxtimes: boxtimes,
	boxul: boxul,
	boxuL: boxuL,
	boxUl: boxUl,
	boxUL: boxUL,
	boxur: boxur,
	boxuR: boxuR,
	boxUr: boxUr,
	boxUR: boxUR,
	boxv: boxv,
	boxV: boxV,
	boxvh: boxvh,
	boxvH: boxvH,
	boxVh: boxVh,
	boxVH: boxVH,
	boxvl: boxvl,
	boxvL: boxvL,
	boxVl: boxVl,
	boxVL: boxVL,
	boxvr: boxvr,
	boxvR: boxvR,
	boxVr: boxVr,
	boxVR: boxVR,
	bprime: bprime,
	breve: breve,
	Breve: Breve,
	brvbar: brvbar$1,
	bscr: bscr,
	Bscr: Bscr,
	bsemi: bsemi,
	bsim: bsim,
	bsime: bsime,
	bsolb: bsolb,
	bsol: bsol,
	bsolhsub: bsolhsub,
	bull: bull,
	bullet: bullet,
	bump: bump,
	bumpE: bumpE,
	bumpe: bumpe,
	Bumpeq: Bumpeq,
	bumpeq: bumpeq,
	Cacute: Cacute,
	cacute: cacute,
	capand: capand,
	capbrcup: capbrcup,
	capcap: capcap,
	cap: cap,
	Cap: Cap,
	capcup: capcup,
	capdot: capdot,
	CapitalDifferentialD: CapitalDifferentialD,
	caps: caps,
	caret: caret,
	caron: caron,
	Cayleys: Cayleys,
	ccaps: ccaps,
	Ccaron: Ccaron,
	ccaron: ccaron,
	Ccedil: Ccedil$1,
	ccedil: ccedil$1,
	Ccirc: Ccirc,
	ccirc: ccirc,
	Cconint: Cconint,
	ccups: ccups,
	ccupssm: ccupssm,
	Cdot: Cdot,
	cdot: cdot,
	cedil: cedil$1,
	Cedilla: Cedilla,
	cemptyv: cemptyv,
	cent: cent$1,
	centerdot: centerdot,
	CenterDot: CenterDot,
	cfr: cfr,
	Cfr: Cfr,
	CHcy: CHcy,
	chcy: chcy,
	check: check,
	checkmark: checkmark,
	Chi: Chi,
	chi: chi,
	circ: circ,
	circeq: circeq,
	circlearrowleft: circlearrowleft,
	circlearrowright: circlearrowright,
	circledast: circledast,
	circledcirc: circledcirc,
	circleddash: circleddash,
	CircleDot: CircleDot,
	circledR: circledR,
	circledS: circledS,
	CircleMinus: CircleMinus,
	CirclePlus: CirclePlus,
	CircleTimes: CircleTimes,
	cir: cir,
	cirE: cirE,
	cire: cire,
	cirfnint: cirfnint,
	cirmid: cirmid,
	cirscir: cirscir,
	ClockwiseContourIntegral: ClockwiseContourIntegral,
	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
	CloseCurlyQuote: CloseCurlyQuote,
	clubs: clubs,
	clubsuit: clubsuit,
	colon: colon,
	Colon: Colon,
	Colone: Colone,
	colone: colone,
	coloneq: coloneq,
	comma: comma,
	commat: commat,
	comp: comp,
	compfn: compfn,
	complement: complement,
	complexes: complexes,
	cong: cong,
	congdot: congdot,
	Congruent: Congruent,
	conint: conint,
	Conint: Conint,
	ContourIntegral: ContourIntegral,
	copf: copf,
	Copf: Copf,
	coprod: coprod,
	Coproduct: Coproduct,
	copy: copy$1,
	COPY: COPY$1,
	copysr: copysr,
	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
	crarr: crarr,
	cross: cross,
	Cross: Cross,
	Cscr: Cscr,
	cscr: cscr,
	csub: csub,
	csube: csube,
	csup: csup,
	csupe: csupe,
	ctdot: ctdot,
	cudarrl: cudarrl,
	cudarrr: cudarrr,
	cuepr: cuepr,
	cuesc: cuesc,
	cularr: cularr,
	cularrp: cularrp,
	cupbrcap: cupbrcap,
	cupcap: cupcap,
	CupCap: CupCap,
	cup: cup,
	Cup: Cup,
	cupcup: cupcup,
	cupdot: cupdot,
	cupor: cupor,
	cups: cups,
	curarr: curarr,
	curarrm: curarrm,
	curlyeqprec: curlyeqprec,
	curlyeqsucc: curlyeqsucc,
	curlyvee: curlyvee,
	curlywedge: curlywedge,
	curren: curren$1,
	curvearrowleft: curvearrowleft,
	curvearrowright: curvearrowright,
	cuvee: cuvee,
	cuwed: cuwed,
	cwconint: cwconint,
	cwint: cwint,
	cylcty: cylcty,
	dagger: dagger,
	Dagger: Dagger,
	daleth: daleth,
	darr: darr,
	Darr: Darr,
	dArr: dArr,
	dash: dash,
	Dashv: Dashv,
	dashv: dashv,
	dbkarow: dbkarow,
	dblac: dblac,
	Dcaron: Dcaron,
	dcaron: dcaron,
	Dcy: Dcy,
	dcy: dcy,
	ddagger: ddagger,
	ddarr: ddarr,
	DD: DD,
	dd: dd,
	DDotrahd: DDotrahd,
	ddotseq: ddotseq,
	deg: deg$1,
	Del: Del,
	Delta: Delta,
	delta: delta,
	demptyv: demptyv,
	dfisht: dfisht,
	Dfr: Dfr,
	dfr: dfr,
	dHar: dHar,
	dharl: dharl,
	dharr: dharr,
	DiacriticalAcute: DiacriticalAcute,
	DiacriticalDot: DiacriticalDot,
	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
	DiacriticalGrave: DiacriticalGrave,
	DiacriticalTilde: DiacriticalTilde,
	diam: diam,
	diamond: diamond,
	Diamond: Diamond,
	diamondsuit: diamondsuit,
	diams: diams,
	die: die,
	DifferentialD: DifferentialD,
	digamma: digamma,
	disin: disin,
	div: div,
	divide: divide$1,
	divideontimes: divideontimes,
	divonx: divonx,
	DJcy: DJcy,
	djcy: djcy,
	dlcorn: dlcorn,
	dlcrop: dlcrop,
	dollar: dollar,
	Dopf: Dopf,
	dopf: dopf,
	Dot: Dot,
	dot: dot,
	DotDot: DotDot,
	doteq: doteq,
	doteqdot: doteqdot,
	DotEqual: DotEqual,
	dotminus: dotminus,
	dotplus: dotplus,
	dotsquare: dotsquare,
	doublebarwedge: doublebarwedge,
	DoubleContourIntegral: DoubleContourIntegral,
	DoubleDot: DoubleDot,
	DoubleDownArrow: DoubleDownArrow,
	DoubleLeftArrow: DoubleLeftArrow,
	DoubleLeftRightArrow: DoubleLeftRightArrow,
	DoubleLeftTee: DoubleLeftTee,
	DoubleLongLeftArrow: DoubleLongLeftArrow,
	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
	DoubleLongRightArrow: DoubleLongRightArrow,
	DoubleRightArrow: DoubleRightArrow,
	DoubleRightTee: DoubleRightTee,
	DoubleUpArrow: DoubleUpArrow,
	DoubleUpDownArrow: DoubleUpDownArrow,
	DoubleVerticalBar: DoubleVerticalBar,
	DownArrowBar: DownArrowBar,
	downarrow: downarrow,
	DownArrow: DownArrow,
	Downarrow: Downarrow,
	DownArrowUpArrow: DownArrowUpArrow,
	DownBreve: DownBreve,
	downdownarrows: downdownarrows,
	downharpoonleft: downharpoonleft,
	downharpoonright: downharpoonright,
	DownLeftRightVector: DownLeftRightVector,
	DownLeftTeeVector: DownLeftTeeVector,
	DownLeftVectorBar: DownLeftVectorBar,
	DownLeftVector: DownLeftVector,
	DownRightTeeVector: DownRightTeeVector,
	DownRightVectorBar: DownRightVectorBar,
	DownRightVector: DownRightVector,
	DownTeeArrow: DownTeeArrow,
	DownTee: DownTee,
	drbkarow: drbkarow,
	drcorn: drcorn,
	drcrop: drcrop,
	Dscr: Dscr,
	dscr: dscr,
	DScy: DScy,
	dscy: dscy,
	dsol: dsol,
	Dstrok: Dstrok,
	dstrok: dstrok,
	dtdot: dtdot,
	dtri: dtri,
	dtrif: dtrif,
	duarr: duarr,
	duhar: duhar,
	dwangle: dwangle,
	DZcy: DZcy,
	dzcy: dzcy,
	dzigrarr: dzigrarr,
	Eacute: Eacute$1,
	eacute: eacute$1,
	easter: easter,
	Ecaron: Ecaron,
	ecaron: ecaron,
	Ecirc: Ecirc$1,
	ecirc: ecirc$1,
	ecir: ecir,
	ecolon: ecolon,
	Ecy: Ecy,
	ecy: ecy,
	eDDot: eDDot,
	Edot: Edot,
	edot: edot,
	eDot: eDot,
	ee: ee,
	efDot: efDot,
	Efr: Efr,
	efr: efr,
	eg: eg,
	Egrave: Egrave$1,
	egrave: egrave$1,
	egs: egs,
	egsdot: egsdot,
	el: el,
	Element: Element,
	elinters: elinters,
	ell: ell,
	els: els,
	elsdot: elsdot,
	Emacr: Emacr,
	emacr: emacr,
	empty: empty,
	emptyset: emptyset,
	EmptySmallSquare: EmptySmallSquare,
	emptyv: emptyv,
	EmptyVerySmallSquare: EmptyVerySmallSquare,
	emsp13: emsp13,
	emsp14: emsp14,
	emsp: emsp,
	ENG: ENG,
	eng: eng,
	ensp: ensp,
	Eogon: Eogon,
	eogon: eogon,
	Eopf: Eopf,
	eopf: eopf,
	epar: epar,
	eparsl: eparsl,
	eplus: eplus,
	epsi: epsi,
	Epsilon: Epsilon,
	epsilon: epsilon,
	epsiv: epsiv,
	eqcirc: eqcirc,
	eqcolon: eqcolon,
	eqsim: eqsim,
	eqslantgtr: eqslantgtr,
	eqslantless: eqslantless,
	Equal: Equal,
	equals: equals,
	EqualTilde: EqualTilde,
	equest: equest,
	Equilibrium: Equilibrium,
	equiv: equiv,
	equivDD: equivDD,
	eqvparsl: eqvparsl,
	erarr: erarr,
	erDot: erDot,
	escr: escr,
	Escr: Escr,
	esdot: esdot,
	Esim: Esim,
	esim: esim,
	Eta: Eta,
	eta: eta,
	ETH: ETH$1,
	eth: eth$1,
	Euml: Euml$1,
	euml: euml$1,
	euro: euro,
	excl: excl,
	exist: exist,
	Exists: Exists,
	expectation: expectation,
	exponentiale: exponentiale,
	ExponentialE: ExponentialE,
	fallingdotseq: fallingdotseq,
	Fcy: Fcy,
	fcy: fcy,
	female: female,
	ffilig: ffilig,
	fflig: fflig,
	ffllig: ffllig,
	Ffr: Ffr,
	ffr: ffr,
	filig: filig,
	FilledSmallSquare: FilledSmallSquare,
	FilledVerySmallSquare: FilledVerySmallSquare,
	fjlig: fjlig,
	flat: flat,
	fllig: fllig,
	fltns: fltns,
	fnof: fnof,
	Fopf: Fopf,
	fopf: fopf,
	forall: forall,
	ForAll: ForAll,
	fork: fork,
	forkv: forkv,
	Fouriertrf: Fouriertrf,
	fpartint: fpartint,
	frac12: frac12$1,
	frac13: frac13,
	frac14: frac14$1,
	frac15: frac15,
	frac16: frac16,
	frac18: frac18,
	frac23: frac23,
	frac25: frac25,
	frac34: frac34$1,
	frac35: frac35,
	frac38: frac38,
	frac45: frac45,
	frac56: frac56,
	frac58: frac58,
	frac78: frac78,
	frasl: frasl,
	frown: frown,
	fscr: fscr,
	Fscr: Fscr,
	gacute: gacute,
	Gamma: Gamma,
	gamma: gamma,
	Gammad: Gammad,
	gammad: gammad,
	gap: gap,
	Gbreve: Gbreve,
	gbreve: gbreve,
	Gcedil: Gcedil,
	Gcirc: Gcirc,
	gcirc: gcirc,
	Gcy: Gcy,
	gcy: gcy,
	Gdot: Gdot,
	gdot: gdot,
	ge: ge,
	gE: gE,
	gEl: gEl,
	gel: gel,
	geq: geq,
	geqq: geqq,
	geqslant: geqslant,
	gescc: gescc,
	ges: ges,
	gesdot: gesdot,
	gesdoto: gesdoto,
	gesdotol: gesdotol,
	gesl: gesl,
	gesles: gesles,
	Gfr: Gfr,
	gfr: gfr,
	gg: gg,
	Gg: Gg,
	ggg: ggg,
	gimel: gimel,
	GJcy: GJcy,
	gjcy: gjcy,
	gla: gla,
	gl: gl,
	glE: glE,
	glj: glj,
	gnap: gnap,
	gnapprox: gnapprox,
	gne: gne,
	gnE: gnE,
	gneq: gneq,
	gneqq: gneqq,
	gnsim: gnsim,
	Gopf: Gopf,
	gopf: gopf,
	grave: grave,
	GreaterEqual: GreaterEqual,
	GreaterEqualLess: GreaterEqualLess,
	GreaterFullEqual: GreaterFullEqual,
	GreaterGreater: GreaterGreater,
	GreaterLess: GreaterLess,
	GreaterSlantEqual: GreaterSlantEqual,
	GreaterTilde: GreaterTilde,
	Gscr: Gscr,
	gscr: gscr,
	gsim: gsim,
	gsime: gsime,
	gsiml: gsiml,
	gtcc: gtcc,
	gtcir: gtcir,
	gt: gt$2,
	GT: GT$1,
	Gt: Gt,
	gtdot: gtdot,
	gtlPar: gtlPar,
	gtquest: gtquest,
	gtrapprox: gtrapprox,
	gtrarr: gtrarr,
	gtrdot: gtrdot,
	gtreqless: gtreqless,
	gtreqqless: gtreqqless,
	gtrless: gtrless,
	gtrsim: gtrsim,
	gvertneqq: gvertneqq,
	gvnE: gvnE,
	Hacek: Hacek,
	hairsp: hairsp,
	half: half,
	hamilt: hamilt,
	HARDcy: HARDcy,
	hardcy: hardcy,
	harrcir: harrcir,
	harr: harr,
	hArr: hArr,
	harrw: harrw,
	Hat: Hat,
	hbar: hbar,
	Hcirc: Hcirc,
	hcirc: hcirc,
	hearts: hearts,
	heartsuit: heartsuit,
	hellip: hellip,
	hercon: hercon,
	hfr: hfr,
	Hfr: Hfr,
	HilbertSpace: HilbertSpace,
	hksearow: hksearow,
	hkswarow: hkswarow,
	hoarr: hoarr,
	homtht: homtht,
	hookleftarrow: hookleftarrow,
	hookrightarrow: hookrightarrow,
	hopf: hopf,
	Hopf: Hopf,
	horbar: horbar,
	HorizontalLine: HorizontalLine,
	hscr: hscr,
	Hscr: Hscr,
	hslash: hslash,
	Hstrok: Hstrok,
	hstrok: hstrok,
	HumpDownHump: HumpDownHump,
	HumpEqual: HumpEqual,
	hybull: hybull,
	hyphen: hyphen,
	Iacute: Iacute$1,
	iacute: iacute$1,
	ic: ic,
	Icirc: Icirc$1,
	icirc: icirc$1,
	Icy: Icy,
	icy: icy,
	Idot: Idot,
	IEcy: IEcy,
	iecy: iecy,
	iexcl: iexcl$1,
	iff: iff,
	ifr: ifr,
	Ifr: Ifr,
	Igrave: Igrave$1,
	igrave: igrave$1,
	ii: ii,
	iiiint: iiiint,
	iiint: iiint,
	iinfin: iinfin,
	iiota: iiota,
	IJlig: IJlig,
	ijlig: ijlig,
	Imacr: Imacr,
	imacr: imacr,
	image: image,
	ImaginaryI: ImaginaryI,
	imagline: imagline,
	imagpart: imagpart,
	imath: imath,
	Im: Im,
	imof: imof,
	imped: imped,
	Implies: Implies,
	incare: incare,
	"in": "∈",
	infin: infin,
	infintie: infintie,
	inodot: inodot,
	intcal: intcal,
	int: int,
	Int: Int,
	integers: integers,
	Integral: Integral,
	intercal: intercal,
	Intersection: Intersection,
	intlarhk: intlarhk,
	intprod: intprod,
	InvisibleComma: InvisibleComma,
	InvisibleTimes: InvisibleTimes,
	IOcy: IOcy,
	iocy: iocy,
	Iogon: Iogon,
	iogon: iogon,
	Iopf: Iopf,
	iopf: iopf,
	Iota: Iota,
	iota: iota,
	iprod: iprod,
	iquest: iquest$1,
	iscr: iscr,
	Iscr: Iscr,
	isin: isin,
	isindot: isindot,
	isinE: isinE,
	isins: isins,
	isinsv: isinsv,
	isinv: isinv,
	it: it,
	Itilde: Itilde,
	itilde: itilde,
	Iukcy: Iukcy,
	iukcy: iukcy,
	Iuml: Iuml$1,
	iuml: iuml$1,
	Jcirc: Jcirc,
	jcirc: jcirc,
	Jcy: Jcy,
	jcy: jcy,
	Jfr: Jfr,
	jfr: jfr,
	jmath: jmath,
	Jopf: Jopf,
	jopf: jopf,
	Jscr: Jscr,
	jscr: jscr,
	Jsercy: Jsercy,
	jsercy: jsercy,
	Jukcy: Jukcy,
	jukcy: jukcy,
	Kappa: Kappa,
	kappa: kappa,
	kappav: kappav,
	Kcedil: Kcedil,
	kcedil: kcedil,
	Kcy: Kcy,
	kcy: kcy,
	Kfr: Kfr,
	kfr: kfr,
	kgreen: kgreen,
	KHcy: KHcy,
	khcy: khcy,
	KJcy: KJcy,
	kjcy: kjcy,
	Kopf: Kopf,
	kopf: kopf,
	Kscr: Kscr,
	kscr: kscr,
	lAarr: lAarr,
	Lacute: Lacute,
	lacute: lacute,
	laemptyv: laemptyv,
	lagran: lagran,
	Lambda: Lambda,
	lambda: lambda,
	lang: lang,
	Lang: Lang,
	langd: langd,
	langle: langle,
	lap: lap,
	Laplacetrf: Laplacetrf,
	laquo: laquo$1,
	larrb: larrb,
	larrbfs: larrbfs,
	larr: larr,
	Larr: Larr,
	lArr: lArr,
	larrfs: larrfs,
	larrhk: larrhk,
	larrlp: larrlp,
	larrpl: larrpl,
	larrsim: larrsim,
	larrtl: larrtl,
	latail: latail,
	lAtail: lAtail,
	lat: lat,
	late: late,
	lates: lates,
	lbarr: lbarr,
	lBarr: lBarr,
	lbbrk: lbbrk,
	lbrace: lbrace,
	lbrack: lbrack,
	lbrke: lbrke,
	lbrksld: lbrksld,
	lbrkslu: lbrkslu,
	Lcaron: Lcaron,
	lcaron: lcaron,
	Lcedil: Lcedil,
	lcedil: lcedil,
	lceil: lceil,
	lcub: lcub,
	Lcy: Lcy,
	lcy: lcy,
	ldca: ldca,
	ldquo: ldquo,
	ldquor: ldquor,
	ldrdhar: ldrdhar,
	ldrushar: ldrushar,
	ldsh: ldsh,
	le: le,
	lE: lE,
	LeftAngleBracket: LeftAngleBracket,
	LeftArrowBar: LeftArrowBar,
	leftarrow: leftarrow,
	LeftArrow: LeftArrow,
	Leftarrow: Leftarrow,
	LeftArrowRightArrow: LeftArrowRightArrow,
	leftarrowtail: leftarrowtail,
	LeftCeiling: LeftCeiling,
	LeftDoubleBracket: LeftDoubleBracket,
	LeftDownTeeVector: LeftDownTeeVector,
	LeftDownVectorBar: LeftDownVectorBar,
	LeftDownVector: LeftDownVector,
	LeftFloor: LeftFloor,
	leftharpoondown: leftharpoondown,
	leftharpoonup: leftharpoonup,
	leftleftarrows: leftleftarrows,
	leftrightarrow: leftrightarrow,
	LeftRightArrow: LeftRightArrow,
	Leftrightarrow: Leftrightarrow,
	leftrightarrows: leftrightarrows,
	leftrightharpoons: leftrightharpoons,
	leftrightsquigarrow: leftrightsquigarrow,
	LeftRightVector: LeftRightVector,
	LeftTeeArrow: LeftTeeArrow,
	LeftTee: LeftTee,
	LeftTeeVector: LeftTeeVector,
	leftthreetimes: leftthreetimes,
	LeftTriangleBar: LeftTriangleBar,
	LeftTriangle: LeftTriangle,
	LeftTriangleEqual: LeftTriangleEqual,
	LeftUpDownVector: LeftUpDownVector,
	LeftUpTeeVector: LeftUpTeeVector,
	LeftUpVectorBar: LeftUpVectorBar,
	LeftUpVector: LeftUpVector,
	LeftVectorBar: LeftVectorBar,
	LeftVector: LeftVector,
	lEg: lEg,
	leg: leg,
	leq: leq,
	leqq: leqq,
	leqslant: leqslant,
	lescc: lescc,
	les: les,
	lesdot: lesdot,
	lesdoto: lesdoto,
	lesdotor: lesdotor,
	lesg: lesg,
	lesges: lesges,
	lessapprox: lessapprox,
	lessdot: lessdot,
	lesseqgtr: lesseqgtr,
	lesseqqgtr: lesseqqgtr,
	LessEqualGreater: LessEqualGreater,
	LessFullEqual: LessFullEqual,
	LessGreater: LessGreater,
	lessgtr: lessgtr,
	LessLess: LessLess,
	lesssim: lesssim,
	LessSlantEqual: LessSlantEqual,
	LessTilde: LessTilde,
	lfisht: lfisht,
	lfloor: lfloor,
	Lfr: Lfr,
	lfr: lfr,
	lg: lg,
	lgE: lgE,
	lHar: lHar,
	lhard: lhard,
	lharu: lharu,
	lharul: lharul,
	lhblk: lhblk,
	LJcy: LJcy,
	ljcy: ljcy,
	llarr: llarr,
	ll: ll,
	Ll: Ll,
	llcorner: llcorner,
	Lleftarrow: Lleftarrow,
	llhard: llhard,
	lltri: lltri,
	Lmidot: Lmidot,
	lmidot: lmidot,
	lmoustache: lmoustache,
	lmoust: lmoust,
	lnap: lnap,
	lnapprox: lnapprox,
	lne: lne,
	lnE: lnE,
	lneq: lneq,
	lneqq: lneqq,
	lnsim: lnsim,
	loang: loang,
	loarr: loarr,
	lobrk: lobrk,
	longleftarrow: longleftarrow,
	LongLeftArrow: LongLeftArrow,
	Longleftarrow: Longleftarrow,
	longleftrightarrow: longleftrightarrow,
	LongLeftRightArrow: LongLeftRightArrow,
	Longleftrightarrow: Longleftrightarrow,
	longmapsto: longmapsto,
	longrightarrow: longrightarrow,
	LongRightArrow: LongRightArrow,
	Longrightarrow: Longrightarrow,
	looparrowleft: looparrowleft,
	looparrowright: looparrowright,
	lopar: lopar,
	Lopf: Lopf,
	lopf: lopf,
	loplus: loplus,
	lotimes: lotimes,
	lowast: lowast,
	lowbar: lowbar,
	LowerLeftArrow: LowerLeftArrow,
	LowerRightArrow: LowerRightArrow,
	loz: loz,
	lozenge: lozenge,
	lozf: lozf,
	lpar: lpar,
	lparlt: lparlt,
	lrarr: lrarr,
	lrcorner: lrcorner,
	lrhar: lrhar,
	lrhard: lrhard,
	lrm: lrm,
	lrtri: lrtri,
	lsaquo: lsaquo,
	lscr: lscr,
	Lscr: Lscr,
	lsh: lsh,
	Lsh: Lsh,
	lsim: lsim,
	lsime: lsime,
	lsimg: lsimg,
	lsqb: lsqb,
	lsquo: lsquo,
	lsquor: lsquor,
	Lstrok: Lstrok,
	lstrok: lstrok,
	ltcc: ltcc,
	ltcir: ltcir,
	lt: lt$2,
	LT: LT$1,
	Lt: Lt,
	ltdot: ltdot,
	lthree: lthree,
	ltimes: ltimes,
	ltlarr: ltlarr,
	ltquest: ltquest,
	ltri: ltri,
	ltrie: ltrie,
	ltrif: ltrif,
	ltrPar: ltrPar,
	lurdshar: lurdshar,
	luruhar: luruhar,
	lvertneqq: lvertneqq,
	lvnE: lvnE,
	macr: macr$1,
	male: male,
	malt: malt,
	maltese: maltese,
	"Map": "⤅",
	map: map,
	mapsto: mapsto,
	mapstodown: mapstodown,
	mapstoleft: mapstoleft,
	mapstoup: mapstoup,
	marker: marker,
	mcomma: mcomma,
	Mcy: Mcy,
	mcy: mcy,
	mdash: mdash,
	mDDot: mDDot,
	measuredangle: measuredangle,
	MediumSpace: MediumSpace,
	Mellintrf: Mellintrf,
	Mfr: Mfr,
	mfr: mfr,
	mho: mho,
	micro: micro$1,
	midast: midast,
	midcir: midcir,
	mid: mid,
	middot: middot$1,
	minusb: minusb,
	minus: minus,
	minusd: minusd,
	minusdu: minusdu,
	MinusPlus: MinusPlus,
	mlcp: mlcp,
	mldr: mldr,
	mnplus: mnplus,
	models: models,
	Mopf: Mopf,
	mopf: mopf,
	mp: mp,
	mscr: mscr,
	Mscr: Mscr,
	mstpos: mstpos,
	Mu: Mu,
	mu: mu,
	multimap: multimap,
	mumap: mumap,
	nabla: nabla,
	Nacute: Nacute,
	nacute: nacute,
	nang: nang,
	nap: nap,
	napE: napE,
	napid: napid,
	napos: napos,
	napprox: napprox,
	natural: natural,
	naturals: naturals,
	natur: natur,
	nbsp: nbsp$1,
	nbump: nbump,
	nbumpe: nbumpe,
	ncap: ncap,
	Ncaron: Ncaron,
	ncaron: ncaron,
	Ncedil: Ncedil,
	ncedil: ncedil,
	ncong: ncong,
	ncongdot: ncongdot,
	ncup: ncup,
	Ncy: Ncy,
	ncy: ncy,
	ndash: ndash,
	nearhk: nearhk,
	nearr: nearr,
	neArr: neArr,
	nearrow: nearrow,
	ne: ne,
	nedot: nedot,
	NegativeMediumSpace: NegativeMediumSpace,
	NegativeThickSpace: NegativeThickSpace,
	NegativeThinSpace: NegativeThinSpace,
	NegativeVeryThinSpace: NegativeVeryThinSpace,
	nequiv: nequiv,
	nesear: nesear,
	nesim: nesim,
	NestedGreaterGreater: NestedGreaterGreater,
	NestedLessLess: NestedLessLess,
	NewLine: NewLine,
	nexist: nexist,
	nexists: nexists,
	Nfr: Nfr,
	nfr: nfr,
	ngE: ngE,
	nge: nge,
	ngeq: ngeq,
	ngeqq: ngeqq,
	ngeqslant: ngeqslant,
	nges: nges,
	nGg: nGg,
	ngsim: ngsim,
	nGt: nGt,
	ngt: ngt,
	ngtr: ngtr,
	nGtv: nGtv,
	nharr: nharr,
	nhArr: nhArr,
	nhpar: nhpar,
	ni: ni,
	nis: nis,
	nisd: nisd,
	niv: niv,
	NJcy: NJcy,
	njcy: njcy,
	nlarr: nlarr,
	nlArr: nlArr,
	nldr: nldr,
	nlE: nlE,
	nle: nle,
	nleftarrow: nleftarrow,
	nLeftarrow: nLeftarrow,
	nleftrightarrow: nleftrightarrow,
	nLeftrightarrow: nLeftrightarrow,
	nleq: nleq,
	nleqq: nleqq,
	nleqslant: nleqslant,
	nles: nles,
	nless: nless,
	nLl: nLl,
	nlsim: nlsim,
	nLt: nLt,
	nlt: nlt,
	nltri: nltri,
	nltrie: nltrie,
	nLtv: nLtv,
	nmid: nmid,
	NoBreak: NoBreak,
	NonBreakingSpace: NonBreakingSpace,
	nopf: nopf,
	Nopf: Nopf,
	Not: Not,
	not: not$1,
	NotCongruent: NotCongruent,
	NotCupCap: NotCupCap,
	NotDoubleVerticalBar: NotDoubleVerticalBar,
	NotElement: NotElement,
	NotEqual: NotEqual,
	NotEqualTilde: NotEqualTilde,
	NotExists: NotExists,
	NotGreater: NotGreater,
	NotGreaterEqual: NotGreaterEqual,
	NotGreaterFullEqual: NotGreaterFullEqual,
	NotGreaterGreater: NotGreaterGreater,
	NotGreaterLess: NotGreaterLess,
	NotGreaterSlantEqual: NotGreaterSlantEqual,
	NotGreaterTilde: NotGreaterTilde,
	NotHumpDownHump: NotHumpDownHump,
	NotHumpEqual: NotHumpEqual,
	notin: notin,
	notindot: notindot,
	notinE: notinE,
	notinva: notinva,
	notinvb: notinvb,
	notinvc: notinvc,
	NotLeftTriangleBar: NotLeftTriangleBar,
	NotLeftTriangle: NotLeftTriangle,
	NotLeftTriangleEqual: NotLeftTriangleEqual,
	NotLess: NotLess,
	NotLessEqual: NotLessEqual,
	NotLessGreater: NotLessGreater,
	NotLessLess: NotLessLess,
	NotLessSlantEqual: NotLessSlantEqual,
	NotLessTilde: NotLessTilde,
	NotNestedGreaterGreater: NotNestedGreaterGreater,
	NotNestedLessLess: NotNestedLessLess,
	notni: notni,
	notniva: notniva,
	notnivb: notnivb,
	notnivc: notnivc,
	NotPrecedes: NotPrecedes,
	NotPrecedesEqual: NotPrecedesEqual,
	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
	NotReverseElement: NotReverseElement,
	NotRightTriangleBar: NotRightTriangleBar,
	NotRightTriangle: NotRightTriangle,
	NotRightTriangleEqual: NotRightTriangleEqual,
	NotSquareSubset: NotSquareSubset,
	NotSquareSubsetEqual: NotSquareSubsetEqual,
	NotSquareSuperset: NotSquareSuperset,
	NotSquareSupersetEqual: NotSquareSupersetEqual,
	NotSubset: NotSubset,
	NotSubsetEqual: NotSubsetEqual,
	NotSucceeds: NotSucceeds,
	NotSucceedsEqual: NotSucceedsEqual,
	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
	NotSucceedsTilde: NotSucceedsTilde,
	NotSuperset: NotSuperset,
	NotSupersetEqual: NotSupersetEqual,
	NotTilde: NotTilde,
	NotTildeEqual: NotTildeEqual,
	NotTildeFullEqual: NotTildeFullEqual,
	NotTildeTilde: NotTildeTilde,
	NotVerticalBar: NotVerticalBar,
	nparallel: nparallel,
	npar: npar,
	nparsl: nparsl,
	npart: npart,
	npolint: npolint,
	npr: npr,
	nprcue: nprcue,
	nprec: nprec,
	npreceq: npreceq,
	npre: npre,
	nrarrc: nrarrc,
	nrarr: nrarr,
	nrArr: nrArr,
	nrarrw: nrarrw,
	nrightarrow: nrightarrow,
	nRightarrow: nRightarrow,
	nrtri: nrtri,
	nrtrie: nrtrie,
	nsc: nsc,
	nsccue: nsccue,
	nsce: nsce,
	Nscr: Nscr,
	nscr: nscr,
	nshortmid: nshortmid,
	nshortparallel: nshortparallel,
	nsim: nsim,
	nsime: nsime,
	nsimeq: nsimeq,
	nsmid: nsmid,
	nspar: nspar,
	nsqsube: nsqsube,
	nsqsupe: nsqsupe,
	nsub: nsub,
	nsubE: nsubE,
	nsube: nsube,
	nsubset: nsubset,
	nsubseteq: nsubseteq,
	nsubseteqq: nsubseteqq,
	nsucc: nsucc,
	nsucceq: nsucceq,
	nsup: nsup,
	nsupE: nsupE,
	nsupe: nsupe,
	nsupset: nsupset,
	nsupseteq: nsupseteq,
	nsupseteqq: nsupseteqq,
	ntgl: ntgl,
	Ntilde: Ntilde$1,
	ntilde: ntilde$1,
	ntlg: ntlg,
	ntriangleleft: ntriangleleft,
	ntrianglelefteq: ntrianglelefteq,
	ntriangleright: ntriangleright,
	ntrianglerighteq: ntrianglerighteq,
	Nu: Nu,
	nu: nu,
	num: num,
	numero: numero,
	numsp: numsp,
	nvap: nvap,
	nvdash: nvdash,
	nvDash: nvDash,
	nVdash: nVdash,
	nVDash: nVDash,
	nvge: nvge,
	nvgt: nvgt,
	nvHarr: nvHarr,
	nvinfin: nvinfin,
	nvlArr: nvlArr,
	nvle: nvle,
	nvlt: nvlt,
	nvltrie: nvltrie,
	nvrArr: nvrArr,
	nvrtrie: nvrtrie,
	nvsim: nvsim,
	nwarhk: nwarhk,
	nwarr: nwarr,
	nwArr: nwArr,
	nwarrow: nwarrow,
	nwnear: nwnear,
	Oacute: Oacute$1,
	oacute: oacute$1,
	oast: oast,
	Ocirc: Ocirc$1,
	ocirc: ocirc$1,
	ocir: ocir,
	Ocy: Ocy,
	ocy: ocy,
	odash: odash,
	Odblac: Odblac,
	odblac: odblac,
	odiv: odiv,
	odot: odot,
	odsold: odsold,
	OElig: OElig,
	oelig: oelig,
	ofcir: ofcir,
	Ofr: Ofr,
	ofr: ofr,
	ogon: ogon,
	Ograve: Ograve$1,
	ograve: ograve$1,
	ogt: ogt,
	ohbar: ohbar,
	ohm: ohm,
	oint: oint,
	olarr: olarr,
	olcir: olcir,
	olcross: olcross,
	oline: oline,
	olt: olt,
	Omacr: Omacr,
	omacr: omacr,
	Omega: Omega,
	omega: omega,
	Omicron: Omicron,
	omicron: omicron,
	omid: omid,
	ominus: ominus,
	Oopf: Oopf,
	oopf: oopf,
	opar: opar,
	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
	OpenCurlyQuote: OpenCurlyQuote,
	operp: operp,
	oplus: oplus,
	orarr: orarr,
	Or: Or,
	or: or,
	ord: ord,
	order: order,
	orderof: orderof,
	ordf: ordf$1,
	ordm: ordm$1,
	origof: origof,
	oror: oror,
	orslope: orslope,
	orv: orv,
	oS: oS,
	Oscr: Oscr,
	oscr: oscr,
	Oslash: Oslash$1,
	oslash: oslash$1,
	osol: osol,
	Otilde: Otilde$1,
	otilde: otilde$1,
	otimesas: otimesas,
	Otimes: Otimes,
	otimes: otimes,
	Ouml: Ouml$1,
	ouml: ouml$1,
	ovbar: ovbar,
	OverBar: OverBar,
	OverBrace: OverBrace,
	OverBracket: OverBracket,
	OverParenthesis: OverParenthesis,
	para: para$1,
	parallel: parallel,
	par: par,
	parsim: parsim,
	parsl: parsl,
	part: part,
	PartialD: PartialD,
	Pcy: Pcy,
	pcy: pcy,
	percnt: percnt,
	period: period,
	permil: permil,
	perp: perp,
	pertenk: pertenk,
	Pfr: Pfr,
	pfr: pfr,
	Phi: Phi,
	phi: phi,
	phiv: phiv,
	phmmat: phmmat,
	phone: phone,
	Pi: Pi,
	pi: pi,
	pitchfork: pitchfork,
	piv: piv,
	planck: planck,
	planckh: planckh,
	plankv: plankv,
	plusacir: plusacir,
	plusb: plusb,
	pluscir: pluscir,
	plus: plus,
	plusdo: plusdo,
	plusdu: plusdu,
	pluse: pluse,
	PlusMinus: PlusMinus,
	plusmn: plusmn$1,
	plussim: plussim,
	plustwo: plustwo,
	pm: pm,
	Poincareplane: Poincareplane,
	pointint: pointint,
	popf: popf,
	Popf: Popf,
	pound: pound$1,
	prap: prap,
	Pr: Pr,
	pr: pr,
	prcue: prcue,
	precapprox: precapprox,
	prec: prec,
	preccurlyeq: preccurlyeq,
	Precedes: Precedes,
	PrecedesEqual: PrecedesEqual,
	PrecedesSlantEqual: PrecedesSlantEqual,
	PrecedesTilde: PrecedesTilde,
	preceq: preceq,
	precnapprox: precnapprox,
	precneqq: precneqq,
	precnsim: precnsim,
	pre: pre,
	prE: prE,
	precsim: precsim,
	prime: prime,
	Prime: Prime,
	primes: primes,
	prnap: prnap,
	prnE: prnE,
	prnsim: prnsim,
	prod: prod,
	Product: Product,
	profalar: profalar,
	profline: profline,
	profsurf: profsurf,
	prop: prop,
	Proportional: Proportional,
	Proportion: Proportion,
	propto: propto,
	prsim: prsim,
	prurel: prurel,
	Pscr: Pscr,
	pscr: pscr,
	Psi: Psi,
	psi: psi,
	puncsp: puncsp,
	Qfr: Qfr,
	qfr: qfr,
	qint: qint,
	qopf: qopf,
	Qopf: Qopf,
	qprime: qprime,
	Qscr: Qscr,
	qscr: qscr,
	quaternions: quaternions,
	quatint: quatint,
	quest: quest,
	questeq: questeq,
	quot: quot$2,
	QUOT: QUOT$1,
	rAarr: rAarr,
	race: race,
	Racute: Racute,
	racute: racute,
	radic: radic,
	raemptyv: raemptyv,
	rang: rang,
	Rang: Rang,
	rangd: rangd,
	range: range,
	rangle: rangle,
	raquo: raquo$1,
	rarrap: rarrap,
	rarrb: rarrb,
	rarrbfs: rarrbfs,
	rarrc: rarrc,
	rarr: rarr,
	Rarr: Rarr,
	rArr: rArr,
	rarrfs: rarrfs,
	rarrhk: rarrhk,
	rarrlp: rarrlp,
	rarrpl: rarrpl,
	rarrsim: rarrsim,
	Rarrtl: Rarrtl,
	rarrtl: rarrtl,
	rarrw: rarrw,
	ratail: ratail,
	rAtail: rAtail,
	ratio: ratio,
	rationals: rationals,
	rbarr: rbarr,
	rBarr: rBarr,
	RBarr: RBarr,
	rbbrk: rbbrk,
	rbrace: rbrace,
	rbrack: rbrack,
	rbrke: rbrke,
	rbrksld: rbrksld,
	rbrkslu: rbrkslu,
	Rcaron: Rcaron,
	rcaron: rcaron,
	Rcedil: Rcedil,
	rcedil: rcedil,
	rceil: rceil,
	rcub: rcub,
	Rcy: Rcy,
	rcy: rcy,
	rdca: rdca,
	rdldhar: rdldhar,
	rdquo: rdquo,
	rdquor: rdquor,
	rdsh: rdsh,
	real: real,
	realine: realine,
	realpart: realpart,
	reals: reals,
	Re: Re,
	rect: rect,
	reg: reg$1,
	REG: REG$1,
	ReverseElement: ReverseElement,
	ReverseEquilibrium: ReverseEquilibrium,
	ReverseUpEquilibrium: ReverseUpEquilibrium,
	rfisht: rfisht,
	rfloor: rfloor,
	rfr: rfr,
	Rfr: Rfr,
	rHar: rHar,
	rhard: rhard,
	rharu: rharu,
	rharul: rharul,
	Rho: Rho,
	rho: rho,
	rhov: rhov,
	RightAngleBracket: RightAngleBracket,
	RightArrowBar: RightArrowBar,
	rightarrow: rightarrow,
	RightArrow: RightArrow,
	Rightarrow: Rightarrow,
	RightArrowLeftArrow: RightArrowLeftArrow,
	rightarrowtail: rightarrowtail,
	RightCeiling: RightCeiling,
	RightDoubleBracket: RightDoubleBracket,
	RightDownTeeVector: RightDownTeeVector,
	RightDownVectorBar: RightDownVectorBar,
	RightDownVector: RightDownVector,
	RightFloor: RightFloor,
	rightharpoondown: rightharpoondown,
	rightharpoonup: rightharpoonup,
	rightleftarrows: rightleftarrows,
	rightleftharpoons: rightleftharpoons,
	rightrightarrows: rightrightarrows,
	rightsquigarrow: rightsquigarrow,
	RightTeeArrow: RightTeeArrow,
	RightTee: RightTee,
	RightTeeVector: RightTeeVector,
	rightthreetimes: rightthreetimes,
	RightTriangleBar: RightTriangleBar,
	RightTriangle: RightTriangle,
	RightTriangleEqual: RightTriangleEqual,
	RightUpDownVector: RightUpDownVector,
	RightUpTeeVector: RightUpTeeVector,
	RightUpVectorBar: RightUpVectorBar,
	RightUpVector: RightUpVector,
	RightVectorBar: RightVectorBar,
	RightVector: RightVector,
	ring: ring,
	risingdotseq: risingdotseq,
	rlarr: rlarr,
	rlhar: rlhar,
	rlm: rlm,
	rmoustache: rmoustache,
	rmoust: rmoust,
	rnmid: rnmid,
	roang: roang,
	roarr: roarr,
	robrk: robrk,
	ropar: ropar,
	ropf: ropf,
	Ropf: Ropf,
	roplus: roplus,
	rotimes: rotimes,
	RoundImplies: RoundImplies,
	rpar: rpar,
	rpargt: rpargt,
	rppolint: rppolint,
	rrarr: rrarr,
	Rrightarrow: Rrightarrow,
	rsaquo: rsaquo,
	rscr: rscr,
	Rscr: Rscr,
	rsh: rsh,
	Rsh: Rsh,
	rsqb: rsqb,
	rsquo: rsquo,
	rsquor: rsquor,
	rthree: rthree,
	rtimes: rtimes,
	rtri: rtri,
	rtrie: rtrie,
	rtrif: rtrif,
	rtriltri: rtriltri,
	RuleDelayed: RuleDelayed,
	ruluhar: ruluhar,
	rx: rx,
	Sacute: Sacute,
	sacute: sacute,
	sbquo: sbquo,
	scap: scap,
	Scaron: Scaron,
	scaron: scaron,
	Sc: Sc,
	sc: sc,
	sccue: sccue,
	sce: sce,
	scE: scE,
	Scedil: Scedil,
	scedil: scedil,
	Scirc: Scirc,
	scirc: scirc,
	scnap: scnap,
	scnE: scnE,
	scnsim: scnsim,
	scpolint: scpolint,
	scsim: scsim,
	Scy: Scy,
	scy: scy,
	sdotb: sdotb,
	sdot: sdot,
	sdote: sdote,
	searhk: searhk,
	searr: searr,
	seArr: seArr,
	searrow: searrow,
	sect: sect$1,
	semi: semi,
	seswar: seswar,
	setminus: setminus,
	setmn: setmn,
	sext: sext,
	Sfr: Sfr,
	sfr: sfr,
	sfrown: sfrown,
	sharp: sharp,
	SHCHcy: SHCHcy,
	shchcy: shchcy,
	SHcy: SHcy,
	shcy: shcy,
	ShortDownArrow: ShortDownArrow,
	ShortLeftArrow: ShortLeftArrow,
	shortmid: shortmid,
	shortparallel: shortparallel,
	ShortRightArrow: ShortRightArrow,
	ShortUpArrow: ShortUpArrow,
	shy: shy$1,
	Sigma: Sigma,
	sigma: sigma,
	sigmaf: sigmaf,
	sigmav: sigmav,
	sim: sim,
	simdot: simdot,
	sime: sime,
	simeq: simeq,
	simg: simg,
	simgE: simgE,
	siml: siml,
	simlE: simlE,
	simne: simne,
	simplus: simplus,
	simrarr: simrarr,
	slarr: slarr,
	SmallCircle: SmallCircle,
	smallsetminus: smallsetminus,
	smashp: smashp,
	smeparsl: smeparsl,
	smid: smid,
	smile: smile,
	smt: smt,
	smte: smte,
	smtes: smtes,
	SOFTcy: SOFTcy,
	softcy: softcy,
	solbar: solbar,
	solb: solb,
	sol: sol,
	Sopf: Sopf,
	sopf: sopf,
	spades: spades,
	spadesuit: spadesuit,
	spar: spar,
	sqcap: sqcap,
	sqcaps: sqcaps,
	sqcup: sqcup,
	sqcups: sqcups,
	Sqrt: Sqrt,
	sqsub: sqsub,
	sqsube: sqsube,
	sqsubset: sqsubset,
	sqsubseteq: sqsubseteq,
	sqsup: sqsup,
	sqsupe: sqsupe,
	sqsupset: sqsupset,
	sqsupseteq: sqsupseteq,
	square: square,
	Square: Square,
	SquareIntersection: SquareIntersection,
	SquareSubset: SquareSubset,
	SquareSubsetEqual: SquareSubsetEqual,
	SquareSuperset: SquareSuperset,
	SquareSupersetEqual: SquareSupersetEqual,
	SquareUnion: SquareUnion,
	squarf: squarf,
	squ: squ,
	squf: squf,
	srarr: srarr,
	Sscr: Sscr,
	sscr: sscr,
	ssetmn: ssetmn,
	ssmile: ssmile,
	sstarf: sstarf,
	Star: Star,
	star: star,
	starf: starf,
	straightepsilon: straightepsilon,
	straightphi: straightphi,
	strns: strns,
	sub: sub,
	Sub: Sub,
	subdot: subdot,
	subE: subE,
	sube: sube,
	subedot: subedot,
	submult: submult,
	subnE: subnE,
	subne: subne,
	subplus: subplus,
	subrarr: subrarr,
	subset: subset,
	Subset: Subset,
	subseteq: subseteq,
	subseteqq: subseteqq,
	SubsetEqual: SubsetEqual,
	subsetneq: subsetneq,
	subsetneqq: subsetneqq,
	subsim: subsim,
	subsub: subsub,
	subsup: subsup,
	succapprox: succapprox,
	succ: succ,
	succcurlyeq: succcurlyeq,
	Succeeds: Succeeds,
	SucceedsEqual: SucceedsEqual,
	SucceedsSlantEqual: SucceedsSlantEqual,
	SucceedsTilde: SucceedsTilde,
	succeq: succeq,
	succnapprox: succnapprox,
	succneqq: succneqq,
	succnsim: succnsim,
	succsim: succsim,
	SuchThat: SuchThat,
	sum: sum,
	Sum: Sum,
	sung: sung,
	sup1: sup1$1,
	sup2: sup2$1,
	sup3: sup3$1,
	sup: sup,
	Sup: Sup,
	supdot: supdot,
	supdsub: supdsub,
	supE: supE,
	supe: supe,
	supedot: supedot,
	Superset: Superset,
	SupersetEqual: SupersetEqual,
	suphsol: suphsol,
	suphsub: suphsub,
	suplarr: suplarr,
	supmult: supmult,
	supnE: supnE,
	supne: supne,
	supplus: supplus,
	supset: supset,
	Supset: Supset,
	supseteq: supseteq,
	supseteqq: supseteqq,
	supsetneq: supsetneq,
	supsetneqq: supsetneqq,
	supsim: supsim,
	supsub: supsub,
	supsup: supsup,
	swarhk: swarhk,
	swarr: swarr,
	swArr: swArr,
	swarrow: swarrow,
	swnwar: swnwar,
	szlig: szlig$1,
	Tab: Tab,
	target: target,
	Tau: Tau,
	tau: tau,
	tbrk: tbrk,
	Tcaron: Tcaron,
	tcaron: tcaron,
	Tcedil: Tcedil,
	tcedil: tcedil,
	Tcy: Tcy,
	tcy: tcy,
	tdot: tdot,
	telrec: telrec,
	Tfr: Tfr,
	tfr: tfr,
	there4: there4,
	therefore: therefore,
	Therefore: Therefore,
	Theta: Theta,
	theta: theta,
	thetasym: thetasym,
	thetav: thetav,
	thickapprox: thickapprox,
	thicksim: thicksim,
	ThickSpace: ThickSpace,
	ThinSpace: ThinSpace,
	thinsp: thinsp,
	thkap: thkap,
	thksim: thksim,
	THORN: THORN$1,
	thorn: thorn$1,
	tilde: tilde,
	Tilde: Tilde,
	TildeEqual: TildeEqual,
	TildeFullEqual: TildeFullEqual,
	TildeTilde: TildeTilde,
	timesbar: timesbar,
	timesb: timesb,
	times: times$1,
	timesd: timesd,
	tint: tint,
	toea: toea,
	topbot: topbot,
	topcir: topcir,
	top: top,
	Topf: Topf,
	topf: topf,
	topfork: topfork,
	tosa: tosa,
	tprime: tprime,
	trade: trade,
	TRADE: TRADE,
	triangle: triangle,
	triangledown: triangledown,
	triangleleft: triangleleft,
	trianglelefteq: trianglelefteq,
	triangleq: triangleq,
	triangleright: triangleright,
	trianglerighteq: trianglerighteq,
	tridot: tridot,
	trie: trie,
	triminus: triminus,
	TripleDot: TripleDot,
	triplus: triplus,
	trisb: trisb,
	tritime: tritime,
	trpezium: trpezium,
	Tscr: Tscr,
	tscr: tscr,
	TScy: TScy,
	tscy: tscy,
	TSHcy: TSHcy,
	tshcy: tshcy,
	Tstrok: Tstrok,
	tstrok: tstrok,
	twixt: twixt,
	twoheadleftarrow: twoheadleftarrow,
	twoheadrightarrow: twoheadrightarrow,
	Uacute: Uacute$1,
	uacute: uacute$1,
	uarr: uarr,
	Uarr: Uarr,
	uArr: uArr,
	Uarrocir: Uarrocir,
	Ubrcy: Ubrcy,
	ubrcy: ubrcy,
	Ubreve: Ubreve,
	ubreve: ubreve,
	Ucirc: Ucirc$1,
	ucirc: ucirc$1,
	Ucy: Ucy,
	ucy: ucy,
	udarr: udarr,
	Udblac: Udblac,
	udblac: udblac,
	udhar: udhar,
	ufisht: ufisht,
	Ufr: Ufr,
	ufr: ufr,
	Ugrave: Ugrave$1,
	ugrave: ugrave$1,
	uHar: uHar,
	uharl: uharl,
	uharr: uharr,
	uhblk: uhblk,
	ulcorn: ulcorn,
	ulcorner: ulcorner,
	ulcrop: ulcrop,
	ultri: ultri,
	Umacr: Umacr,
	umacr: umacr,
	uml: uml$1,
	UnderBar: UnderBar,
	UnderBrace: UnderBrace,
	UnderBracket: UnderBracket,
	UnderParenthesis: UnderParenthesis,
	Union: Union,
	UnionPlus: UnionPlus,
	Uogon: Uogon,
	uogon: uogon,
	Uopf: Uopf,
	uopf: uopf,
	UpArrowBar: UpArrowBar,
	uparrow: uparrow,
	UpArrow: UpArrow,
	Uparrow: Uparrow,
	UpArrowDownArrow: UpArrowDownArrow,
	updownarrow: updownarrow,
	UpDownArrow: UpDownArrow,
	Updownarrow: Updownarrow,
	UpEquilibrium: UpEquilibrium,
	upharpoonleft: upharpoonleft,
	upharpoonright: upharpoonright,
	uplus: uplus,
	UpperLeftArrow: UpperLeftArrow,
	UpperRightArrow: UpperRightArrow,
	upsi: upsi,
	Upsi: Upsi,
	upsih: upsih,
	Upsilon: Upsilon,
	upsilon: upsilon,
	UpTeeArrow: UpTeeArrow,
	UpTee: UpTee,
	upuparrows: upuparrows,
	urcorn: urcorn,
	urcorner: urcorner,
	urcrop: urcrop,
	Uring: Uring,
	uring: uring,
	urtri: urtri,
	Uscr: Uscr,
	uscr: uscr,
	utdot: utdot,
	Utilde: Utilde,
	utilde: utilde,
	utri: utri,
	utrif: utrif,
	uuarr: uuarr,
	Uuml: Uuml$1,
	uuml: uuml$1,
	uwangle: uwangle,
	vangrt: vangrt,
	varepsilon: varepsilon,
	varkappa: varkappa,
	varnothing: varnothing,
	varphi: varphi,
	varpi: varpi,
	varpropto: varpropto,
	varr: varr,
	vArr: vArr,
	varrho: varrho,
	varsigma: varsigma,
	varsubsetneq: varsubsetneq,
	varsubsetneqq: varsubsetneqq,
	varsupsetneq: varsupsetneq,
	varsupsetneqq: varsupsetneqq,
	vartheta: vartheta,
	vartriangleleft: vartriangleleft,
	vartriangleright: vartriangleright,
	vBar: vBar,
	Vbar: Vbar,
	vBarv: vBarv,
	Vcy: Vcy,
	vcy: vcy,
	vdash: vdash,
	vDash: vDash,
	Vdash: Vdash,
	VDash: VDash,
	Vdashl: Vdashl,
	veebar: veebar,
	vee: vee,
	Vee: Vee,
	veeeq: veeeq,
	vellip: vellip,
	verbar: verbar,
	Verbar: Verbar,
	vert: vert,
	Vert: Vert,
	VerticalBar: VerticalBar,
	VerticalLine: VerticalLine,
	VerticalSeparator: VerticalSeparator,
	VerticalTilde: VerticalTilde,
	VeryThinSpace: VeryThinSpace,
	Vfr: Vfr,
	vfr: vfr,
	vltri: vltri,
	vnsub: vnsub,
	vnsup: vnsup,
	Vopf: Vopf,
	vopf: vopf,
	vprop: vprop,
	vrtri: vrtri,
	Vscr: Vscr,
	vscr: vscr,
	vsubnE: vsubnE,
	vsubne: vsubne,
	vsupnE: vsupnE,
	vsupne: vsupne,
	Vvdash: Vvdash,
	vzigzag: vzigzag,
	Wcirc: Wcirc,
	wcirc: wcirc,
	wedbar: wedbar,
	wedge: wedge,
	Wedge: Wedge,
	wedgeq: wedgeq,
	weierp: weierp,
	Wfr: Wfr,
	wfr: wfr,
	Wopf: Wopf,
	wopf: wopf,
	wp: wp,
	wr: wr,
	wreath: wreath,
	Wscr: Wscr,
	wscr: wscr,
	xcap: xcap,
	xcirc: xcirc,
	xcup: xcup,
	xdtri: xdtri,
	Xfr: Xfr,
	xfr: xfr,
	xharr: xharr,
	xhArr: xhArr,
	Xi: Xi,
	xi: xi,
	xlarr: xlarr,
	xlArr: xlArr,
	xmap: xmap,
	xnis: xnis,
	xodot: xodot,
	Xopf: Xopf,
	xopf: xopf,
	xoplus: xoplus,
	xotime: xotime,
	xrarr: xrarr,
	xrArr: xrArr,
	Xscr: Xscr,
	xscr: xscr,
	xsqcup: xsqcup,
	xuplus: xuplus,
	xutri: xutri,
	xvee: xvee,
	xwedge: xwedge,
	Yacute: Yacute$1,
	yacute: yacute$1,
	YAcy: YAcy,
	yacy: yacy,
	Ycirc: Ycirc,
	ycirc: ycirc,
	Ycy: Ycy,
	ycy: ycy,
	yen: yen$1,
	Yfr: Yfr,
	yfr: yfr,
	YIcy: YIcy,
	yicy: yicy,
	Yopf: Yopf,
	yopf: yopf,
	Yscr: Yscr,
	yscr: yscr,
	YUcy: YUcy,
	yucy: yucy,
	yuml: yuml$1,
	Yuml: Yuml,
	Zacute: Zacute,
	zacute: zacute,
	Zcaron: Zcaron,
	zcaron: zcaron,
	Zcy: Zcy,
	zcy: zcy,
	Zdot: Zdot,
	zdot: zdot,
	zeetrf: zeetrf,
	ZeroWidthSpace: ZeroWidthSpace,
	Zeta: Zeta,
	zeta: zeta,
	zfr: zfr,
	Zfr: Zfr,
	ZHcy: ZHcy,
	zhcy: zhcy,
	zigrarr: zigrarr,
	zopf: zopf,
	Zopf: Zopf,
	Zscr: Zscr,
	zscr: zscr,
	zwj: zwj,
	zwnj: zwnj
};

const Aacute = "Á";
const aacute = "á";
const Acirc = "Â";
const acirc = "â";
const acute = "´";
const AElig = "Æ";
const aelig = "æ";
const Agrave = "À";
const agrave = "à";
const amp$1 = "&";
const AMP = "&";
const Aring = "Å";
const aring = "å";
const Atilde = "Ã";
const atilde = "ã";
const Auml = "Ä";
const auml = "ä";
const brvbar = "¦";
const Ccedil = "Ç";
const ccedil = "ç";
const cedil = "¸";
const cent = "¢";
const copy = "©";
const COPY = "©";
const curren = "¤";
const deg = "°";
const divide = "÷";
const Eacute = "É";
const eacute = "é";
const Ecirc = "Ê";
const ecirc = "ê";
const Egrave = "È";
const egrave = "è";
const ETH = "Ð";
const eth = "ð";
const Euml = "Ë";
const euml = "ë";
const frac12 = "½";
const frac14 = "¼";
const frac34 = "¾";
const gt$1 = ">";
const GT = ">";
const Iacute = "Í";
const iacute = "í";
const Icirc = "Î";
const icirc = "î";
const iexcl = "¡";
const Igrave = "Ì";
const igrave = "ì";
const iquest = "¿";
const Iuml = "Ï";
const iuml = "ï";
const laquo = "«";
const lt$1 = "<";
const LT = "<";
const macr = "¯";
const micro = "µ";
const middot = "·";
const nbsp = " ";
const not = "¬";
const Ntilde = "Ñ";
const ntilde = "ñ";
const Oacute = "Ó";
const oacute = "ó";
const Ocirc = "Ô";
const ocirc = "ô";
const Ograve = "Ò";
const ograve = "ò";
const ordf = "ª";
const ordm = "º";
const Oslash = "Ø";
const oslash = "ø";
const Otilde = "Õ";
const otilde = "õ";
const Ouml = "Ö";
const ouml = "ö";
const para = "¶";
const plusmn = "±";
const pound = "£";
const quot$1 = "\"";
const QUOT = "\"";
const raquo = "»";
const reg = "®";
const REG = "®";
const sect = "§";
const shy = "­";
const sup1 = "¹";
const sup2 = "²";
const sup3 = "³";
const szlig = "ß";
const THORN = "Þ";
const thorn = "þ";
const times = "×";
const Uacute = "Ú";
const uacute = "ú";
const Ucirc = "Û";
const ucirc = "û";
const Ugrave = "Ù";
const ugrave = "ù";
const uml = "¨";
const Uuml = "Ü";
const uuml = "ü";
const Yacute = "Ý";
const yacute = "ý";
const yen = "¥";
const yuml = "ÿ";
const require$$2 = {
	Aacute: Aacute,
	aacute: aacute,
	Acirc: Acirc,
	acirc: acirc,
	acute: acute,
	AElig: AElig,
	aelig: aelig,
	Agrave: Agrave,
	agrave: agrave,
	amp: amp$1,
	AMP: AMP,
	Aring: Aring,
	aring: aring,
	Atilde: Atilde,
	atilde: atilde,
	Auml: Auml,
	auml: auml,
	brvbar: brvbar,
	Ccedil: Ccedil,
	ccedil: ccedil,
	cedil: cedil,
	cent: cent,
	copy: copy,
	COPY: COPY,
	curren: curren,
	deg: deg,
	divide: divide,
	Eacute: Eacute,
	eacute: eacute,
	Ecirc: Ecirc,
	ecirc: ecirc,
	Egrave: Egrave,
	egrave: egrave,
	ETH: ETH,
	eth: eth,
	Euml: Euml,
	euml: euml,
	frac12: frac12,
	frac14: frac14,
	frac34: frac34,
	gt: gt$1,
	GT: GT,
	Iacute: Iacute,
	iacute: iacute,
	Icirc: Icirc,
	icirc: icirc,
	iexcl: iexcl,
	Igrave: Igrave,
	igrave: igrave,
	iquest: iquest,
	Iuml: Iuml,
	iuml: iuml,
	laquo: laquo,
	lt: lt$1,
	LT: LT,
	macr: macr,
	micro: micro,
	middot: middot,
	nbsp: nbsp,
	not: not,
	Ntilde: Ntilde,
	ntilde: ntilde,
	Oacute: Oacute,
	oacute: oacute,
	Ocirc: Ocirc,
	ocirc: ocirc,
	Ograve: Ograve,
	ograve: ograve,
	ordf: ordf,
	ordm: ordm,
	Oslash: Oslash,
	oslash: oslash,
	Otilde: Otilde,
	otilde: otilde,
	Ouml: Ouml,
	ouml: ouml,
	para: para,
	plusmn: plusmn,
	pound: pound,
	quot: quot$1,
	QUOT: QUOT,
	raquo: raquo,
	reg: reg,
	REG: REG,
	sect: sect,
	shy: shy,
	sup1: sup1,
	sup2: sup2,
	sup3: sup3,
	szlig: szlig,
	THORN: THORN,
	thorn: thorn,
	times: times,
	Uacute: Uacute,
	uacute: uacute,
	Ucirc: Ucirc,
	ucirc: ucirc,
	Ugrave: Ugrave,
	ugrave: ugrave,
	uml: uml,
	Uuml: Uuml,
	uuml: uuml,
	Yacute: Yacute,
	yacute: yacute,
	yen: yen,
	yuml: yuml
};

const amp = "&";
const apos = "'";
const gt = ">";
const lt = "<";
const quot = "\"";
const require$$3 = {
	amp: amp,
	apos: apos,
	gt: gt,
	lt: lt,
	quot: quot
};

var Tokenizer_1 = createCommonjsModule(function (module, exports) {
"use strict";
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_codepoint_1 = __importDefault(decode_codepoint);
var entities_json_1 = __importDefault(require$$1);
var legacy_json_1 = __importDefault(require$$2);
var xml_json_1 = __importDefault(require$$3);
function whitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}
function isASCIIAlpha(c) {
    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z");
}
function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();
    if (upper === lower) {
        return function (t, c) {
            if (c === lower) {
                t._state = SUCCESS;
            }
            else {
                t._state = FAILURE;
                t._index--;
            }
        };
    }
    return function (t, c) {
        if (c === lower || c === upper) {
            t._state = SUCCESS;
        }
        else {
            t._state = FAILURE;
            t._index--;
        }
    };
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();
    return function (t, c) {
        if (c === lower || c === upper) {
            t._state = NEXT_STATE;
        }
        else {
            t._state = 3 /* InTagName */;
            t._index--; // Consume the token again
        }
    };
}
var stateBeforeCdata1 = ifElseState("C", 24 /* BeforeCdata2 */, 16 /* InDeclaration */);
var stateBeforeCdata2 = ifElseState("D", 25 /* BeforeCdata3 */, 16 /* InDeclaration */);
var stateBeforeCdata3 = ifElseState("A", 26 /* BeforeCdata4 */, 16 /* InDeclaration */);
var stateBeforeCdata4 = ifElseState("T", 27 /* BeforeCdata5 */, 16 /* InDeclaration */);
var stateBeforeCdata5 = ifElseState("A", 28 /* BeforeCdata6 */, 16 /* InDeclaration */);
var stateBeforeScript1 = consumeSpecialNameChar("R", 35 /* BeforeScript2 */);
var stateBeforeScript2 = consumeSpecialNameChar("I", 36 /* BeforeScript3 */);
var stateBeforeScript3 = consumeSpecialNameChar("P", 37 /* BeforeScript4 */);
var stateBeforeScript4 = consumeSpecialNameChar("T", 38 /* BeforeScript5 */);
var stateAfterScript1 = ifElseState("R", 40 /* AfterScript2 */, 1 /* Text */);
var stateAfterScript2 = ifElseState("I", 41 /* AfterScript3 */, 1 /* Text */);
var stateAfterScript3 = ifElseState("P", 42 /* AfterScript4 */, 1 /* Text */);
var stateAfterScript4 = ifElseState("T", 43 /* AfterScript5 */, 1 /* Text */);
var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45 /* BeforeStyle2 */);
var stateBeforeStyle2 = consumeSpecialNameChar("L", 46 /* BeforeStyle3 */);
var stateBeforeStyle3 = consumeSpecialNameChar("E", 47 /* BeforeStyle4 */);
var stateAfterStyle1 = ifElseState("Y", 49 /* AfterStyle2 */, 1 /* Text */);
var stateAfterStyle2 = ifElseState("L", 50 /* AfterStyle3 */, 1 /* Text */);
var stateAfterStyle3 = ifElseState("E", 51 /* AfterStyle4 */, 1 /* Text */);
var stateBeforeSpecialT = consumeSpecialNameChar("I", 54 /* BeforeTitle1 */);
var stateBeforeTitle1 = consumeSpecialNameChar("T", 55 /* BeforeTitle2 */);
var stateBeforeTitle2 = consumeSpecialNameChar("L", 56 /* BeforeTitle3 */);
var stateBeforeTitle3 = consumeSpecialNameChar("E", 57 /* BeforeTitle4 */);
var stateAfterSpecialTEnd = ifElseState("I", 58 /* AfterTitle1 */, 1 /* Text */);
var stateAfterTitle1 = ifElseState("T", 59 /* AfterTitle2 */, 1 /* Text */);
var stateAfterTitle2 = ifElseState("L", 60 /* AfterTitle3 */, 1 /* Text */);
var stateAfterTitle3 = ifElseState("E", 61 /* AfterTitle4 */, 1 /* Text */);
var stateBeforeEntity = ifElseState("#", 63 /* BeforeNumericEntity */, 64 /* InNamedEntity */);
var stateBeforeNumericEntity = ifElseState("X", 66 /* InHexEntity */, 65 /* InNumericEntity */);
var Tokenizer = /** @class */ (function () {
    function Tokenizer(options, cbs) {
        var _a;
        /** The current state the tokenizer is in. */
        this._state = 1 /* Text */;
        /** The read buffer. */
        this.buffer = "";
        /** The beginning of the section that is currently being read. */
        this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */
        this._index = 0;
        /**
         * Data that has already been processed will be removed from the buffer occasionally.
         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
         */
        this.bufferOffset = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
        this.baseState = 1 /* Text */;
        /** For special parsing behavior inside of script and style tags. */
        this.special = 1 /* None */;
        /** Indicates whether the tokenizer has been paused. */
        this.running = true;
        /** Indicates whether the tokenizer has finished running / `.end` has been called. */
        this.ended = false;
        this.cbs = cbs;
        this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
        this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
    }
    Tokenizer.prototype.reset = function () {
        this._state = 1 /* Text */;
        this.buffer = "";
        this.sectionStart = 0;
        this._index = 0;
        this.bufferOffset = 0;
        this.baseState = 1 /* Text */;
        this.special = 1 /* None */;
        this.running = true;
        this.ended = false;
    };
    Tokenizer.prototype.write = function (chunk) {
        if (this.ended)
            this.cbs.onerror(Error(".write() after done!"));
        this.buffer += chunk;
        this.parse();
    };
    Tokenizer.prototype.end = function (chunk) {
        if (this.ended)
            this.cbs.onerror(Error(".end() after done!"));
        if (chunk)
            this.write(chunk);
        this.ended = true;
        if (this.running)
            this.finish();
    };
    Tokenizer.prototype.pause = function () {
        this.running = false;
    };
    Tokenizer.prototype.resume = function () {
        this.running = true;
        if (this._index < this.buffer.length) {
            this.parse();
        }
        if (this.ended) {
            this.finish();
        }
    };
    /**
     * The current index within all of the written data.
     */
    Tokenizer.prototype.getAbsoluteIndex = function () {
        return this.bufferOffset + this._index;
    };
    Tokenizer.prototype.stateText = function (c) {
        if (c === "<") {
            if (this._index > this.sectionStart) {
                this.cbs.ontext(this.getSection());
            }
            this._state = 2 /* BeforeTagName */;
            this.sectionStart = this._index;
        }
        else if (this.decodeEntities &&
            c === "&" &&
            (this.special === 1 /* None */ || this.special === 4 /* Title */)) {
            if (this._index > this.sectionStart) {
                this.cbs.ontext(this.getSection());
            }
            this.baseState = 1 /* Text */;
            this._state = 62 /* BeforeEntity */;
            this.sectionStart = this._index;
        }
    };
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */
    Tokenizer.prototype.isTagStartChar = function (c) {
        return (isASCIIAlpha(c) ||
            (this.xmlMode && !whitespace(c) && c !== "/" && c !== ">"));
    };
    Tokenizer.prototype.stateBeforeTagName = function (c) {
        if (c === "/") {
            this._state = 5 /* BeforeClosingTagName */;
        }
        else if (c === "<") {
            this.cbs.ontext(this.getSection());
            this.sectionStart = this._index;
        }
        else if (c === ">" ||
            this.special !== 1 /* None */ ||
            whitespace(c)) {
            this._state = 1 /* Text */;
        }
        else if (c === "!") {
            this._state = 15 /* BeforeDeclaration */;
            this.sectionStart = this._index + 1;
        }
        else if (c === "?") {
            this._state = 17 /* InProcessingInstruction */;
            this.sectionStart = this._index + 1;
        }
        else if (!this.isTagStartChar(c)) {
            this._state = 1 /* Text */;
        }
        else {
            this._state =
                !this.xmlMode && (c === "s" || c === "S")
                    ? 32 /* BeforeSpecialS */
                    : !this.xmlMode && (c === "t" || c === "T")
                        ? 52 /* BeforeSpecialT */
                        : 3 /* InTagName */;
            this.sectionStart = this._index;
        }
    };
    Tokenizer.prototype.stateInTagName = function (c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this.emitToken("onopentagname");
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
    };
    Tokenizer.prototype.stateBeforeClosingTagName = function (c) {
        if (whitespace(c)) {
            // Ignore
        }
        else if (c === ">") {
            this._state = 1 /* Text */;
        }
        else if (this.special !== 1 /* None */) {
            if (this.special !== 4 /* Title */ && (c === "s" || c === "S")) {
                this._state = 33 /* BeforeSpecialSEnd */;
            }
            else if (this.special === 4 /* Title */ &&
                (c === "t" || c === "T")) {
                this._state = 53 /* BeforeSpecialTEnd */;
            }
            else {
                this._state = 1 /* Text */;
                this._index--;
            }
        }
        else if (!this.isTagStartChar(c)) {
            this._state = 20 /* InSpecialComment */;
            this.sectionStart = this._index;
        }
        else {
            this._state = 6 /* InClosingTagName */;
            this.sectionStart = this._index;
        }
    };
    Tokenizer.prototype.stateInClosingTagName = function (c) {
        if (c === ">" || whitespace(c)) {
            this.emitToken("onclosetag");
            this._state = 7 /* AfterClosingTagName */;
            this._index--;
        }
    };
    Tokenizer.prototype.stateAfterClosingTagName = function (c) {
        // Skip everything until ">"
        if (c === ">") {
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype.stateBeforeAttributeName = function (c) {
        if (c === ">") {
            this.cbs.onopentagend();
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
        else if (c === "/") {
            this._state = 4 /* InSelfClosingTag */;
        }
        else if (!whitespace(c)) {
            this._state = 9 /* InAttributeName */;
            this.sectionStart = this._index;
        }
    };
    Tokenizer.prototype.stateInSelfClosingTag = function (c) {
        if (c === ">") {
            this.cbs.onselfclosingtag();
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
            this.special = 1 /* None */; // Reset special state, in case of self-closing special tags
        }
        else if (!whitespace(c)) {
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
    };
    Tokenizer.prototype.stateInAttributeName = function (c) {
        if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = 10 /* AfterAttributeName */;
            this._index--;
        }
    };
    Tokenizer.prototype.stateAfterAttributeName = function (c) {
        if (c === "=") {
            this._state = 11 /* BeforeAttributeValue */;
        }
        else if (c === "/" || c === ">") {
            this.cbs.onattribend(undefined);
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
        else if (!whitespace(c)) {
            this.cbs.onattribend(undefined);
            this._state = 9 /* InAttributeName */;
            this.sectionStart = this._index;
        }
    };
    Tokenizer.prototype.stateBeforeAttributeValue = function (c) {
        if (c === '"') {
            this._state = 12 /* InAttributeValueDq */;
            this.sectionStart = this._index + 1;
        }
        else if (c === "'") {
            this._state = 13 /* InAttributeValueSq */;
            this.sectionStart = this._index + 1;
        }
        else if (!whitespace(c)) {
            this._state = 14 /* InAttributeValueNq */;
            this.sectionStart = this._index;
            this._index--; // Reconsume token
        }
    };
    Tokenizer.prototype.handleInAttributeValue = function (c, quote) {
        if (c === quote) {
            this.emitToken("onattribdata");
            this.cbs.onattribend(quote);
            this._state = 8 /* BeforeAttributeName */;
        }
        else if (this.decodeEntities && c === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62 /* BeforeEntity */;
            this.sectionStart = this._index;
        }
    };
    Tokenizer.prototype.stateInAttributeValueDoubleQuotes = function (c) {
        this.handleInAttributeValue(c, '"');
    };
    Tokenizer.prototype.stateInAttributeValueSingleQuotes = function (c) {
        this.handleInAttributeValue(c, "'");
    };
    Tokenizer.prototype.stateInAttributeValueNoQuotes = function (c) {
        if (whitespace(c) || c === ">") {
            this.emitToken("onattribdata");
            this.cbs.onattribend(null);
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
        else if (this.decodeEntities && c === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62 /* BeforeEntity */;
            this.sectionStart = this._index;
        }
    };
    Tokenizer.prototype.stateBeforeDeclaration = function (c) {
        this._state =
            c === "["
                ? 23 /* BeforeCdata1 */
                : c === "-"
                    ? 18 /* BeforeComment */
                    : 16 /* InDeclaration */;
    };
    Tokenizer.prototype.stateInDeclaration = function (c) {
        if (c === ">") {
            this.cbs.ondeclaration(this.getSection());
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype.stateInProcessingInstruction = function (c) {
        if (c === ">") {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype.stateBeforeComment = function (c) {
        if (c === "-") {
            this._state = 19 /* InComment */;
            this.sectionStart = this._index + 1;
        }
        else {
            this._state = 16 /* InDeclaration */;
        }
    };
    Tokenizer.prototype.stateInComment = function (c) {
        if (c === "-")
            this._state = 21 /* AfterComment1 */;
    };
    Tokenizer.prototype.stateInSpecialComment = function (c) {
        if (c === ">") {
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype.stateAfterComment1 = function (c) {
        if (c === "-") {
            this._state = 22 /* AfterComment2 */;
        }
        else {
            this._state = 19 /* InComment */;
        }
    };
    Tokenizer.prototype.stateAfterComment2 = function (c) {
        if (c === ">") {
            // Remove 2 trailing chars
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
        else if (c !== "-") {
            this._state = 19 /* InComment */;
        }
        // Else: stay in AFTER_COMMENT_2 (`--->`)
    };
    Tokenizer.prototype.stateBeforeCdata6 = function (c) {
        if (c === "[") {
            this._state = 29 /* InCdata */;
            this.sectionStart = this._index + 1;
        }
        else {
            this._state = 16 /* InDeclaration */;
            this._index--;
        }
    };
    Tokenizer.prototype.stateInCdata = function (c) {
        if (c === "]")
            this._state = 30 /* AfterCdata1 */;
    };
    Tokenizer.prototype.stateAfterCdata1 = function (c) {
        if (c === "]")
            this._state = 31 /* AfterCdata2 */;
        else
            this._state = 29 /* InCdata */;
    };
    Tokenizer.prototype.stateAfterCdata2 = function (c) {
        if (c === ">") {
            // Remove 2 trailing chars
            this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1 /* Text */;
            this.sectionStart = this._index + 1;
        }
        else if (c !== "]") {
            this._state = 29 /* InCdata */;
        }
        // Else: stay in AFTER_CDATA_2 (`]]]>`)
    };
    Tokenizer.prototype.stateBeforeSpecialS = function (c) {
        if (c === "c" || c === "C") {
            this._state = 34 /* BeforeScript1 */;
        }
        else if (c === "t" || c === "T") {
            this._state = 44 /* BeforeStyle1 */;
        }
        else {
            this._state = 3 /* InTagName */;
            this._index--; // Consume the token again
        }
    };
    Tokenizer.prototype.stateBeforeSpecialSEnd = function (c) {
        if (this.special === 2 /* Script */ && (c === "c" || c === "C")) {
            this._state = 39 /* AfterScript1 */;
        }
        else if (this.special === 3 /* Style */ && (c === "t" || c === "T")) {
            this._state = 48 /* AfterStyle1 */;
        }
        else
            this._state = 1 /* Text */;
    };
    Tokenizer.prototype.stateBeforeSpecialLast = function (c, special) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this.special = special;
        }
        this._state = 3 /* InTagName */;
        this._index--; // Consume the token again
    };
    Tokenizer.prototype.stateAfterSpecialLast = function (c, sectionStartOffset) {
        if (c === ">" || whitespace(c)) {
            this.special = 1 /* None */;
            this._state = 6 /* InClosingTagName */;
            this.sectionStart = this._index - sectionStartOffset;
            this._index--; // Reconsume the token
        }
        else
            this._state = 1 /* Text */;
    };
    // For entities terminated with a semicolon
    Tokenizer.prototype.parseFixedEntity = function (map) {
        if (map === void 0) { map = this.xmlMode ? xml_json_1.default : entities_json_1.default; }
        // Offset = 1
        if (this.sectionStart + 1 < this._index) {
            var entity = this.buffer.substring(this.sectionStart + 1, this._index);
            if (Object.prototype.hasOwnProperty.call(map, entity)) {
                this.emitPartial(map[entity]);
                this.sectionStart = this._index + 1;
            }
        }
    };
    // Parses legacy entities (without trailing semicolon)
    Tokenizer.prototype.parseLegacyEntity = function () {
        var start = this.sectionStart + 1;
        // The max length of legacy entities is 6
        var limit = Math.min(this._index - start, 6);
        while (limit >= 2) {
            // The min length of legacy entities is 2
            var entity = this.buffer.substr(start, limit);
            if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
                this.emitPartial(legacy_json_1.default[entity]);
                this.sectionStart += limit + 1;
                return;
            }
            limit--;
        }
    };
    Tokenizer.prototype.stateInNamedEntity = function (c) {
        if (c === ";") {
            this.parseFixedEntity();
            // Retry as legacy entity if entity wasn't parsed
            if (this.baseState === 1 /* Text */ &&
                this.sectionStart + 1 < this._index &&
                !this.xmlMode) {
                this.parseLegacyEntity();
            }
            this._state = this.baseState;
        }
        else if ((c < "0" || c > "9") && !isASCIIAlpha(c)) {
            if (this.xmlMode || this.sectionStart + 1 === this._index) {
                // Ignore
            }
            else if (this.baseState !== 1 /* Text */) {
                if (c !== "=") {
                    // Parse as legacy entity, without allowing additional characters.
                    this.parseFixedEntity(legacy_json_1.default);
                }
            }
            else {
                this.parseLegacyEntity();
            }
            this._state = this.baseState;
            this._index--;
        }
    };
    Tokenizer.prototype.decodeNumericEntity = function (offset, base, strict) {
        var sectionStart = this.sectionStart + offset;
        if (sectionStart !== this._index) {
            // Parse entity
            var entity = this.buffer.substring(sectionStart, this._index);
            var parsed = parseInt(entity, base);
            this.emitPartial(decode_codepoint_1.default(parsed));
            this.sectionStart = strict ? this._index + 1 : this._index;
        }
        this._state = this.baseState;
    };
    Tokenizer.prototype.stateInNumericEntity = function (c) {
        if (c === ";") {
            this.decodeNumericEntity(2, 10, true);
        }
        else if (c < "0" || c > "9") {
            if (!this.xmlMode) {
                this.decodeNumericEntity(2, 10, false);
            }
            else {
                this._state = this.baseState;
            }
            this._index--;
        }
    };
    Tokenizer.prototype.stateInHexEntity = function (c) {
        if (c === ";") {
            this.decodeNumericEntity(3, 16, true);
        }
        else if ((c < "a" || c > "f") &&
            (c < "A" || c > "F") &&
            (c < "0" || c > "9")) {
            if (!this.xmlMode) {
                this.decodeNumericEntity(3, 16, false);
            }
            else {
                this._state = this.baseState;
            }
            this._index--;
        }
    };
    Tokenizer.prototype.cleanup = function () {
        if (this.sectionStart < 0) {
            this.buffer = "";
            this.bufferOffset += this._index;
            this._index = 0;
        }
        else if (this.running) {
            if (this._state === 1 /* Text */) {
                if (this.sectionStart !== this._index) {
                    this.cbs.ontext(this.buffer.substr(this.sectionStart));
                }
                this.buffer = "";
                this.bufferOffset += this._index;
                this._index = 0;
            }
            else if (this.sectionStart === this._index) {
                // The section just started
                this.buffer = "";
                this.bufferOffset += this._index;
                this._index = 0;
            }
            else {
                // Remove everything unnecessary
                this.buffer = this.buffer.substr(this.sectionStart);
                this._index -= this.sectionStart;
                this.bufferOffset += this.sectionStart;
            }
            this.sectionStart = 0;
        }
    };
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */
    Tokenizer.prototype.parse = function () {
        while (this._index < this.buffer.length && this.running) {
            var c = this.buffer.charAt(this._index);
            if (this._state === 1 /* Text */) {
                this.stateText(c);
            }
            else if (this._state === 12 /* InAttributeValueDq */) {
                this.stateInAttributeValueDoubleQuotes(c);
            }
            else if (this._state === 9 /* InAttributeName */) {
                this.stateInAttributeName(c);
            }
            else if (this._state === 19 /* InComment */) {
                this.stateInComment(c);
            }
            else if (this._state === 20 /* InSpecialComment */) {
                this.stateInSpecialComment(c);
            }
            else if (this._state === 8 /* BeforeAttributeName */) {
                this.stateBeforeAttributeName(c);
            }
            else if (this._state === 3 /* InTagName */) {
                this.stateInTagName(c);
            }
            else if (this._state === 6 /* InClosingTagName */) {
                this.stateInClosingTagName(c);
            }
            else if (this._state === 2 /* BeforeTagName */) {
                this.stateBeforeTagName(c);
            }
            else if (this._state === 10 /* AfterAttributeName */) {
                this.stateAfterAttributeName(c);
            }
            else if (this._state === 13 /* InAttributeValueSq */) {
                this.stateInAttributeValueSingleQuotes(c);
            }
            else if (this._state === 11 /* BeforeAttributeValue */) {
                this.stateBeforeAttributeValue(c);
            }
            else if (this._state === 5 /* BeforeClosingTagName */) {
                this.stateBeforeClosingTagName(c);
            }
            else if (this._state === 7 /* AfterClosingTagName */) {
                this.stateAfterClosingTagName(c);
            }
            else if (this._state === 32 /* BeforeSpecialS */) {
                this.stateBeforeSpecialS(c);
            }
            else if (this._state === 21 /* AfterComment1 */) {
                this.stateAfterComment1(c);
            }
            else if (this._state === 14 /* InAttributeValueNq */) {
                this.stateInAttributeValueNoQuotes(c);
            }
            else if (this._state === 4 /* InSelfClosingTag */) {
                this.stateInSelfClosingTag(c);
            }
            else if (this._state === 16 /* InDeclaration */) {
                this.stateInDeclaration(c);
            }
            else if (this._state === 15 /* BeforeDeclaration */) {
                this.stateBeforeDeclaration(c);
            }
            else if (this._state === 22 /* AfterComment2 */) {
                this.stateAfterComment2(c);
            }
            else if (this._state === 18 /* BeforeComment */) {
                this.stateBeforeComment(c);
            }
            else if (this._state === 33 /* BeforeSpecialSEnd */) {
                this.stateBeforeSpecialSEnd(c);
            }
            else if (this._state === 53 /* BeforeSpecialTEnd */) {
                stateAfterSpecialTEnd(this, c);
            }
            else if (this._state === 39 /* AfterScript1 */) {
                stateAfterScript1(this, c);
            }
            else if (this._state === 40 /* AfterScript2 */) {
                stateAfterScript2(this, c);
            }
            else if (this._state === 41 /* AfterScript3 */) {
                stateAfterScript3(this, c);
            }
            else if (this._state === 34 /* BeforeScript1 */) {
                stateBeforeScript1(this, c);
            }
            else if (this._state === 35 /* BeforeScript2 */) {
                stateBeforeScript2(this, c);
            }
            else if (this._state === 36 /* BeforeScript3 */) {
                stateBeforeScript3(this, c);
            }
            else if (this._state === 37 /* BeforeScript4 */) {
                stateBeforeScript4(this, c);
            }
            else if (this._state === 38 /* BeforeScript5 */) {
                this.stateBeforeSpecialLast(c, 2 /* Script */);
            }
            else if (this._state === 42 /* AfterScript4 */) {
                stateAfterScript4(this, c);
            }
            else if (this._state === 43 /* AfterScript5 */) {
                this.stateAfterSpecialLast(c, 6);
            }
            else if (this._state === 44 /* BeforeStyle1 */) {
                stateBeforeStyle1(this, c);
            }
            else if (this._state === 29 /* InCdata */) {
                this.stateInCdata(c);
            }
            else if (this._state === 45 /* BeforeStyle2 */) {
                stateBeforeStyle2(this, c);
            }
            else if (this._state === 46 /* BeforeStyle3 */) {
                stateBeforeStyle3(this, c);
            }
            else if (this._state === 47 /* BeforeStyle4 */) {
                this.stateBeforeSpecialLast(c, 3 /* Style */);
            }
            else if (this._state === 48 /* AfterStyle1 */) {
                stateAfterStyle1(this, c);
            }
            else if (this._state === 49 /* AfterStyle2 */) {
                stateAfterStyle2(this, c);
            }
            else if (this._state === 50 /* AfterStyle3 */) {
                stateAfterStyle3(this, c);
            }
            else if (this._state === 51 /* AfterStyle4 */) {
                this.stateAfterSpecialLast(c, 5);
            }
            else if (this._state === 52 /* BeforeSpecialT */) {
                stateBeforeSpecialT(this, c);
            }
            else if (this._state === 54 /* BeforeTitle1 */) {
                stateBeforeTitle1(this, c);
            }
            else if (this._state === 55 /* BeforeTitle2 */) {
                stateBeforeTitle2(this, c);
            }
            else if (this._state === 56 /* BeforeTitle3 */) {
                stateBeforeTitle3(this, c);
            }
            else if (this._state === 57 /* BeforeTitle4 */) {
                this.stateBeforeSpecialLast(c, 4 /* Title */);
            }
            else if (this._state === 58 /* AfterTitle1 */) {
                stateAfterTitle1(this, c);
            }
            else if (this._state === 59 /* AfterTitle2 */) {
                stateAfterTitle2(this, c);
            }
            else if (this._state === 60 /* AfterTitle3 */) {
                stateAfterTitle3(this, c);
            }
            else if (this._state === 61 /* AfterTitle4 */) {
                this.stateAfterSpecialLast(c, 5);
            }
            else if (this._state === 17 /* InProcessingInstruction */) {
                this.stateInProcessingInstruction(c);
            }
            else if (this._state === 64 /* InNamedEntity */) {
                this.stateInNamedEntity(c);
            }
            else if (this._state === 23 /* BeforeCdata1 */) {
                stateBeforeCdata1(this, c);
            }
            else if (this._state === 62 /* BeforeEntity */) {
                stateBeforeEntity(this, c);
            }
            else if (this._state === 24 /* BeforeCdata2 */) {
                stateBeforeCdata2(this, c);
            }
            else if (this._state === 25 /* BeforeCdata3 */) {
                stateBeforeCdata3(this, c);
            }
            else if (this._state === 30 /* AfterCdata1 */) {
                this.stateAfterCdata1(c);
            }
            else if (this._state === 31 /* AfterCdata2 */) {
                this.stateAfterCdata2(c);
            }
            else if (this._state === 26 /* BeforeCdata4 */) {
                stateBeforeCdata4(this, c);
            }
            else if (this._state === 27 /* BeforeCdata5 */) {
                stateBeforeCdata5(this, c);
            }
            else if (this._state === 28 /* BeforeCdata6 */) {
                this.stateBeforeCdata6(c);
            }
            else if (this._state === 66 /* InHexEntity */) {
                this.stateInHexEntity(c);
            }
            else if (this._state === 65 /* InNumericEntity */) {
                this.stateInNumericEntity(c);
                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            }
            else if (this._state === 63 /* BeforeNumericEntity */) {
                stateBeforeNumericEntity(this, c);
            }
            else {
                this.cbs.onerror(Error("unknown _state"), this._state);
            }
            this._index++;
        }
        this.cleanup();
    };
    Tokenizer.prototype.finish = function () {
        // If there is remaining data, emit it in a reasonable way
        if (this.sectionStart < this._index) {
            this.handleTrailingData();
        }
        this.cbs.onend();
    };
    Tokenizer.prototype.handleTrailingData = function () {
        var data = this.buffer.substr(this.sectionStart);
        if (this._state === 29 /* InCdata */ ||
            this._state === 30 /* AfterCdata1 */ ||
            this._state === 31 /* AfterCdata2 */) {
            this.cbs.oncdata(data);
        }
        else if (this._state === 19 /* InComment */ ||
            this._state === 21 /* AfterComment1 */ ||
            this._state === 22 /* AfterComment2 */) {
            this.cbs.oncomment(data);
        }
        else if (this._state === 64 /* InNamedEntity */ && !this.xmlMode) {
            this.parseLegacyEntity();
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        }
        else if (this._state === 65 /* InNumericEntity */ && !this.xmlMode) {
            this.decodeNumericEntity(2, 10, false);
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        }
        else if (this._state === 66 /* InHexEntity */ && !this.xmlMode) {
            this.decodeNumericEntity(3, 16, false);
            if (this.sectionStart < this._index) {
                this._state = this.baseState;
                this.handleTrailingData();
            }
        }
        else if (this._state !== 3 /* InTagName */ &&
            this._state !== 8 /* BeforeAttributeName */ &&
            this._state !== 11 /* BeforeAttributeValue */ &&
            this._state !== 10 /* AfterAttributeName */ &&
            this._state !== 9 /* InAttributeName */ &&
            this._state !== 13 /* InAttributeValueSq */ &&
            this._state !== 12 /* InAttributeValueDq */ &&
            this._state !== 14 /* InAttributeValueNq */ &&
            this._state !== 6 /* InClosingTagName */) {
            this.cbs.ontext(data);
        }
        /*
         * Else, ignore remaining data
         * TODO add a way to remove current tag
         */
    };
    Tokenizer.prototype.getSection = function () {
        return this.buffer.substring(this.sectionStart, this._index);
    };
    Tokenizer.prototype.emitToken = function (name) {
        this.cbs[name](this.getSection());
        this.sectionStart = -1;
    };
    Tokenizer.prototype.emitPartial = function (value) {
        if (this.baseState !== 1 /* Text */) {
            this.cbs.onattribdata(value); // TODO implement the new event
        }
        else {
            this.cbs.ontext(value);
        }
    };
    return Tokenizer;
}());
exports.default = Tokenizer;
});

const htmlparser2Tokenizer = /*@__PURE__*/getDefaultExportFromCjs(Tokenizer_1);

// src/shim/server/index.ts
var Tokenizer = htmlparser2Tokenizer.default || htmlparser2Tokenizer;
var noop = () => void 0;
var shim = (markup, options = {}) => {
  const {tw: tw$1 = tw} = typeof options == "function" ? {tw: options} : options;
  let lastAttribName = "";
  let lastChunkStart = 0;
  const chunks = [];
  const tokenizer = new Tokenizer({
    decodeEntities: false,
    xmlMode: false
  }, {
    onattribend: noop,
    onattribdata: (value) => {
      if (lastAttribName == "class") {
        const currentIndex = tokenizer.getAbsoluteIndex();
        const startIndex = currentIndex - value.length;
        const parsedClassNames = tw$1(value);
        if (parsedClassNames !== value) {
          chunks.push(markup.slice(lastChunkStart, startIndex));
          chunks.push(parsedClassNames);
          lastChunkStart = currentIndex;
        }
      }
      lastAttribName = "";
    },
    onattribname: (name) => {
      lastAttribName = name;
    },
    oncdata: noop,
    onclosetag: noop,
    oncomment: noop,
    ondeclaration: noop,
    onend: noop,
    onerror: noop,
    onopentagend: noop,
    onopentagname: noop,
    onprocessinginstruction: noop,
    onselfclosingtag: noop,
    ontext: noop
  });
  tokenizer.end(markup);
  if (!chunks.length) {
    return markup;
  }
  return chunks.join("") + markup.slice(lastChunkStart || 0, markup.length);
};

const spxTailwindCss = ":host{display:var(--spx-tailwind-display, block)}";

const SpxTailwind = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spxTailwindDidLoad = createEvent(this, "spxTailwindDidLoad", 7);
    this.setContent = () => {
      this.content = this.el.innerHTML;
      const { tw } = twind(this.el.shadowRoot);
      shim(this.content, {
        tw,
      });
    };
  }
  componentWillLoad() {
    this.setContent();
  }
  componentDidLoad() {
    globalComponentDidLoad({
      el: this.el,
      cb: this.setContent,
      mutations: {
        subtree: true,
        attributes: true,
        classList: true,
      },
    });
    this.spxTailwindDidLoad.emit({ target: 'document' });
  }
  componentWillUpdate() {
    globalComponentWillUpdate(this.el);
  }
  render() {
    return h("div", { innerHTML: this.content });
  }
  get el() { return getElement(this); }
};
SpxTailwind.style = spxTailwindCss;

export { SpxTailwind as spx_tailwind };
