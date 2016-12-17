import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


//use describe to group together similar test
describe('App', () => {
    let component;

    beforeEach(() => {
        //create an instance of App
        component = renderComponent(App);
    });
    //Use 'it' to test single attribute of a target
    it('shows comment box', () => {
        //Use 'expect' to make an 'assertion' about a target
        expect(component.find('.comment-box')).to.exist;
    });

    it('shows comment list', () => {
        expect(component.find('.comment-list')).to.exist;
    });
});