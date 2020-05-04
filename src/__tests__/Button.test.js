import { shallow } from "enzyme";
import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";
import renderer from "react-test-renderer";
import { Button, ButtonInstance, Text } from "../index";
import { SIZES } from "../theme";
import { rgba } from "../utils";

describe("<Button />", () => {
  it("render default TouchableOpacity", () => {
    const button = <Button />;

    const shallowButton = shallow(button);
    const componentTree = renderer.create(button).toTree();

    const buttonType = shallow(<ButtonInstance />);

    const style = StyleSheet.flatten(shallowButton.props().style);

    expect(componentTree.props.opacity).toEqual(0.8);

    expect(style).toEqual({
      minHeight: SIZES.base * 5.5,
      borderRadius: SIZES.radius,
      backgroundColor: "#4630EB",
      justifyContent: "center"
    });

    expect(buttonType.name()).toEqual("TouchableOpacity");
  });

  it("transparent", () => {
    const component = renderer.create(<Button transparent />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("transparent");
  });

  it("primary", () => {
    const component = renderer.create(<Button primary />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#4630EB");
  });

  it("secondary", () => {
    const component = renderer.create(<Button secondary />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#A3A1F7");
  });

  it("tertiary", () => {
    const component = renderer.create(<Button tertiary />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#FFE358");
  });

  it("black", () => {
    const component = renderer.create(<Button black />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#000020");
  });

  it("white", () => {
    const component = renderer.create(<Button white />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#FFFFFF");
  });

  it("gray", () => {
    const component = renderer.create(<Button gray />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#535453");
  });

  it("error", () => {
    const component = renderer.create(<Button error />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#DC3545");
  });

  it("warning", () => {
    const component = renderer.create(<Button warning />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#FFE358");
  });

  it("success", () => {
    const component = renderer.create(<Button success />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#4CD964");
  });

  it("info", () => {
    const component = renderer.create(<Button info />).toJSON();
    const style = StyleSheet.flatten(component.props.style);
    expect(style.backgroundColor).toEqual("#4DA1FF");
  });

  it('color="#88B04B"', () => {
    const button = renderer.create(<Button color="#88B04B" />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.color).toEqual("#88B04B");
    expect(style.backgroundColor).toEqual("#88B04B");
  });

  it("outlined", () => {
    const button = renderer.create(<Button primary outlined />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.outlined).toEqual(true);
    expect(style.borderWidth).toEqual(1);
    expect(style.borderColor).toEqual("#4630EB");
    expect(style.backgroundColor).toEqual("transparent");
  });

  it("default flex", () => {
    const button = renderer.create(<Button />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.flex).toEqual(0);
    expect(style.flex).toEqual(undefined);
  });

  it("flex", () => {
    const button = renderer.create(<Button flex />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.flex).toEqual(true);
    expect(style.flex).toEqual(1);
  });

  it("flex=0.5", () => {
    const button = renderer.create(<Button flex={0.5} />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.flex).toEqual(0.5);
    expect(style.flex).toEqual(0.5);
  });

  it("height=56", () => {
    const button = renderer.create(<Button height={56} />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.height).toEqual(56);
    expect(style.height).toEqual(56);
  });

  it("margin={12}", () => {
    const button = renderer.create(<Button margin={12} />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.margin).toEqual(12);
    expect(style.marginBottom).toEqual(12);
    expect(style.marginLeft).toEqual(12);
    expect(style.marginRight).toEqual(12);
    expect(style.marginTop).toEqual(12);
  });

  it("marginHorizontal={6} marginVertical={8}", () => {
    const button = renderer.create(
      <Button marginHorizontal={6} marginVertical={8} />
    );

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.marginHorizontal).toEqual(6);
    expect(instance.props.marginVertical).toEqual(8);

    expect(style.marginLeft).toEqual(6);
    expect(style.marginRight).toEqual(6);
    expect(style.marginBottom).toEqual(8);
    expect(style.marginTop).toEqual(8);
  });

  it("marginTop={6}, marginRight={5}, marginBottom={4}, marginLeft={3}", () => {
    const button = renderer.create(
      <Button marginTop={6} marginRight={5} marginBottom={4} marginLeft={3} />
    );

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.marginTop).toEqual(6);
    expect(instance.props.marginRight).toEqual(5);
    expect(instance.props.marginBottom).toEqual(4);
    expect(instance.props.marginLeft).toEqual(3);
    expect(style.marginLeft).toEqual(3);
    expect(style.marginBottom).toEqual(4);
    expect(style.marginRight).toEqual(5);
    expect(style.marginTop).toEqual(6);
  });

  it("marginTop, marginRight, marginBottom, marginLeft, marginVertical, marginHorizontal", () => {
    const button = renderer.create(
      <Button
        marginTop
        marginRight
        marginBottom
        marginLeft
        marginVertical
        marginHorizontal
      />
    );

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.marginTop).toEqual(true);
    expect(instance.props.marginRight).toEqual(true);
    expect(instance.props.marginBottom).toEqual(true);
    expect(instance.props.marginLeft).toEqual(true);
    expect(instance.props.marginVertical).toEqual(true);
    expect(instance.props.marginHorizontal).toEqual(true);
    expect(style.marginTop).toEqual(8);
    expect(style.marginRight).toEqual(8);
    expect(style.marginBottom).toEqual(8);
    expect(style.marginLeft).toEqual(8);
  });

  it("padding={12}", () => {
    const button = renderer.create(<Button padding={12} />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.padding).toEqual(12);
    expect(style.paddingBottom).toEqual(12);
    expect(style.paddingLeft).toEqual(12);
    expect(style.paddingRight).toEqual(12);
    expect(style.paddingTop).toEqual(12);
  });

  it("paddingHorizontal={6} paddingVertical={8}", () => {
    const button = renderer.create(
      <Button paddingHorizontal={6} paddingVertical={8} />
    );

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.paddingHorizontal).toEqual(6);
    expect(instance.props.paddingVertical).toEqual(8);
    expect(style.paddingLeft).toEqual(6);
    expect(style.paddingRight).toEqual(6);
    expect(style.paddingTop).toEqual(8);
    expect(style.paddingBottom).toEqual(8);
  });

  it("paddingTop={6}, paddingRight={5}, paddingBottom={4}, paddingLeft={3}", () => {
    const button = renderer.create(
      <Button
        paddingTop={6}
        paddingRight={5}
        paddingBottom={4}
        paddingLeft={3}
      />
    );

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.paddingTop).toEqual(6);
    expect(instance.props.paddingRight).toEqual(5);
    expect(instance.props.paddingBottom).toEqual(4);
    expect(instance.props.paddingLeft).toEqual(3);
    expect(style.paddingLeft).toEqual(3);
    expect(style.paddingBottom).toEqual(4);
    expect(style.paddingRight).toEqual(5);
    expect(style.paddingTop).toEqual(6);
  });

  it("paddingTop, paddingRight, paddingBottom, paddingLeft, paddingVertical, paddingHorizontal", () => {
    const button = renderer.create(
      <Button
        paddingTop
        paddingRight
        paddingBottom
        paddingLeft
        paddingVertical
        paddingHorizontal
      />
    );

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.paddingTop).toEqual(true);
    expect(instance.props.paddingRight).toEqual(true);
    expect(instance.props.paddingBottom).toEqual(true);
    expect(instance.props.paddingLeft).toEqual(true);
    expect(instance.props.paddingVertical).toEqual(true);
    expect(instance.props.paddingHorizontal).toEqual(true);
    expect(style.paddingTop).toEqual(8);
    expect(style.paddingRight).toEqual(8);
    expect(style.paddingBottom).toEqual(8);
    expect(style.paddingLeft).toEqual(8);
  });

  it("disabled", () => {
    const button = renderer.create(<Button disabled />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.disabled).toEqual(true);
    expect(style.backgroundColor).toEqual(rgba("#4630EB", 0.5));
  });

  it("opacity={0.5}", () => {
    const instance = renderer.create(<Button opacity={0.5} />).root;
    expect(instance.props.opacity).toEqual(0.5);
  });

  it("ButtonType: nativeFeedback", () => {
    const component = renderer.create(<Button nativeFeedback />).toTree();
    const buttonType = shallow(
      <ButtonInstance Touchable={TouchableNativeFeedback} />
    );

    expect(component.props.nativeFeedback).toEqual(true);
    expect(buttonType.name()).toEqual("DummyTouchableNativeFeedback");
  });

  /**
   *  Apparently TouchableWithoutFeedback and TouchableHighlight needs a child to render
   *  https://stackoverflow.com/questions/39862145/react-children-only-expected-to-receive-a-single-react-element-child-error-whe
   */

  it("ButtonType: highlight", () => {
    const component = renderer
      .create(
        <Button highlight>
          <Text />
        </Button>
      )
      .toTree();

    const buttonType = shallow(
      <ButtonInstance Touchable={TouchableHighlight}>
        <Text />
      </ButtonInstance>
    );

    expect(component.props.highlight).toEqual(true);
    expect(buttonType.name()).toEqual("TouchableHighlight");
  });

  it("ButtonType: withoutFeedback", () => {
    const component = renderer
      .create(
        <Button withoutFeedback>
          <Text />
        </Button>
      )
      .toTree();
    const buttonType = shallow(
      <ButtonInstance Touchable={TouchableWithoutFeedback}>
        <Text />
      </ButtonInstance>
    );

    expect(component.props.withoutFeedback).toEqual(true);
    expect(buttonType.name()).toEqual("TouchableWithoutFeedback");
  });

  it("onPress", () => {
    const onPress = jest.fn();
    const component = shallow(<Button onPress={onPress} />);
    component.simulate("press");
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("borderWidth={2}", () => {
    const button = renderer.create(<Button borderWidth={2} />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.borderWidth).toEqual(2);
    expect(style.borderWidth).toEqual(2);
  });

  it("borderColor='#4630EB'", () => {
    const button = renderer.create(<Button borderColor="#4630EB" />);

    const component = button.toJSON();
    const instance = button.root;

    const style = StyleSheet.flatten(component.props.style);
    expect(instance.props.borderColor).toEqual("#4630EB");
    expect(style.borderColor).toEqual("#4630EB");
  });
});
