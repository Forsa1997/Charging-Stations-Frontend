// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
//import 'jest-enzyme';
import Enzyme from 'enzyme'
import 'jest-canvas-mock';
// import Adapter from 'enzyme-adapter-react-17'
import '@testing-library/jest-dom'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

var createElementNSOrig = global.document.createElementNS
global.document.createElementNS = function (namespaceURI, qualifiedName) {
    if (namespaceURI === 'http://www.w3.org/2000/svg' && qualifiedName === 'svg') {
        var element = createElementNSOrig.apply(this, arguments)
        element.createSVGRect = function () { };
        return element;
    }
    return createElementNSOrig.apply(this, arguments)
}