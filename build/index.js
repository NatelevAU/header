"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const material_1 = require("@mui/material");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
const transformOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
const Header = (_a) => {
    var { headerType, logo: LogoComponent, firstElements = [], middleElements = [], lastElements = [], headerWidth = 15, topBackground, background, backgroundColor = 'white', textColor = 'primary.main', highlightBackgroundColor = 'primary.main', highlightTextColor = 'white', children } = _a, rest = __rest(_a, ["headerType", "logo", "firstElements", "middleElements", "lastElements", "headerWidth", "topBackground", "background", "backgroundColor", "textColor", "highlightBackgroundColor", "highlightTextColor", "children"]);
    const theme = (0, material_1.useTheme)();
    const localTheme = (0, material_1.createTheme)({
        components: {
            MuiList: {
                styleOverrides: {
                    root: {
                        backgroundColor: theme.palette.primary.main,
                    },
                },
            },
        },
    });
    const [anchorElNav, setAnchorElNav] = react_1.default.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const isTopHeader = headerType === 'top' || headerType === 'drop-top';
    const isSideHeader = headerType === 'side' || headerType === 'side-right' || headerType === 'drop-side';
    const isDropHeader = headerType === 'drop-top' || headerType === 'drop-side';
    const isFooter = headerType === 'bottom';
    const isTransparent = backgroundColor === 'transparent';
    const isXsScreen = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('md'));
    const [isShrunk, setIsShrunk] = react_1.default.useState(isXsScreen);
    const location = (0, react_router_dom_1.useLocation)();
    // Required to fix a scrollbar bug that shifts side header
    // BUT also has a bug that causes the scrollbar to remain gone when navigating to a new page
    isSideHeader &&
        (0, react_1.useEffect)(() => {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            const hasScrollbar = scrollbarWidth > 0;
            // Hide scrollbar when menu is open
            if (anchorElNav) {
                document.body.style.overflow = 'hidden';
                if (hasScrollbar) {
                    document.body.style.paddingRight = `${scrollbarWidth}px`;
                }
            }
            else {
                // Restore default styles when menu is closed
                document.body.style.overflow = '';
                document.body.style.paddingRight = ''; // Reset to browser default
            }
            return () => {
                // Reset styles when component unmounts
                document.body.style.overflow = 'hidden';
                if (hasScrollbar) {
                    document.body.style.paddingRight = `${scrollbarWidth}px`;
                }
            };
        }, [anchorElNav]);
    (0, react_1.useEffect)(() => {
        if (isXsScreen && !isTopHeader) {
            setIsShrunk(true);
        }
        else {
            setIsShrunk(false);
        }
    }, [location.pathname, isXsScreen]);
    // Function to toggle the 'shrunk' state
    const toggleShrunk = () => {
        setIsShrunk(!isShrunk);
    };
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };
    const topBackgroundStyle = {
        backgroundImage: `url(${topBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
    };
    const AppBarStyle = Object.assign({ position: isSideHeader ? 'fixed' : 'sticky', sx: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (isSideHeader
            ? {
                top: 0,
                left: headerType === 'side-right' ? 'auto' : 0,
                right: headerType === 'side-right' ? 0 : 'auto',
                bottom: 0,
                width: isShrunk
                    ? { xs: `${headerWidth}vw`, md: `${headerWidth / 3}vw` }
                    : { xs: '80vw', md: `${headerWidth}vw` },
                height: '100vh',
                overflowX: 'auto',
                flexDirection: 'column',
            }
            : {})), { transition: 'background-color 0s ease, box-shadow 0s ease' }), (isTransparent ? { boxShadow: 'none' } : {})), { backgroundColor: backgroundColor }), (isSideHeader ? {} : Object.assign({}, backgroundStyle))) }, rest);
    const allElements = [...firstElements, ...middleElements, ...lastElements];
    const addElementProps = (Element, index) => {
        const extraProps = {
            backgroundColor,
            textColor,
            highlightBackgroundColor,
            highlightTextColor,
            shrunk: isShrunk,
        };
        return (0, jsx_runtime_1.jsx)(Element, Object.assign({}, extraProps), index);
    };
    const addElementPropsMobile = (Element, index) => {
        const extraProps = {
            backgroundColor: 'primary',
            textColor: 'white',
            isDropDown: true,
            shrunk: isShrunk,
        };
        return (0, jsx_runtime_1.jsx)(Element, Object.assign({}, extraProps), index);
    };
    return ((0, jsx_runtime_1.jsxs)(material_1.AppBar, Object.assign({}, AppBarStyle, { children: [isSideHeader && ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: Object.assign({}, topBackgroundStyle), children: [!isShrunk && LogoComponent ? (0, jsx_runtime_1.jsx)(LogoComponent, {}) : null, (0, jsx_runtime_1.jsx)(material_1.IconButton, { "aria-label": "close", sx: {
                            color: 'white',
                        }, onClick: toggleShrunk, children: isShrunk ? (0, jsx_runtime_1.jsx)(Menu_1.default, {}) : (0, jsx_runtime_1.jsx)(Close_1.default, {}) })] })), (0, jsx_runtime_1.jsxs)(material_1.Container, { maxWidth: "xl", sx: Object.assign(Object.assign(Object.assign(Object.assign({ display: 'flex' }, (isTopHeader ? { flexDirection: 'row' } : {})), (isFooter ? { flexDirection: { xs: 'column', md: 'row' } } : {})), (isSideHeader
                    ? { flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }
                    : {})), { alignItems: isFooter ? 'flex-start' : 'center', padding: isFooter ? 1 : undefined }), children: [isDropHeader || ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: Object.assign(Object.assign(Object.assign({ width: isSideHeader ? '100%' : 'auto', display: { xs: isTopHeader ? 'none' : 'flex', md: 'flex' }, justifyContent: 'flex-start' }, (isSideHeader ? { flexDirection: 'column' } : {})), (isTopHeader ? { flexBasis: '33%' } : {})), (isFooter ? { flexDirection: 'column', flex: 1, py: 1 } : {})), children: [!isSideHeader && LogoComponent && (0, jsx_runtime_1.jsx)(LogoComponent, {}), firstElements.map((Element, index) => addElementProps(Element, index))] }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: Object.assign(Object.assign(Object.assign({ width: isSideHeader ? '100%' : 'auto', display: { xs: isTopHeader ? 'none' : 'flex', md: 'flex' } }, (isSideHeader
                                    ? {
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        // Below code keeps middleElements centered perfectly, BUT has risk of overflow
                                        // position: 'absolute',
                                        // top: '50%',
                                        // left: '2%',
                                        // width: '100%',
                                    }
                                    : {})), (isTopHeader ? { flexBasis: '33%', justifyContent: 'center' } : {})), (isFooter ? { flexDirection: 'column', flex: '0 1 auto', py: 1 } : {})), children: middleElements.map((Element, index) => addElementProps(Element, index)) }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: Object.assign(Object.assign(Object.assign({ width: isSideHeader ? '100%' : 'auto', display: { xs: isTopHeader ? 'none' : 'flex', md: 'flex' } }, (isSideHeader ? { flexDirection: 'column', justifyContent: 'flex-start' } : {})), (isTopHeader ? { flexBasis: '33%', justifyContent: 'flex-end' } : {})), (isFooter
                                    ? {
                                        flexDirection: 'column',
                                        flex: 1,
                                        justifyContent: { xs: 'flex-start', md: 'center' },
                                    }
                                    : {})), children: lastElements.map((Element, index) => addElementProps(Element, index)) })] })), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                            flexGrow: 1,
                            display: {
                                xs: isTopHeader || isDropHeader ? 'flex' : 'none',
                                md: isDropHeader ? 'flex' : 'none',
                            },
                            justifyContent: 'space-between',
                        }, children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { "aria-label": "menu", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: e => {
                                    Boolean(anchorElNav) || e.stopPropagation();
                                    handleOpenNavMenu(e);
                                }, color: backgroundColor !== 'white' ? 'secondary' : 'primary', children: (0, jsx_runtime_1.jsx)(Menu_1.default, {}) }), LogoComponent && !isSideHeader && ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                                    flexGrow: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginLeft: '-48px',
                                }, children: (0, jsx_runtime_1.jsx)(LogoComponent, {}) })), (0, jsx_runtime_1.jsx)(material_1.ThemeProvider, { theme: localTheme, children: (0, jsx_runtime_1.jsx)(material_1.Menu, { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: anchorOrigin, keepMounted: true, transformOrigin: transformOrigin, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, children: allElements.map((Element, index) => ((0, jsx_runtime_1.jsx)(material_1.MenuItem, { onClick: handleCloseNavMenu, sx: { mx: 0, my: 0, px: 0, py: 0 }, children: addElementPropsMobile(Element, index) }, index))) }) })] })] })] })));
};
exports.default = Header;
