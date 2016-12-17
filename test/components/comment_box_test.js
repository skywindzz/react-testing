import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';
import App from '../../src/components/app';

describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('show a comment box', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a botton', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('show text is entered in textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('when submmited, clear input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});