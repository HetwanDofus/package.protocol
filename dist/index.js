// src/dofus-message.ts
var DofusMessage = class {
  _id;
  constructor(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }
};

// ../../node_modules/ts-pattern/dist/index.js
var t = Symbol.for("@ts-pattern/matcher");
var e = Symbol.for("@ts-pattern/isVariadic");
var n = "@ts-pattern/anonymous-select-key";
var r = (t2) => Boolean(t2 && "object" == typeof t2);
var i = (e2) => e2 && !!e2[t];
var s = (n2, o2, c2) => {
  if (i(n2)) {
    const e2 = n2[t](), { matched: r2, selections: i2 } = e2.match(o2);
    return r2 && i2 && Object.keys(i2).forEach((t2) => c2(t2, i2[t2])), r2;
  }
  if (r(n2)) {
    if (!r(o2))
      return false;
    if (Array.isArray(n2)) {
      if (!Array.isArray(o2))
        return false;
      let t2 = [], r2 = [], a2 = [];
      for (const s2 of n2.keys()) {
        const o3 = n2[s2];
        i(o3) && o3[e] ? a2.push(o3) : a2.length ? r2.push(o3) : t2.push(o3);
      }
      if (a2.length) {
        if (a2.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (o2.length < t2.length + r2.length)
          return false;
        const e2 = o2.slice(0, t2.length), n3 = 0 === r2.length ? [] : o2.slice(-r2.length), i2 = o2.slice(t2.length, 0 === r2.length ? Infinity : -r2.length);
        return t2.every((t3, n4) => s(t3, e2[n4], c2)) && r2.every((t3, e3) => s(t3, n3[e3], c2)) && (0 === a2.length || s(a2[0], i2, c2));
      }
      return n2.length === o2.length && n2.every((t3, e2) => s(t3, o2[e2], c2));
    }
    return Object.keys(n2).every((e2) => {
      const r2 = n2[e2];
      return (e2 in o2 || i(a2 = r2) && "optional" === a2[t]().matcherType) && s(r2, o2[e2], c2);
      var a2;
    });
  }
  return Object.is(o2, n2);
};
var o = (e2) => {
  var n2, s2, a2;
  return r(e2) ? i(e2) ? null != (n2 = null == (s2 = (a2 = e2[t]()).getSelectionKeys) ? void 0 : s2.call(a2)) ? n2 : [] : Array.isArray(e2) ? c(e2, o) : c(Object.values(e2), o) : [];
};
var c = (t2, e2) => t2.reduce((t3, n2) => t3.concat(e2(n2)), []);
function a(...t2) {
  if (1 === t2.length) {
    const [e2] = t2;
    return (t3) => s(e2, t3, () => {
    });
  }
  if (2 === t2.length) {
    const [e2, n2] = t2;
    return s(e2, n2, () => {
    });
  }
  throw new Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${t2.length}.`);
}
function u(t2) {
  return Object.assign(t2, { optional: () => l(t2), and: (e2) => m(t2, e2), or: (e2) => y(t2, e2), select: (e2) => void 0 === e2 ? p(t2) : p(e2, t2) });
}
function h(t2) {
  return Object.assign(((t3) => Object.assign(t3, { *[Symbol.iterator]() {
    yield Object.assign(t3, { [e]: true });
  } }))(t2), { optional: () => h(l(t2)), select: (e2) => h(void 0 === e2 ? p(t2) : p(e2, t2)) });
}
function l(e2) {
  return u({ [t]: () => ({ match: (t2) => {
    let n2 = {};
    const r2 = (t3, e3) => {
      n2[t3] = e3;
    };
    return void 0 === t2 ? (o(e2).forEach((t3) => r2(t3, void 0)), { matched: true, selections: n2 }) : { matched: s(e2, t2, r2), selections: n2 };
  }, getSelectionKeys: () => o(e2), matcherType: "optional" }) });
}
var f = (t2, e2) => {
  for (const n2 of t2)
    if (!e2(n2))
      return false;
  return true;
};
var g = (t2, e2) => {
  for (const [n2, r2] of t2.entries())
    if (!e2(r2, n2))
      return false;
  return true;
};
function m(...e2) {
  return u({ [t]: () => ({ match: (t2) => {
    let n2 = {};
    const r2 = (t3, e3) => {
      n2[t3] = e3;
    };
    return { matched: e2.every((e3) => s(e3, t2, r2)), selections: n2 };
  }, getSelectionKeys: () => c(e2, o), matcherType: "and" }) });
}
function y(...e2) {
  return u({ [t]: () => ({ match: (t2) => {
    let n2 = {};
    const r2 = (t3, e3) => {
      n2[t3] = e3;
    };
    return c(e2, o).forEach((t3) => r2(t3, void 0)), { matched: e2.some((e3) => s(e3, t2, r2)), selections: n2 };
  }, getSelectionKeys: () => c(e2, o), matcherType: "or" }) });
}
function d(e2) {
  return { [t]: () => ({ match: (t2) => ({ matched: Boolean(e2(t2)) }) }) };
}
function p(...e2) {
  const r2 = "string" == typeof e2[0] ? e2[0] : void 0, i2 = 2 === e2.length ? e2[1] : "string" == typeof e2[0] ? void 0 : e2[0];
  return u({ [t]: () => ({ match: (t2) => {
    let e3 = { [null != r2 ? r2 : n]: t2 };
    return { matched: void 0 === i2 || s(i2, t2, (t3, n2) => {
      e3[t3] = n2;
    }), selections: e3 };
  }, getSelectionKeys: () => [null != r2 ? r2 : n].concat(void 0 === i2 ? [] : o(i2)) }) });
}
function v(t2) {
  return "number" == typeof t2;
}
function b(t2) {
  return "string" == typeof t2;
}
function w(t2) {
  return "bigint" == typeof t2;
}
var S = u(d(function(t2) {
  return true;
}));
var O = S;
var j = (t2) => Object.assign(u(t2), { startsWith: (e2) => {
  return j(m(t2, (n2 = e2, d((t3) => b(t3) && t3.startsWith(n2)))));
  var n2;
}, endsWith: (e2) => {
  return j(m(t2, (n2 = e2, d((t3) => b(t3) && t3.endsWith(n2)))));
  var n2;
}, minLength: (e2) => j(m(t2, ((t3) => d((e3) => b(e3) && e3.length >= t3))(e2))), maxLength: (e2) => j(m(t2, ((t3) => d((e3) => b(e3) && e3.length <= t3))(e2))), includes: (e2) => {
  return j(m(t2, (n2 = e2, d((t3) => b(t3) && t3.includes(n2)))));
  var n2;
}, regex: (e2) => {
  return j(m(t2, (n2 = e2, d((t3) => b(t3) && Boolean(t3.match(n2))))));
  var n2;
} });
var E = j(d(b));
var K = (t2) => Object.assign(u(t2), { between: (e2, n2) => K(m(t2, ((t3, e3) => d((n3) => v(n3) && t3 <= n3 && e3 >= n3))(e2, n2))), lt: (e2) => K(m(t2, ((t3) => d((e3) => v(e3) && e3 < t3))(e2))), gt: (e2) => K(m(t2, ((t3) => d((e3) => v(e3) && e3 > t3))(e2))), lte: (e2) => K(m(t2, ((t3) => d((e3) => v(e3) && e3 <= t3))(e2))), gte: (e2) => K(m(t2, ((t3) => d((e3) => v(e3) && e3 >= t3))(e2))), int: () => K(m(t2, d((t3) => v(t3) && Number.isInteger(t3)))), finite: () => K(m(t2, d((t3) => v(t3) && Number.isFinite(t3)))), positive: () => K(m(t2, d((t3) => v(t3) && t3 > 0))), negative: () => K(m(t2, d((t3) => v(t3) && t3 < 0))) });
var A = K(d(v));
var x = (t2) => Object.assign(u(t2), { between: (e2, n2) => x(m(t2, ((t3, e3) => d((n3) => w(n3) && t3 <= n3 && e3 >= n3))(e2, n2))), lt: (e2) => x(m(t2, ((t3) => d((e3) => w(e3) && e3 < t3))(e2))), gt: (e2) => x(m(t2, ((t3) => d((e3) => w(e3) && e3 > t3))(e2))), lte: (e2) => x(m(t2, ((t3) => d((e3) => w(e3) && e3 <= t3))(e2))), gte: (e2) => x(m(t2, ((t3) => d((e3) => w(e3) && e3 >= t3))(e2))), positive: () => x(m(t2, d((t3) => w(t3) && t3 > 0))), negative: () => x(m(t2, d((t3) => w(t3) && t3 < 0))) });
var P = x(d(w));
var T = u(d(function(t2) {
  return "boolean" == typeof t2;
}));
var k = u(d(function(t2) {
  return "symbol" == typeof t2;
}));
var B = u(d(function(t2) {
  return null == t2;
}));
var _ = { __proto__: null, matcher: t, optional: l, array: function(...e2) {
  return h({ [t]: () => ({ match: (t2) => {
    if (!Array.isArray(t2))
      return { matched: false };
    if (0 === e2.length)
      return { matched: true };
    const n2 = e2[0];
    let r2 = {};
    if (0 === t2.length)
      return o(n2).forEach((t3) => {
        r2[t3] = [];
      }), { matched: true, selections: r2 };
    const i2 = (t3, e3) => {
      r2[t3] = (r2[t3] || []).concat([e3]);
    };
    return { matched: t2.every((t3) => s(n2, t3, i2)), selections: r2 };
  }, getSelectionKeys: () => 0 === e2.length ? [] : o(e2[0]) }) });
}, set: function(...e2) {
  return u({ [t]: () => ({ match: (t2) => {
    if (!(t2 instanceof Set))
      return { matched: false };
    let n2 = {};
    if (0 === t2.size)
      return { matched: true, selections: n2 };
    if (0 === e2.length)
      return { matched: true };
    const r2 = (t3, e3) => {
      n2[t3] = (n2[t3] || []).concat([e3]);
    }, i2 = e2[0];
    return { matched: f(t2, (t3) => s(i2, t3, r2)), selections: n2 };
  }, getSelectionKeys: () => 0 === e2.length ? [] : o(e2[0]) }) });
}, map: function(...e2) {
  return u({ [t]: () => ({ match: (t2) => {
    if (!(t2 instanceof Map))
      return { matched: false };
    let n2 = {};
    if (0 === t2.size)
      return { matched: true, selections: n2 };
    const r2 = (t3, e3) => {
      n2[t3] = (n2[t3] || []).concat([e3]);
    };
    if (0 === e2.length)
      return { matched: true };
    var i2;
    if (1 === e2.length)
      throw new Error(`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null == (i2 = e2[0]) ? void 0 : i2.toString()}`);
    const [o2, c2] = e2;
    return { matched: g(t2, (t3, e3) => {
      const n3 = s(o2, e3, r2), i3 = s(c2, t3, r2);
      return n3 && i3;
    }), selections: n2 };
  }, getSelectionKeys: () => 0 === e2.length ? [] : [...o(e2[0]), ...o(e2[1])] }) });
}, intersection: m, union: y, not: function(e2) {
  return u({ [t]: () => ({ match: (t2) => ({ matched: !s(e2, t2, () => {
  }) }), getSelectionKeys: () => [], matcherType: "not" }) });
}, when: d, select: p, any: S, _: O, string: E, number: A, bigint: P, boolean: T, symbol: k, nullish: B, instanceOf: function(t2) {
  return u(d(function(t3) {
    return (e2) => e2 instanceof t3;
  }(t2)));
}, shape: function(t2) {
  return u(d(a(t2)));
} };
var W = { matched: false, value: void 0 };
function N(t2) {
  return new $(t2, W);
}
var $ = class _$ {
  constructor(t2, e2) {
    this.input = void 0, this.state = void 0, this.input = t2, this.state = e2;
  }
  with(...t2) {
    if (this.state.matched)
      return this;
    const e2 = t2[t2.length - 1], r2 = [t2[0]];
    let i2;
    3 === t2.length && "function" == typeof t2[1] ? (r2.push(t2[0]), i2 = t2[1]) : t2.length > 2 && r2.push(...t2.slice(1, t2.length - 1));
    let o2 = false, c2 = {};
    const a2 = (t3, e3) => {
      o2 = true, c2[t3] = e3;
    }, u2 = !r2.some((t3) => s(t3, this.input, a2)) || i2 && !Boolean(i2(this.input)) ? W : { matched: true, value: e2(o2 ? n in c2 ? c2[n] : c2 : this.input, this.input) };
    return new _$(this.input, u2);
  }
  when(t2, e2) {
    if (this.state.matched)
      return this;
    const n2 = Boolean(t2(this.input));
    return new _$(this.input, n2 ? { matched: true, value: e2(this.input, this.input) } : W);
  }
  otherwise(t2) {
    return this.state.matched ? this.state.value : t2(this.input);
  }
  exhaustive() {
    return this.run();
  }
  run() {
    if (this.state.matched)
      return this.state.value;
    let t2;
    try {
      t2 = JSON.stringify(this.input);
    } catch (e2) {
      t2 = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${t2}`);
  }
  returnType() {
    return this;
  }
};

// src/network-message.ts
import {
  BigEndianReader,
  BigEndianWriter
} from "@hetwan/io";
var NetworkMessage = class _NetworkMessage {
  static BIT_RIGHT_SHIFT_LEN_PACKET_ID = 2;
  static BIT_MASK = 3;
  static PACKET_METADATA_LENGTH = 7;
  static encode(message) {
    const messageWriter = new BigEndianWriter();
    message.serialize(messageWriter);
    const wrapperWriter = new BigEndianWriter(
      Buffer.allocUnsafe(
        messageWriter.getPointer() + _NetworkMessage.PACKET_METADATA_LENGTH
      )
    );
    const type = this.computeTypeLength(messageWriter.getPointer());
    wrapperWriter.writeUShort(this.subComputeStaticHeader(message.id, type));
    wrapperWriter.writeUInt(1);
    N(type).with(1, () => wrapperWriter.writeByte(messageWriter.getPointer())).with(2, () => wrapperWriter.writeShort(messageWriter.getPointer())).with(3, () => {
      wrapperWriter.writeByte(messageWriter.getPointer() >> 16 & 255);
      wrapperWriter.writeShort(messageWriter.getPointer() & 65535);
    }).otherwise(() => {
      throw new Error("Invalid type");
    });
    wrapperWriter.writeBuffer(messageWriter.getBuffer());
    return wrapperWriter.getBuffer();
  }
  static decode(data) {
    const reader = new BigEndianReader(data);
    const messageHeader = reader.readUShort();
    const messageId = messageHeader >> 2;
    const typeLength = messageHeader & 3;
    const instanceId = reader.readUInt();
    const messageLength = _NetworkMessage.getPacketLength(
      reader,
      typeLength
    );
    const messageReader = new BigEndianReader(
      data.subarray(reader.getPointer(), reader.getPointer() + messageLength)
    );
    return {
      messageId,
      instanceId,
      messageLength,
      messageReader
    };
  }
  static computeTypeLength(length) {
    return N(length).with(
      _.when((l2) => l2 > 65535),
      () => 3
    ).with(
      _.when((l2) => l2 > 255),
      () => 2
    ).with(
      _.when((l2) => l2 > 0),
      () => 1
    ).otherwise(() => 0);
  }
  static subComputeStaticHeader(id, typeLength) {
    return id << _NetworkMessage.BIT_RIGHT_SHIFT_LEN_PACKET_ID | typeLength;
  }
  static getPacketLength(reader, length) {
    return N(length).with(1, () => reader.readByte()).with(2, () => reader.readUShort()).with(3, () => {
      return ((reader.readByte() & 255) << 16) + ((reader.readByte() & 255) << 8) + (reader.readByte() & 255);
    }).otherwise(() => {
      throw new Error("Packet too long");
    });
  }
};
export {
  DofusMessage,
  NetworkMessage
};