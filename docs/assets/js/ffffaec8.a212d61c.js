"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[197],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,_=d["".concat(i,".").concat(f)]||d[f]||m[f]||l;return n?r.createElement(_,o(o({ref:t},c),{},{components:n})):r.createElement(_,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3426:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r,a=n(7462),l=n(3366),o=(n(7294),n(3905)),s=["components"],i={},p=void 0,c={unversionedId:"maker",id:"maker",title:"maker",description:"- Create one or more modules from selected notebook cells",source:"@site/docs/01_maker.md",sourceDirName:".",slug:"/maker",permalink:"/maker",editUrl:"https://github.com/fastai/nbprocess/tree/main/packages/create-docusaurus/templates/shared/docs/01_maker.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"read",permalink:"/read"},next:{title:"export",permalink:"/export"}},m={},d=[{value:"Variable helpers",id:"variable-helpers",level:2},{value:"ModuleMaker -",id:"modulemaker--",level:2},{value:"Export -",id:"export--",level:2}],f=(r="CodeOutputBlock",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),_={toc:d};function u(e){var t=e.components,n=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#hide\n#default_exp maker\n")),(0,o.kt)("h1",{id:"nbprocessmaker"},"nbprocess.maker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create one or more modules from selected notebook cells")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#export\nfrom nbprocess.read import *\nfrom nbprocess.imports import *\n\nfrom fastcore.script import *\nfrom fastcore.imports import *\n\nimport ast,contextlib\n\nfrom collections import defaultdict\nfrom pprint import pformat\nfrom textwrap import TextWrapper\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"from fastcore.test import *\nfrom pdb import set_trace\nfrom importlib import reload\n")),(0,o.kt)("h2",{id:"variable-helpers"},"Variable helpers"),(0,o.kt)("p",null,"These functions let us find and modify the definitions of variables in python modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#export\ndef find_var(lines, varname):\n    \"Find the line numbers where `varname` is defined in `lines`\"\n    start = first(i for i,o in enumerate(lines) if o.startswith(varname))\n    if start is None: return None,None\n    empty = ' ','\\t'\n    if start==len(lines)-1 or lines[start+1][:1] not in empty: return start,start+1\n    end = first(i for i,o in enumerate(lines[start+1:]) if o[:1] not in empty)\n    return start,len(lines) if end is None else (end+start+1)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t = '''a_=(1,\n  2,\n  3)\n\nb_=3'''\ntest_eq(find_var(t.splitlines(), 'a_'), (0,3))\ntest_eq(find_var(t.splitlines(), 'b_'), (4,5))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#export\ndef read_var(code, varname):\n    \"Eval and return the value of `varname` defined in `code`\"\n    lines = code.splitlines()\n    start,end = find_var(lines, varname)\n    if start is None: return None\n    res = [lines[start].split('=')[-1].strip()]\n    res += lines[start+1:end]\n    try: return eval('\\n'.join(res))\n    except SyntaxError: raise Exception('\\n'.join(res)) from None\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"test_eq(read_var(t, 'a_'), (1,2,3))\ntest_eq(read_var(t, 'b_'), 3)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#export\ndef update_var(varname, func, fn=None, code=None):\n    "Update the definition of `varname` in file `fn`, by calling `func` with the current definition"\n    if fn:\n        fn = Path(fn)\n        code = fn.read_text()\n    lines = code.splitlines()\n    v = read_var(code, varname)\n    res = func(v)\n    start,end = find_var(lines, varname)\n    del(lines[start:end])\n    lines.insert(start, f"{varname} = {res}")\n    code = \'\\n\'.join(lines)\n    if fn: fn.write_text(code)\n    else: return code\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"g = exec_new(t)\ntest_eq((g['a_'],g['b_']), ((1,2,3),3))\nt2 = update_var('a_', lambda o:0, code=t)\nexec(t2, g)\ntest_eq((g['a_'],g['b_']), (0,3))\nt3 = update_var('b_', lambda o:0, code=t)\nexec(t3, g)\ntest_eq((g['a_'],g['b_']), ((1,2,3),0))\n")),(0,o.kt)("h2",{id:"modulemaker--"},"ModuleMaker -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#export\nclass ModuleMaker:\n    "Helper class to create exported library from notebook source cells"\n    def __init__(self, dest, name, nb_path, is_new=True):\n        dest,nb_path = Path(dest),Path(nb_path)\n        store_attr()\n        self.fname = dest/(name.replace(\'.\',\'/\') + ".py")\n        if is_new: dest.mkdir(parents=True, exist_ok=True)\n        else: assert self.fname.exists(), f"{self.fname} does not exist"\n        self.dest2nb = nb_path.relpath(dest)\n        self.hdr = f"# %% {self.dest2nb}"\n')),(0,o.kt)("p",null,"In order to export a notebook, we need an way to create a Python file. ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleMaker")," fills that role. Pass in the directory where you want to module created, the name of the module, the path of the notebook source, and set ",(0,o.kt)("inlineCode",{parentName:"p"},"is_new")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," if this is a new file being created (rather than an existing file being added to). The location of the saved module will be in ",(0,o.kt)("inlineCode",{parentName:"p"},"fname"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mm = ModuleMaker(dest='tmp', name='test.testing', nb_path=Path.cwd()/'01_export.ipynb', is_new=True)\nmm.fname\n")),(0,o.kt)(f,{lang:"",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Path('tmp/test/testing.py')\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#export\n_def_types = ast.FunctionDef,ast.AsyncFunctionDef,ast.ClassDef\n_assign_types = ast.AnnAssign, ast.Assign, ast.AugAssign\n\ndef _val_or_id(it): return [getattr(o, 'value', getattr(o, 'id', None)) for o in it.value.elts]\ndef _all_targets(a): return L(getattr(a,'elts',a))\ndef _filt_dec(x): return getattr(x,'id','').startswith('patch')\ndef _wants(o): return isinstance(o,_def_types) and not any(L(o.decorator_list).filter(_filt_dec))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#export\ndef retr_exports(trees):\n    # include anything mentioned in "_all_", even if otherwise private\n    # NB: "_all_" can include strings (names), or symbols, so we look for "id" or "value"\n    assigns = trees.filter(risinstance(_assign_types))\n    all_assigns = assigns.filter(lambda o: getattr(o.targets[0],\'id\',None)==\'_all_\')\n    all_vals = all_assigns.map(_val_or_id).concat()\n    syms = trees.filter(_wants).attrgot(\'name\')\n\n    # assignment targets (NB: can be multiple, e.g. "a=b=c", and/or destructuring e.g "a,b=(1,2)")\n    assign_targs = L(L(assn.targets).map(_all_targets).concat() for assn in assigns).concat()\n    exports = (assign_targs.attrgot(\'id\')+syms).filter(lambda o: o and o[0]!=\'_\')\n    return (exports+all_vals).unique()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#export\n@patch\ndef make_all(self:ModuleMaker, cells):\n    \"Create `__all__` with all exports in `cells`\"\n    if cells is None: return ''\n    return retr_exports(cells.map(NbCell.parsed_).concat())\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#export\ndef make_code_cell(code): return AttrDict(source=code, cell_type=\"code\")\ndef make_code_cells(*ss): return dict2nb({'cells':L(ss).map(make_code_cell)}).cells\n")),(0,o.kt)("p",null,"We want to add an ",(0,o.kt)("inlineCode",{parentName:"p"},"__all__")," to the top of the exported module. This methods autogenerates it from all code in ",(0,o.kt)("inlineCode",{parentName:"p"},"cells"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'nb = make_code_cells("from __future__ import print_function", "def a():...", "def b():...",\n                      "c=d=1", "_f=1", "_g=1", "_all_=[\'_g\']", "@patch\\ndef h(self:ca):...")\ntest_eq(set(mm.make_all(nb)), set([\'a\',\'b\',\'c\',\'d\', \'_g\']))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#export\ndef relative_import(name, fname, level=0):\n    "Convert a module `name` to a name relative to `fname`"\n    assert not level\n    sname = name.replace(\'.\',\'/\')\n    if not(os.path.commonpath([sname,fname])): return name\n    rel = os.path.relpath(sname, fname)\n    if rel==".": return "."\n    res = rel.replace(f"..{os.path.sep}", ".")\n    return "." + res.replace(os.path.sep, ".")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"test_eq(relative_import('nbprocess.core', \"xyz\"), 'nbprocess.core')\ntest_eq(relative_import('nbprocess.core', 'nbprocess'), '.core')\n_p = Path('fastai')\ntest_eq(relative_import('fastai.core', _p/'vision'), '..core')\ntest_eq(relative_import('fastai.core', _p/'vision/transform'), '...core')\ntest_eq(relative_import('fastai.vision.transform', _p/'vision'), '.transform')\ntest_eq(relative_import('fastai.notebook.core', _p/'data'), '..notebook.core')\ntest_eq(relative_import('fastai.vision', _p/'vision'), '.')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#export\ndef update_import(source, tree, libname, f=relative_import):\n    if not tree: return\n    imps = L(tree).filter(risinstance(ast.ImportFrom))\n    if not imps: return\n    src = source.splitlines(True)\n    for imp in imps:\n        nmod = f(imp.module, libname, imp.level)\n        lin = imp.lineno-1\n        sec = src[lin][imp.col_offset:imp.end_col_offset]\n        newsec = re.sub(f"(from +){\'.\'*imp.level}{imp.module}", fr"\\1{nmod}", sec)\n        src[lin] = src[lin].replace(sec,newsec)\n    return src\n\n@patch\ndef import2relative(cell:NbCell, libname):\n    src = update_import(cell.source, cell.parsed_(), libname)\n    if src: cell.set_source(src)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ss = \"from nbprocess.export import *\\nfrom nbprocess.a.b import *\"\ncell = make_code_cells([ss])[0]\ncell.import2relative('nbprocess')\ntest_eq(cell.source, 'from .export import *\\nfrom .a.b import *')\n\ncell = make_code_cells([ss])[0]\ncell.import2relative('nbprocess/a')\ntest_eq(cell.source, 'from ..export import *\\nfrom .b import *')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#export\n@patch\ndef make(self:ModuleMaker, cells, all_cells=None, lib_name=None):\n    \"Write module containing `cells` with `__all__` generated from `all_cells`\"\n    if lib_name is None: lib_name = get_config().lib_name\n    if all_cells is None: all_cells = cells\n    for cell in all_cells: cell.import2relative(lib_name)\n    if not self.is_new: return self._make_exists(cells, all_cells)\n\n    self.fname.parent.mkdir(exist_ok=True, parents=True)\n    _all = self.make_all(all_cells)\n    trees = cells.map(NbCell.parsed_)\n    try: last_future = max(i for i,tree in enumerate(trees) if tree and any(\n         isinstance(t,ast.ImportFrom) and t.module=='__future__' for t in tree))+1\n    except ValueError: last_future=0\n    with self.fname.open('w') as f:\n        f.write(f\"# AUTOGENERATED! DO NOT EDIT! File to edit: {self.dest2nb}.\")\n        write_cells(cells[:last_future], self.hdr, f, 0)\n        tw = TextWrapper(width=120, initial_indent='', subsequent_indent=' '*11, break_long_words=False)\n        all_str = '\\n'.join(tw.wrap(str(_all)))\n        f.write(f\"\\n\\n# %% auto 0\\n__all__ = {all_str}\")\n        write_cells(cells[last_future:], self.hdr, f, 1)\n        f.write('\\n')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"def _print_file(fname, mx=None): print(Path(fname).read_text().strip()[:ifnone(mx,9999)])\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'cells = make_code_cells("from __future__ import print_function", "#export\\ndef a(): ...", "def b(): ...")\nmm.make(cells, L([cells[1]]))\nprint(Path(\'tmp/test/testing.py\').read_text())\n')),(0,o.kt)(f,{lang:"",mdxType:"CodeOutputBlock"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# AUTOGENERATED! DO NOT EDIT! File to edit: ../01_export.ipynb.\n\n# %% ../01_export.ipynb 0\nfrom __future__ import print_function\n\n# %% auto 0\n__all__ = ['a']\n\n# %% ../01_export.ipynb 2\n#export\ndef a(): ...\n\n# %% ../01_export.ipynb 3\ndef b(): ...\n"))),(0,o.kt)("p",null,"Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"all_cells=[]")," if you don't want any ",(0,o.kt)("inlineCode",{parentName:"p"},"__all__")," added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#export\n@patch\ndef _update_all(self:ModuleMaker, all_cells, alls):\n    return pformat(alls + self.make_all(all_cells), width=160)\n\n@patch\ndef _make_exists(self:ModuleMaker, cells, all_cells=None):\n    \"`make` for `is_new=False`\"\n    if all_cells: update_var('__all__', partial(self._update_all, all_cells), fn=self.fname)\n    with self.fname.open('a') as f: write_cells(cells, self.hdr, f)\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"is_new=False")," then the additional definitions are added to the bottom, and any existing ",(0,o.kt)("inlineCode",{parentName:"p"},"__all__")," is updated with the newly-added symbols."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"c2 = make_code_cells(\"def c(): ...\", \"def d(): ...\")\nmm = ModuleMaker(dest='tmp', name='test.testing', nb_path=Path.cwd()/'01_export.ipynb', is_new=False)\nmm.make(c2, c2)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"g = exec_new('from tmp.test.testing import *')\nfor s in \"a c d\".split(): assert s in g, s\nassert 'b' not in g\nassert g['a']() is None\n")),(0,o.kt)("h2",{id:"export--"},"Export -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"path = Path('../nbprocess')\n(path/'read.py').unlink(missing_ok=True)\n(path/'maker.py').unlink(missing_ok=True)\n\nadd_init(path)\ncfg = get_config()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#export\ndef basic_export_nb2(fname, name, dest=None):\n    \"A basic exporter to bootstrap nbprocess using `ModuleMaker`\"\n    if dest is None: dest = get_config().path('lib_path')\n    cells = L(c for c in read_nb(fname).cells if re.match(r'#\\s*export', c.source))\n    ModuleMaker(dest=dest, name=name, nb_path=fname).make(cells)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"basic_export_nb2('00_read.ipynb', 'read')\nbasic_export_nb2('01_maker.ipynb', 'maker')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"g = exec_new('from nbprocess import maker')\nassert g['maker'].ModuleMaker\nassert 'ModuleMaker' in g['maker'].__all__\n")))}u.isMDXComponent=!0}}]);