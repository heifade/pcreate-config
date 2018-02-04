export interface CompileModel {
  noImplicitAny?: boolean;
  outDir: string;
  sourceMap?: boolean;
  module?: "amd" | "commonjs" | "es2015" | "es6" | "esnext" | "none" | "system" | "umd";
  target?: "es3" | "es5" | "es2015" | "es2016" | "es2017" | "esnext";
  lib?: [
      "es5"
      | "es6"
      | "es2015"
      | "es7"
      | "es2016"
      | "es2017"
      | "esnext"
      | "dom"
      | "dom.iterable"
      | "webworker"
      | "scripthost"
      | "es2015.core"
      | "es2015.collection"
      | "es2015.generator"
      | "es2015.iterable"
      | "es2015.promise"
      | "es2015.proxy"
      | "es2015.reflect"
      | "es2015.symbol"
      | "es2015.symbol.wellknown"
      | "es2016.array.include"
      | "es2017.object"
      | "es2017.sharedmemory"
      | "es2017.string"
      | "es2017.intl"
      | "esnext.asynciterable"
  ];
  declaration?: boolean;
  allowJs?: boolean;
}
